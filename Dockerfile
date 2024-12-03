# Usar imagem do Node 20.17.0 como base para build
FROM node:20.17.0-alpine AS build

# Instalar PNPM
RUN npm install -g pnpm

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de configuração do TypeScript e Vite
COPY package.json pnpm-lock.yaml tsconfig.json vite.config.ts ./

# Instalar dependências com PNPM
RUN pnpm install --frozen-lockfile

# Copiar todo o código fonte
COPY . .

# Construir o projeto
RUN pnpm run build

# Estágio de produção
FROM nginx:alpine

# Copiar arquivos de build para o nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuração personalizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 8080
EXPOSE 8080

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]