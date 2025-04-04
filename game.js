let currentPista = 0;
const pistas = [
    {
        question: "La flor mas hermosa del mundo es?",
        answer: "Soy yo"
    },
    {
        question: "La luz que ilumina mi vida es?",
        answer: "Soy yo"
    },
    {
        question: "¿Quién es el amor de mi vida?",
        answer: "Soy yo"
    }
];

function displayPista() {
    const pista = pistas[currentPista];
    document.getElementById("question").innerText = pista.question;
    document.getElementById("answer").value = "";
    document.getElementById("message").innerText = `Resuelve la pista: ${pista.question}`;
    document.getElementById("next-button-container").style.display = "none";
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = pistas[currentPista].answer.toLowerCase();
    if (answer === correctAnswer) {
        document.getElementById("message").innerText = "¡Correcto! Vamos a la siguiente pista.";
        document.getElementById("next-button-container").style.display = "block";
    } else {
        document.getElementById("message").innerText = "¡Incorrecto! Intenta de nuevo.";
    }
}

function nextPista() {
    currentPista++;
    if (currentPista < pistas.length) {
        displayPista();
    } else {
        mensaje_final(); // Llamada a la función que muestra el mensaje final
    }
}

function mensaje_final() {
    // Mensaje al finalizar el juego
    document.getElementById("message").innerText = "¡Felicidades! Has resuelto todas las pistas. ¡Feliz Aniversario!";
    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-button-container").style.display = "none";

    // Mostrar animación de recompensa
    const rewardMessage = document.createElement("div");
    rewardMessage.classList.add("reward-message");
    rewardMessage.innerHTML = "<h2>¡Te Amo Mucho! 🎉💖 ¡Feliz 3 años, amor!</h2>";
    document.getElementById("game-container").appendChild(rewardMessage);

    // Mostrar imágenes decorativas (con rutas relativas)
    const image1 = document.createElement("img");
    image1.src = "images/foto1.jpeg";  // Ruta relativa
    image1.classList.add("decorative-image");
    document.getElementById("game-container").appendChild(image1);

    const image2 = document.createElement("img");
    image2.src = "images/foto2.jpeg";  // Ruta relativa
    image2.classList.add("decorative-image");
    document.getElementById("game-container").appendChild(image2);

    // Generar el código QR con la URL del sitio web
    QRCode.toCanvas(document.getElementById("qrcode"), "http://www.tusitio.com", function (error) {
        if (error) console.error(error);
        console.log("Código QR generado!");
    });
}

// Iniciar el juego
displayPista();
