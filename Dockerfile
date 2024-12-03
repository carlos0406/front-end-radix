FROM node:20.17.0-alpine AS build

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml tsconfig.json vite.config.ts ./

RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]