FROM node:26-alpine AS base
USER $APP_UID
WORKDIR /app
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME/bin:$PATH"
COPY package.json ./
RUN wget -qO- https://get.pnpm.io/install.sh | env ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

FROM base AS dependencies
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/var/cache/pnpm \
    pnpm install --frozen-lockfile --store-dir=/var/cache/pnpm

FROM dependencies AS builder
ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA=$GIT_COMMIT_SHA
COPY . .
RUN pnpm run build

FROM base AS production-dependencies
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/var/cache/pnpm \
    pnpm install --prod --frozen-lockfile --store-dir=/var/cache/pnpm

FROM base AS runner
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3020
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY --from=production-dependencies /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=builder /app/build ./build
EXPOSE 3020
CMD ["pnpm", "run", "start"]
