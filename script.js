const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

let noClickCount = 0;
let firstNoClick = true;

const messages = [
    "Are you confused? 😢",
    "Really? Think again 💔",
    "Last chance 😭",
    "Think carefully 😶"
];

// No button screen ke andar move kare
noBtn.style.position = "fixed";

// -------- MOVE FUNCTION (ONE TIME ONLY) --------
function moveNoButton() {
    const padding = 20;

    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Desktop: mouse paas aaye to bhage
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile: touch pe bhage
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

// -------- NO BUTTON CLICK --------
noBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // FIRST CLICK se hi slide / move
    if (firstNoClick) {
        moveNoButton();
        firstNoClick = false;
    }

    if (noClickCount < messages.length) {
        message.innerText = messages[noClickCount];

        // YES bada hota jaye
        yesBtn.style.width = (yesBtn.offsetWidth + 30) + "px";
        yesBtn.style.height = (yesBtn.offsetHeight + 15) + "px";

        // NO chhota hota jaye
        let newWidth = noBtn.offsetWidth - 20;
        let newHeight = noBtn.offsetHeight - 10;

        if (newWidth > 40 && newHeight > 20) {
            noBtn.style.width = newWidth + "px";
            noBtn.style.height = newHeight + "px";
        }

        noClickCount++;
    }
});

// -------- YES BUTTON --------
yesBtn.addEventListener("click", () => {
    message.innerText = "Yayyy 💖 I knew it!!!";
    noBtn.style.display = "none";
    yesBtn.style.width = "260px";
    yesBtn.style.height = "80px";

    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

// -------- HEARTS --------
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
