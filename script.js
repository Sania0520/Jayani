// // // Random Seventeen Lyrics
// // const lyrics = [
// //   "Don't worry, you did well today 🌸",
// //   "Smile, even if it's hard 💖",
// //   "We are always with you 💫",
// //   "Even in darkness, stars shine ✨",
// //   "You’re not alone 🌷"
// // ];

// // // Organized images
// // const images = {
// //   seventeen: [
// //     "images/seventeen/seventeen1.jpeg",
// //     "images/seventeen/seventeen2.jpeg"
// //   ],
// //   hoshi: [
// //     "images/hoshi/hoshi1.jpg",
// //     "images/hoshi/hoshi2.jpeg"
// //   ],
// //   friends: {
// //     afsu: [
// //       "images/afsu/afsu1.jpeg",
// //       //"images/afsu/afsu2.jpeg"
// //     ],
// //     aji: [
// //       "images/aji/aji1.jpeg",
// //       "images/aji/aji2.jpg"
// //     ],
// //     san: [
// //       "images/san/san1.jpeg",
// //       "images/san/san2.jpeg"
// //     ],
// //     snehu: [
// //       "images/snehu/snehu1.jpg",
// //       "images/snehu/snehu2.jpg"
// //     ],
// //     lakshu: [
// //       "images/lakshu/lakshu1.jpeg",
// //       "images/lakshu/lakshu2.jpeg"
// //     ],
// //     kavi: [
// //       "images/kavi/kavi1.jpeg",
// //       "images/kavi/kavi2.jpeg"
// //     ],
// //     sheebu: [
// //       "images/sheebu/sheebu1.jpeg",
// //       "images/sheebu/sheebu2.jpg"
// //     ]
// //   }
// // };

// // // Utility: pick random
// // function randomPick(arr, count = 1) {
// //   return arr.sort(() => 0.5 - Math.random()).slice(0, count);
// // }

// // // DOM elements
// // const left = document.getElementById("leftImages");
// // const center = document.getElementById("centerImages");
// // const right = document.getElementById("rightImages");

// // // 1. Display Seventeen & Hoshi in center
// // const seventeenImg = randomPick(images.seventeen)[0];
// // center.innerHTML += `<img src="${seventeenImg}" alt="Seventeen" class="seventeen">`;

// // const hoshiImg = randomPick(images.hoshi)[0];
// // center.innerHTML += `<img src="${hoshiImg}" alt="Hoshi" class="hoshi">`;

// // // 2. Distribute friends to left & right columns
// // const friendKeys = Object.keys(images.friends);
// // const leftKeys = randomPick(friendKeys, Math.ceil(friendKeys.length / 2));
// // const rightKeys = friendKeys.filter(k => !leftKeys.includes(k));

// // // Left column
// // leftKeys.forEach(folder => {
// //   const img = randomPick(images.friends[folder])[0];
// //   left.innerHTML += `<img src="${img}" alt="${folder}">`;
// // });

// // // Right column
// // rightKeys.forEach(folder => {
// //   const img = randomPick(images.friends[folder])[0];
// //   right.innerHTML += `<img src="${img}" alt="${folder}">`;
// // });

// // // 3. Display random lyric
// // document.getElementById("lyric").innerText =
// //   lyrics[Math.floor(Math.random() * lyrics.length)];

// // // Letters
// // const letters = {
// //   A: { text: "Dear A, you are loved 🌸", img: "images/friend1.jpeg" },
// //   B: { text: "Dear B, you make us smile 💖", img: "images/friend2.jpeg" },
// //   C: { text: "Dear C, stay strong 💫", img: "images/group.jpeg" },
// //   D: { text: "Dear D, keep shining ✨", img: "images/hoshi1.jpg" },
// //   E: { text: "Dear E, you're amazing 🌷", img: "images/hoshi2.jpeg" },
// //   F: { text: "Dear F, we’re always here 💕", img: "images/group.jpeg" },
// //   G: { text: "Dear G, we love you 🌈", img: "images/friend1.jpeg" }
// // };

// // function showLetter(friend) {
// //   window.location.href = `to_${friend}.html`;
// // }

// // // Comfort Mode
// // document.getElementById("comfortBtn").addEventListener("click", () => {
// //   const body = document.body;
// //   const audio = document.getElementById("comfortMusic");

// //   if (body.classList.contains("pastel-bg")) {
// //     body.classList.remove("pastel-bg");
// //     audio.pause();
// //     audio.currentTime = 0;
// //     alert("❌ Comfort Mode Deactivated ❌");
// //   } else {
// //     body.classList.add("pastel-bg");
// //     audio.play().catch(err => console.log("Autoplay blocked: ", err));
// //     alert("💖 Comfort Mode Activated! 💖");
// //   }
// // });

// // // Surprise Box (only Sunday)
// // function openSurprise() {
// //   document.getElementById("surpriseMessage").innerText =
// //     "We love you! 💕 Here's your weekly surprise ✨";
// // }

// // if (new Date().getDay() !== 0) {
// //   document.getElementById("surpriseBoxSection").style.display = "none";
// // }
// // Random Seventeen Lyrics
// const lyrics = [
//   "Don't worry, you did well today 🌸",
//   "Smile, even if it's hard 💖",
//   "We are always with you 💫",
//   "Even in darkness, stars shine ✨",
//   "You’re not alone 🌷"
// ];

// // Number of images available in each folder
// const imageCounts = {
//   seventeen: 2,
//   hoshi: 2,
//   friends: {
//     afsu: 1,   // afsu1.jpg, afsu2.jpg, afsu3.jpg
//     aji: 21,
//     san: 2,
//     snehu: 26,
//     lakshu: 2,
//     kavi: 2,
//     sheebu: 2
//   }
// };

// // Generate file paths for a given folder
// function generatePaths(folder, count) {
//   let arr = [];
//   for (let i = 1; i <= count; i++) {
//     arr.push(`images/${folder}/${folder}${i}.jpg`);
//   }
//   return arr;
// }

// // Utility: pick random element(s)
// function randomPick(arr, count = 1) {
//   return arr.sort(() => 0.5 - Math.random()).slice(0, count);
// }

// // Build images object dynamically
// const images = {
//   seventeen: generatePaths("seventeen", imageCounts.seventeen),
//   hoshi: generatePaths("hoshi", imageCounts.hoshi),
//   friends: {}
// };

// for (let friend in imageCounts.friends) {
//   images.friends[friend] = generatePaths(friend, imageCounts.friends[friend]);
// }

// // DOM elements
// const left = document.getElementById("leftImages");
// const center = document.getElementById("centerImages");
// const right = document.getElementById("rightImages");

// // 1. Display Seventeen & Hoshi in center
// const seventeenImg = randomPick(images.seventeen)[0];
// center.innerHTML += `<img src="${seventeenImg}" alt="Seventeen" class="seventeen">`;

// const hoshiImg = randomPick(images.hoshi)[0];
// center.innerHTML += `<img src="${hoshiImg}" alt="Hoshi" class="hoshi">`;

// // 2. Distribute friends to left & right columns
// const friendKeys = Object.keys(images.friends);
// const leftKeys = randomPick(friendKeys, Math.ceil(friendKeys.length / 2));
// const rightKeys = friendKeys.filter(k => !leftKeys.includes(k));

// // Left column
// leftKeys.forEach(folder => {
//   const img = randomPick(images.friends[folder])[0];
//   left.innerHTML += `<img src="${img}" alt="${folder}"><p>${folder}</p>`;
// });

// // Right column
// rightKeys.forEach(folder => {
//   const img = randomPick(images.friends[folder])[0];
//   right.innerHTML += `<img src="${img}" alt="${folder}"><p>${folder}</p>`;
// });

// // 3. Display random lyric
// document.getElementById("lyric").innerText =
//   lyrics[Math.floor(Math.random() * lyrics.length)];

// Letters
// const letters = {
//   A: { text: "Dear A, you are loved 🌸", img: "images/friend1.jpeg" },
//   B: { text: "Dear B, you make us smile 💖", img: "images/friend2.jpeg" },
//   C: { text: "Dear C, stay strong 💫", img: "images/group.jpeg" },
//   D: { text: "Dear D, keep shining ✨", img: "images/hoshi1.jpg" },
//   E: { text: "Dear E, you're amazing 🌷", img: "images/hoshi2.jpeg" },
//   F: { text: "Dear F, we’re always here 💕", img: "images/group.jpeg" },
//   G: { text: "Dear G, we love you 🌈", img: "images/friend1.jpeg" }
// };

// function showLetter(friend) {
//   window.location.href = `to_${friend}.html`;
// }

// // Comfort Mode
// document.getElementById("comfortBtn").addEventListener("click", () => {
//   const body = document.body;
//   const audio = document.getElementById("comfortMusic");

//   if (body.classList.contains("pastel-bg")) {
//     body.classList.remove("pastel-bg");
//     audio.pause();
//     audio.currentTime = 0;
//     alert("❌ Comfort Mode Deactivated ❌");
//   } else {
//     body.classList.add("pastel-bg");
//     audio.play().catch(err => console.log("Autoplay blocked: ", err));
//     alert("💖 Comfort Mode Activated! 💖");
//   }
// });

// // Surprise Box (only Sunday)
// function openSurprise() {
//   document.getElementById("surpriseMessage").innerText =
//     "We love you! 💕 Here's your weekly surprise ✨";
// }

// if (new Date().getDay() !== 0) {
//   document.getElementById("surpriseBoxSection").style.display = "none";
// }
// Random Lyrics
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
    afsu: 1,
    aji: 21,
    san: 2,
    snehu: 26,
    lakshu: 2,
    kavi: 2,
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
// const comfortBtn = document.getElementById("comfortBtn");
// const audio = document.getElementById("comfortMusic");

// comfortBtn.addEventListener("click", () => {
//   if (audio.paused) {
//     // Play song
//     audio.play().catch(err => {
//       console.log("Autoplay blocked, waiting for user action:", err);
//     });
//   } else {
//     // Stop song
//     audio.pause();
//     audio.currentTime = 0;
//   }
// });
// 🎶 Comfort Mode
const comfortBtn = document.getElementById("comfortBtn");
const audio = document.getElementById("comfortMusic");
const body = document.body;
const imagesContainer = document.querySelector(".image-layout");
const bubblesContainer = document.getElementById("bubbles");

let bubbleInterval;

comfortBtn.addEventListener("click", () => {
  if (audio.paused) {
    // Play song
    audio.play().catch(err => console.log("Autoplay blocked:", err));

    // Add floating effect
    imagesContainer.classList.add("float-effect");

    // Start bubbles
    bubbleInterval = setInterval(() => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Random size + horizontal position
      bubble.style.left = Math.random() * 100 + "vw";
      bubble.style.width = bubble.style.height = (Math.random() * 20 + 10) + "px";

      bubblesContainer.appendChild(bubble);

      // Remove bubble after animation ends
      setTimeout(() => bubble.remove(), 10000);
    }, 500);

    // Pastel background
    body.classList.add("pastel-bg");

  } else {
    // Stop song
    audio.pause();
    audio.currentTime = 0;

    // Remove floating effect
    imagesContainer.classList.remove("float-effect");

    // Stop bubbles
    clearInterval(bubbleInterval);
    bubblesContainer.innerHTML = "";

    // Stop pastel background
    body.classList.remove("pastel-bg");
  }
});
document.querySelectorAll('.bubble').forEach(bubble => {
  bubble.addEventListener('animationend', () => {
    bubble.style.animation = 'none';
    void bubble.offsetWidth; // trigger reflow
    bubble.style.animation = 'rise 10s linear forwards';
  });
});

// 🎁 Surprise Box (only Sunday)
function openSurprise() {
  document.getElementById("surpriseMessage").innerText =
    "We love you! 💕 Here's your weekly surprise ✨";
}

if (new Date().getDay() !== 0) {
  document.getElementById("surpriseBoxSection").style.display = "none";
}

