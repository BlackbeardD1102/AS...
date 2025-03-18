
const amigos = [];

function adicionarNombre() {
    const input = document.getElementById('nombre');
    const nombre = input.value.trim();

    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre);
    input.value = '';

    const listaAmigos = document.getElementById('lista-amigos');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía. Agrega nombres antes de sortear.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    const resultado = amigos[randomIndex];

    document.getElementById('nombre-sorteado').textContent = resultado;
    document.getElementById('resultado').classList.remove('oculto');
}
