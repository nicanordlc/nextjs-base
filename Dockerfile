FROM oven/bun:alpine as deps

WORKDIR /app

COPY package.json .
COPY bun.lockb .
COPY src .
RUN bun install

FROM oven/bun:alpine as builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:alpine

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static

CMD bun server.js
