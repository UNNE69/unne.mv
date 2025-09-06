const clock = document.getElementById("clock");
const controls = document.getElementById("controls");
const gear = document.getElementById("gear");

const sizeInput = document.getElementById("size");
const tzSelect = document.getElementById("tz");
const formatSelect = document.getElementById("format");
const fontSelect = document.getElementById("font");
const fontColorInput = document.getElementById("fontColor");
const bgColorInput = document.getElementById("bgColor");
const fullscreenBtn = document.getElementById("fullscreen");
const resetBtn = document.getElementById("reset");

// Default settings
const defaults = {
  size: 120,
  tz: "Indian/Maldives",
  format: "24",
  font: "system-ui",
  fontColor: "#ffffff",
  bgColor: "#000000",
};

// Load from localStorage or defaults
let settings = JSON.parse(localStorage.getItem("timeSettings")) || defaults;

// Apply settings to UI and page
function applySettings() {
  document.documentElement.style.setProperty("--clock-size", settings.size + "px");
  document.documentElement.style.setProperty("--font-family", settings.font);
  document.documentElement.style.setProperty("--font-color", settings.fontColor);
  document.documentElement.style.setProperty("--bg-color", settings.bgColor);

  sizeInput.value = settings.size;
  tzSelect.value = settings.tz;
  formatSelect.value = settings.format;
  fontSelect.value = settings.font;
  fontColorInput.value = settings.fontColor;
  bgColorInput.value = settings.bgColor;
}

// Save settings
function saveSettings() {
  localStorage.setItem("timeSettings", JSON.stringify(settings));
}

// Clock update
function updateClock() {
  let now = new Date();

  try {
    if (settings.tz !== "local") {
      now = new Date(new Date().toLocaleString("en-US", { timeZone: settings.tz }));
    }
  } catch (e) {
    console.warn("Invalid timezone, falling back to local");
  }

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (settings.format === "12") {
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    clock.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
  } else {
    clock.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}

function pad(n) {
  return n.toString().padStart(2, "0");
}

// Input listeners
sizeInput.addEventListener("input", () => {
  settings.size = Math.min(Math.max(parseInt(sizeInput.value) || defaults.size, 20), 800);
  applySettings(); saveSettings();
});
tzSelect.addEventListener("change", () => { settings.tz = tzSelect.value; applySettings(); saveSettings(); });
formatSelect.addEventListener("change", () => { settings.format = formatSelect.value; applySettings(); saveSettings(); });
fontSelect.addEventListener("change", () => { settings.font = fontSelect.value; applySettings(); saveSettings(); });
fontColorInput.addEventListener("input", () => { settings.fontColor = fontColorInput.value; applySettings(); saveSettings(); });
bgColorInput.addEventListener("input", () => { settings.bgColor = bgColorInput.value; applySettings(); saveSettings(); });

// Fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
fullscreenBtn.addEventListener("click", toggleFullscreen);
document.addEventListener("keydown", (e) => { if (e.key.toLowerCase() === "f") toggleFullscreen(); });

// Reset
resetBtn.addEventListener("click", () => {
  settings = { ...defaults };
  applySettings(); saveSettings();
});

// Controls auto-hide
let hideTimeout;
function showControls() {
  controls.classList.remove("hidden");
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => {
    controls.classList.add("hidden");
    gear.classList.remove("hidden");
  }, 5000);
}

controls.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
controls.addEventListener("mouseleave", () => showControls());

// Gear toggle
gear.addEventListener("click", () => {
  if (controls.classList.contains("hidden")) {
    gear.classList.add("hidden");
    showControls();
  } else {
    controls.classList.add("hidden");
    gear.classList.remove("hidden");
  }
});

// Show gear on hover top-right
document.addEventListener("mousemove", (e) => {
  if (e.clientX > window.innerWidth - 80 && e.clientY < 80) {
    gear.classList.remove("hidden");
  } else if (!controls.classList.contains("hidden")) {
    // keep hidden while menu is open
  } else {
    gear.classList.add("hidden");
  }
});

// Init
applySettings();
setInterval(updateClock, 1000);
updateClock();
showControls();
