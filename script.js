
const lyrics = [
  "Don't worry, you did well today 🌸",
  "Smile, even if it's hard 💖",
  "We are always with you 💫",
  "Even in darkness, stars shine ✨",
  "You’re not alone 🌷"
];

// Number of images in each folder
const imageCounts = {
  seventeen: 2,
  hoshi: 2,
  friends: {
    afsu: 5,
    aji: 21,
    san: 33,
    snehu: 26,
    lakshu: 17,
    kavi: 15,
    sheebu: 2
  }
};

// Generate file paths for given folder
function generatePaths(folder, count) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(`images/${folder}/${folder}${i}.jpg`);
  }
  return arr;
}

// Utility: pick random element(s)
function randomPick(arr, count = 1) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, count);
}

// Build images object dynamically
const images = {
  seventeen: generatePaths("seventeen", imageCounts.seventeen),
  hoshi: generatePaths("hoshi", imageCounts.hoshi),
  friends: {}
};

for (let friend in imageCounts.friends) {
  images.friends[friend] = generatePaths(friend, imageCounts.friends[friend]);
}

// DOM elements
const left = document.getElementById("leftImages");
const center = document.getElementById("centerImages");
const right = document.getElementById("rightImages");
const bigSection = document.getElementById("bigImageSection");

// 1. Display Seventeen & Hoshi in center
const seventeenImg = randomPick(images.seventeen)[0];
center.innerHTML += `<img src="${seventeenImg}" alt="Seventeen" class="big-center">`;

// 2. Add Group photo (large)
const groupImg = "images/group/group1.jpg"; // <-- put your group photo path here
center.innerHTML += `<img src="${groupImg}" alt="Group" class="big-center">`;

// 3. Display Hoshi (normal size)
const hoshiImg = randomPick(images.hoshi)[0];
center.innerHTML += `<img src="${hoshiImg}" alt="Hoshi">`;

// 2. Distribute friends to left & right columns
const friendKeys = Object.keys(images.friends);
const leftKeys = randomPick(friendKeys, Math.ceil(friendKeys.length / 2));
const rightKeys = friendKeys.filter(k => !leftKeys.includes(k));

// Left column
leftKeys.forEach(folder => {
  const img = randomPick(images.friends[folder])[0];
  left.innerHTML += `<img src="${img}" alt="${folder}"><p>${folder}</p>`;
});

// Right column
rightKeys.forEach(folder => {
  const img = randomPick(images.friends[folder])[0];
  right.innerHTML += `<img src="${img}" alt="${folder}"><p>${folder}</p>`;
});

// 3. Display random lyric
document.getElementById("lyric").innerText =
  lyrics[Math.floor(Math.random() * lyrics.length)];

// Letters
const letters = {
  A: { text: "Dear A, you are loved 🌸", img: "images/friend1.jpeg" },
  B: { text: "Dear B, you make us smile 💖", img: "images/friend2.jpeg" },
  C: { text: "Dear C, stay strong 💫", img: "images/group.jpeg" },
  D: { text: "Dear D, keep shining ✨", img: "images/hoshi1.jpg" },
  E: { text: "Dear E, you're amazing 🌷", img: "images/hoshi2.jpeg" },
  F: { text: "Dear F, we’re always here 💕", img: "images/group.jpeg" },
  G: { text: "Dear G, we love you 🌈", img: "images/friend1.jpeg" }
};

function showLetter(friend) {
  window.location.href = `to_${friend}.html`;
}


// 🎶 Comfort Mode
const comfortBtn = document.getElementById("comfortBtn");
const audio = document.getElementById("comfortMusic");
const body = document.body;
const imagesContainer = document.querySelector(".image-layout");
const bubblesContainer = document.getElementById("bubbles");

const videoOverlay = document.getElementById("videoOverlay");
const friendVideo = document.getElementById("friendVideo");

// 🎥 Your videos list
const videoList = [
  "videos/video1.mp4",
  "videos/video2.mp4"
];

let bubbleInterval;

comfortBtn.addEventListener("click", () => {
  // Pick random video
  const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];
  friendVideo.src = randomVideo;

  // Show video overlay
  videoOverlay.style.display = "flex";

  // Ensure sound is ON
  friendVideo.muted = false;
  friendVideo.currentTime = 0;

  // Play video
  friendVideo.play().catch(err => {
    console.warn("Autoplay blocked, enabling controls", err);
    friendVideo.setAttribute("controls", true);
  });

  // When video ends → start comfort effects
  friendVideo.onended = () => {
    videoOverlay.style.display = "none";

    // 🎶 Play music
    audio.volume = 0.4;
    audio.play();

    // ✨ Floating effect
    imagesContainer.classList.add("float-effect");

    // 💭 Bubble effect
    bubbleInterval = setInterval(() => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubble.style.left = Math.random() * 100 + "vw";
      bubble.style.width = bubble.style.height = (Math.random() * 25 + 15) + "px";
      bubblesContainer.appendChild(bubble);
      setTimeout(() => bubble.remove(), 10000);
    }, 400);

    // 🌈 Pastel background
    body.classList.add("pastel-bg");
  };
});



// 🎁 Surprise Box (only Sunday)
function openSurprise() {
  document.getElementById("surpriseMessage").innerText =
    "We love you! 💕 Here's your weekly surprise ✨";
}

if (new Date().getDay() !== 0) {
  document.getElementById("surpriseBoxSection").style.display = "none";
}

