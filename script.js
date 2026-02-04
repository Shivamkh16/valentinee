const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

function moveNoButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


let noClickCount = 0;

const messages = [
    "Are you confused? 😢",
    "Really? Think again 💔",
    "Last chance 😭",
    "Think carefully 😶"
];

// initial position setup
noBtn.style.position = "absolute";

noBtn.addEventListener("mouseenter", () => {
    // random movement when user tries to click NO
    function moveNoButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
noBtn.style.position = "fixed";

// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});



    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {

    if (noClickCount < messages.length) {
        message.innerText = messages[noClickCount];

        // YES bada
        yesBtn.style.width = (yesBtn.offsetWidth + 30) + "px";
        yesBtn.style.height = (yesBtn.offsetHeight + 15) + "px";

        // NO chhota
        let newWidth = noBtn.offsetWidth - 20;
        let newHeight = noBtn.offsetHeight - 10;

        if (newWidth > 40 && newHeight > 20) {
            noBtn.style.width = newWidth + "px";
            noBtn.style.height = newHeight + "px";
        }

        noClickCount++;
    }
});

yesBtn.addEventListener("click", () => {
    message.innerText = "Yayyy 💖 I knew it!!!";
    noBtn.style.display = "none";
    yesBtn.style.width = "260px";
    yesBtn.style.height = "80px";

    // HEARTS animation start
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}