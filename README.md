# project-utp

## Project setup

Dubplicar el archivo .env.example con el nombre .env con la información necesario para configurar firebase.

Correr el siguiente comando para instalar las dependencias necesarias:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Firebase

Se agregó una clase que se encargará de conectar realizar las operaciones de lectura y escritura en farebase estos son:

```
retrieveAll(documentName') => promise
addDocument(documentName, ObjectInfo) => promise
```