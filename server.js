//La primera línea da acceso a la biblioteca express buscando en sus node_modules "express".
const express = require('express');
//La siguiente crea una instancia del constructor express, que llamaremos "app".
const app = express();


const mockUserData=[
    {name:'Esmeralda'},
    {name:'Madera'}
    ]
    
    app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              users: mockUserData
         })
    })
    



app.listen(8000,function(){ console.log("server is running")})

//Para ejecutar el archivo server.js se debe ingresar lo siguiente en la terminal: node server.js

