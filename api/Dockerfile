# Utilizando a imagem oficial do Node.js
FROM node:16

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY . .

# Expor a porta 5000 (ou qualquer porta que seu servidor utilize)
EXPOSE 8800

# Comando para iniciar o servidor Node.js
CMD ["npm", "start"]
