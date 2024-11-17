# Utilizando a imagem oficial do Node.js
FROM node:20 AS build

# Definir o ambiente para evitar interação no debconf
ENV DEBIAN_FRONTEND=noninteractive

# Atualizar pacotes e instalar os pacotes de locale
RUN apt-get update && apt-get install -y locales locales-all

# Gerar o locale necessário
RUN locale-gen en_US.UTF-8

# Configurar o locale diretamente com as variáveis de ambiente
ENV LANG=en_US.UTF-8
ENV LC_ALL=en_US.UTF-8

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY . .

# Build da aplicação React
RUN npm run build

# Etapa 2: Servindo o React Build usando o Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
