//La primera línea da acceso a la biblioteca express buscando en sus node_modules "express".
const express = require('express');
//La siguiente crea una instancia del constructor express, que llamaremos "app".
const app = express();

app.listen(8000,function(){
    console.log("server is running")
    })

//Para ejecutar el archivo server.js se debe ingresar lo siguiente en la terminal: node server.js

