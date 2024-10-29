# Usa uma imagem de Node.js adequada
FROM node:18-bullseye

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de configuração das dependências
COPY package*.json ./

# Instala as dependências diretamente no container
RUN npm install

# Copia o restante do código para o container
COPY . .

# Recompila dependências nativas
RUN npm rebuild

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
