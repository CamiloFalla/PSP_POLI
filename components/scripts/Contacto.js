const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert("Mensaje enviado con éxito");
    form.reset()
});
