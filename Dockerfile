# Étape 1 : construire le frontend
FROM node:25-alpine AS build

WORKDIR /app

# Copier les fichiers package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le projet
COPY . .

# Construire le frontend
RUN npm run build

# Étape 2 : créer l'image finale pour le backend + frontend statique
FROM node:25-alpine

WORKDIR /app

# Installer seulement les dépendances nécessaires pour le backend
COPY package*.json ./
RUN npm install --production

# Copier le backend + frontend build
COPY --from=build /app/server ./server
COPY --from=build /app/dist ./dist

# Exposer le port
EXPOSE 8000

# Lancer le serveur
CMD ["node", "server/index.js"]
