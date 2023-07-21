console.log('ola')
const formulario = document.getElementById('formulario');
const endPoint = "http://localhost:8080/clientes/cadastrar"

formulario.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formulario);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        console.log(data)
    })
});


const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
    container.classList.toggle("change");
});
