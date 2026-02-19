// PASSWORD PAGE LOGIC
const inputs = document.querySelectorAll(".digit");
const message = document.getElementById("message");

if (inputs.length > 0) {
  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value && index < inputs.length - 1) inputs[index + 1].focus();
      checkCode();
    });
  });

  function checkCode() {
    const code = [...inputs].map(i => i.value).join("");
    if (code.length === 4) {
      if (code === "0910") {
        message.textContent = "Unlocking ❤️";
        heartExplosion();
        setTimeout(() => {
          window.location.href = "memories.html";
        }, 2000);
      } else {
        message.textContent = "Wrong code 😢";
      }
    }
  }
}

// HEART EXPLOSION
function heartExplosion() {
  const container = document.getElementById("hearts");
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}

// DAYS COUNTER
const daysText = document.getElementById("days");
if (daysText) {
  const startDate = new Date("2024-10-09");
  const today = new Date();
  const diff = Math.floor((today - startDate) / (1000*60*60*24));
  daysText.textContent = `We've been together for ${diff} days ❤️`;
}

// RANDOM LOVE REASONS

const reasons = [
  "Because you make even normal days feel special 💕",
  "Because you always make me smile",
  "Because talking to you is my favorite part of the day",
  "Because you're the cutest person ever",
  "Because you care about me so much",
  "Because you're my everything",
  "Because I love you SO SO MUCH 💗",
  "Because you're you ❤️"
];

function showReason() {
  const box = document.getElementById("reasonBox");
  const text = document.getElementById("reasonText");

  const random = reasons[Math.floor(Math.random() * reasons.length)];

  text.textContent = random;

  box.classList.add("open");
}



// FLOATING HEARTS BACKGROUND
const bg = document.querySelector(".hearts-bg");
if (bg) {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    bg.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 500);
}

function updateDaysTogether() {
  const startDate = new Date("2025-10-09");
  const today = new Date();

  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const el = document.getElementById("daysTogether");

  if (el) {
    el.textContent = `We've been together for ${diffDays} days ❤️`;
  }
}

updateDaysTogether();

/* ================= POPUP ================= */

function closePopup() {
  document.getElementById("birthdayPopup").style.display = "none";
}

/* ================= HUG BUTTON ================= */

function sendHug() {

  const msg = document.getElementById("hugMessage");
  msg.textContent = "Imagine me hugging you right now 🤗❤️";

  /* Screen squeeze */
  document.body.classList.add("hugging");
  setTimeout(() => {
    document.body.classList.remove("hugging");
  }, 500);

  /* Phone vibration */
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }

  /* Explosion center */
  const rect = msg.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  /* Hearts explosion */
  for (let i = 0; i < 30; i++) {
    createHeart(centerX, centerY);
  }

  /* Mwah texts */
  for (let i = 0; i < 6; i++) {
    createMwah(centerX, centerY);
  }
}


/* Heart creator */

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  const offsetX = (Math.random() - 0.5) * 120;
  const offsetY = (Math.random() - 0.5) * 120;

  heart.style.left = x + offsetX + "px";
  heart.style.top = y + offsetY + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1200);
}


/* Mwah creator */

function createMwah(x, y) {
  const mwah = document.createElement("div");
  mwah.className = "mwah";

  const kisses = ["mwah 💕", "kiss 😘", "love u ❤️", "muahhh 💖"];
  mwah.textContent = kisses[Math.floor(Math.random() * kisses.length)];

  const angle = Math.random() * Math.PI * 2;
  const radius = 80 + Math.random() * 80;

  const offsetX = Math.cos(angle) * radius;
  const offsetY = Math.sin(angle) * radius;

  mwah.style.left = x + offsetX + "px";
  mwah.style.top = y + offsetY + "px";

  document.body.appendChild(mwah);

  setTimeout(() => mwah.remove(), 2800);
}


function sendHug() {

  const msg = document.getElementById("hugMessage");
  msg.textContent = "Imagine me hugging you right now 🤗❤️";

  /* Screen squeeze */
  document.body.classList.add("hugging");
  setTimeout(() => {
    document.body.classList.remove("hugging");
  }, 500);

  /* Phone vibration */
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }

  /* Explosion center */
  const rect = msg.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  /* Hearts explosion */
  for (let i = 0; i < 30; i++) {
    createHeart(centerX, centerY);
  }

  /* Mwah texts */
for (let i = 0; i < 10; i++) {
  createMwah(centerX, centerY);
}
}


/* Heart creator */

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  const offsetX = (Math.random() - 0.5) * 120;
  const offsetY = (Math.random() - 0.5) * 120;

  heart.style.left = x + offsetX + "px";
  heart.style.top = y + offsetY + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1200);
}


/* Mwah creator */

function createMwah(x, y) {
  const mwah = document.createElement("div");
  mwah.className = "mwah";

  const kisses = ["mwah 💕", "kiss ", "love u ❤️", "muahhh "];
  mwah.textContent = kisses[Math.floor(Math.random() * kisses.length)];

  // bigger radius for better spread
  const radius = 150 + Math.random() * 220; // 100–220px from center
  const angle = Math.random() * Math.PI * 2;

  const offsetX = Math.cos(angle) * radius;
  const offsetY = Math.sin(angle) * radius;

  mwah.style.left = x + offsetX + "px";
  mwah.style.top = y + offsetY + "px";

  document.body.appendChild(mwah);

  setTimeout(() => mwah.remove(), 2800);
}




/* ================= HEART CURSOR TRAIL ================= */

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
}

/* ================= FLOATING SPARKLES ================= */

function createSparkle() {
  const sparkle = document.createElement("span");
  sparkle.textContent = "✨";

  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.bottom = "-20px";

  document.querySelector(".sparkles").appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 6000);
}

setInterval(createSparkle, 400);
