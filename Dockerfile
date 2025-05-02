# Utilise une image officielle Node.js
FROM node:18-alpine

# Crée un dossier de travail
WORKDIR /app

# Copie les fichiers package
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le reste
COPY . .

# Build du projet
RUN npm run build

# Expose le port
EXPOSE 3000

# Commande de lancement
CMD ["npm", "run", "start"]
