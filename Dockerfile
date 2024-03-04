# Utilisez une image de node.js en tant que base
FROM node:latest

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package.json package-lock.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers dans le conteneur
COPY . .
# Exposez le port sur lequel votre application fonctionne (par exemple, 5000)
EXPOSE 5000

# Commande pour démarrer vos tests avec Mocha
CMD ["npm", "test"]

