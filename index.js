const express = require('express')
const escapeHtml = require('escape-html');
const app = express()

let txt = ""

app.get('/', (req, res)=>{
    res.send("Hola Mundo");
    res.send(document.cookie)
});

app.get('/grab', (req, res) => {
    
    //Guardamos la data que el usuario nos manda en una variable global
    const data = req.query.data
    
    //Recibir las cookies que  nos manda el usuario
    const cookies = req.query.cookies

    //txt += escapeHtml(data) + ""
    //res.send(escapeHtml(data));

    //Mostramos las cookies
    res.send(escapeHtml(cookies));
})

app.get('/read', (req, res) =>{
    //Leemos el valor que nos envian a txt
    res.send(escapeHtml(txt))
})

app.listen(3000, () => {
    console.log(`Escuchando en el puerto 3000`)
})
