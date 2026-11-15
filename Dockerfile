FROM node:26-alpine AS base
RUN mkdir -p /app /pnpm && chown node:node /app /pnpm
USER node
WORKDIR /app
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME/bin:$PATH"
COPY package.json ./
RUN wget -qO- https://get.pnpm.io/install.sh | env ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

FROM base AS dependencies
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/var/cache/pnpm,uid=1000,gid=1000 \
    pnpm install --frozen-lockfile --store-dir=/var/cache/pnpm

FROM dependencies AS builder
ARG GIT_COMMIT_SHA
ENV GIT_COMMIT_SHA=$GIT_COMMIT_SHA
COPY . .
RUN pnpm run build

FROM base AS production-dependencies
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/var/cache/pnpm,uid=1000,gid=1000 \
    pnpm install --prod --frozen-lockfile --store-dir=/var/cache/pnpm

FROM base AS runner
ENV HOST=0.0.0.0
COPY --from=production-dependencies /app/node_modules ./node_modules
COPY --from=production-dependencies /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=builder /app/build ./build
CMD ["pnpm", "run", "start"]
