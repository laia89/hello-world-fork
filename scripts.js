
var titleElem = document.getElementsByTagName('h1')[0];

titleElem.addEventListener('click', function() {
    showMessage();
});

function showMessage() {
    alert('Hello, World! Hola, Mundo! Hallo, Welt!');
}

function showWelcomeMsg() {
    alert('Welcome, Bienvenido, Willkommen, and 194 languages more!');
}

function showInstructions() {
    alert('Instructions!, Instrucciones!, Anweisungen!');
}