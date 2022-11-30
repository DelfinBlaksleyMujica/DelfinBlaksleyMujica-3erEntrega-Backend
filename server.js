const express = require("express");
const productos = require ("./productos.json");
const container = require("./contenedor.js");


const app = express();

const PORT = 8080;

app.get("/productos" , ( req , res) => {
    res.send(`${JSON.stringify(productos)}`)
})

app.get("/productoRandom" , ( req , res) => {
    const generateRandomNumber = () => {
        let number = Math.ceil(Math.random()*productos.length + 1);
        return number;
    }
    let number = generateRandomNumber();
    let productoRandom = productos.find(obj => obj.id == number);


    res.send(`${JSON.stringify(productoRandom)}`)
})

const server = app.listen( PORT , () => {
    console.log(`Servidor express activo, escuchando en el puerto ${server.address().port}`);
}
)



/*Manejo de errores*/

server.on("error" , ( error ) => {
    console.log( "Error", error);
})