1. Inicializar projeto:
   $ yarn init -y

2. Adicionar bibliotecas:
   $ yarn add express
   $ yarn add nodemon -D
   $ yarn add mongoose
   $ yarn add multer
   $ yarn add cors

3. Configure nodemon in package.json:
   "scripts": {
       "dev": "nodemon src/server.js"
   }
