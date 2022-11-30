const Container = require("./contenedor.js");
const productos = new Container("./productos.json");

async function ejecutar(){


    const producto1={
        title:"Remera",
        price:9500,
        thumbnail:"https://tienda.guantexindustrial.com.ar/2508-large_default/remera-algodon-jersey-gris-talle-xxxxl.jpg",
    }

    const producto2={
        title:"Buzo",
        price:16500,
        thumbnail:"https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/dsc_0102_1653671035.jpg?itok=gWutm0re",
    }

    const producto3={
        title:"Campera",
        price:30800,
        thumbnail:"https://www.cordonandino.com/img/articulos/campera_piuquen_3_2_imagen4.jpg",
    }

    

   await productos.save(producto1);
   await productos.save(producto2);
   await productos.save(producto3);

    


    

}

ejecutar();