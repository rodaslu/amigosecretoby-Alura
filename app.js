// Variables globales
let participantes = [];
let emparejamientos = [];

// Elementos del DOM
const agregarBtn = document.getElementById('agregarBtn');
const participanteInput = document.getElementById('participanteInput');
const participantesLista = document.getElementById('participantesLista'); // Cambia este ID según tu HTML
const sorteoBtn = document.getElementById('sorteoBtn');
const reiniciarBtn = document.getElementById('reiniciarBtn');
const resultadosDiv = document.getElementById('resultadosDiv'); // Cambia este ID según tu HTML

// Función para agregar participantes
function agregarParticipante() {
    const nombre = participanteInput.value.trim();
    
    if (nombre && !participantes.includes(nombre)) {
        participantes.push(nombre);
        actualizarLista();
        participanteInput.value = '';
        participanteInput.focus();
    } else {
        alert('Por favor ingresa un nombre válido o que no esté repetido');
    }
}

// Función para actualizar la lista visual
function actualizarLista() {
    participantesLista.innerHTML = '';
    participantes.forEach(participante => {
        const li = document.createElement('li');
        li.textContent = participante;
        participantesLista.appendChild(li);
    });
}

// Función para realizar el sorteo
function realizarSorteo() {
    if (participantes.length < 2) {
        alert('Se necesitan al menos 2 participantes');
        return;
    }

    // Mezclar participantes
    let participantesMezclados = [...participantes].sort(() => Math.random() - 0.5);
    
    // Crear emparejam 