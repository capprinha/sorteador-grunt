document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (e) {
        e.preventDefault();
        let numeroMaxino = document.getElementById('numero-maxino').value;
        numeroMaxino = parseInt(numeroMaxino);

        let numeroAleatorio = Math.random() * numeroMaxino;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);


        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})