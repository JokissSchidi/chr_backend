# Étape 1 : build de l'app NestJS
FROM node:18-alpine AS builder

WORKDIR /app

# Copie et installe les dépendances
COPY package*.json ./
RUN npm install

# Copie tous les fichiers
COPY . .

# Build du projet NestJS (va créer /app/dist)
RUN npm run build

# Étape 2 : image finale de production
FROM node:18-alpine

WORKDIR /app

# Copie uniquement les fichiers nécessaires
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.env .env

# Install uniquement les dépendances de production
RUN npm install --only=production

EXPOSE 3000

RUN ls -la dist

# Lancement de l'application NestJS
CMD ["node", "dist/main.js"]
