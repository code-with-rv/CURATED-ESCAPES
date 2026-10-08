/**
 * ============================================================================
 * CURATED ESCAPES & PORTFOLIO — INTERACTIVE ENGINE
 * Features:
 * - Dynamic Expedition Dossier Drawer with detailed itineraries & gear lists
 * - Interactive Mobile Stay App Simulator (Home, Property Detail, Schedule)
 * - Procedural Web Audio Nature Ambience Synthesizer (Alpine Wind / Coast Surf)
 * - Figma Design Inspector & Interactive Toast System
 * ============================================================================
 */

// Escape Dossier Data
const ESCAPE_DOSSIERS = {
  dolomites: {
    kicker: "01 / ALTITUDE — FIELD DOSSIER",
    badge: "DOLOMITES, ITALY",
    title: "TAKE THE HIGH ROAD.",
    desc: "Follow the jagged limestone ridgeline into a quieter world. Expert-led hikes across Alta Via 1, remote high-altitude refugios, and sunrise above the clouds make every step worth taking.",
    coords: "46°36' N / 11°43' E",
    duration: "6 Days / 5 Nights",
    group: "Max 8 Explorers",
    season: "June — September",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    soundLabel: "Alpine Ridgeline Breeze & Whispering Pine",
    soundType: "wind",
    itinerary: [
      { day: "DAY 01", title: "Cortina to Rifugio Lagazuoi", desc: "Ascend past vintage WW1 tunnels to 2,752m. Watch the sunset illuminate the Tofane massif." },
      { day: "DAY 02", title: "Cinque Torri Traverse", desc: "Cross alpine meadows dotted with gentian flowers. Dinner cooked over open larch wood fires." },
      { day: "DAY 03", title: "Pelmo Wilderness Pass", desc: "Solitary trail under the throne of Monte Pelmo. High pass crossing with resident chamois." },
      { day: "DAY 04-06", title: "Civetta Face & Descending to Belluno", desc: "Walk beneath towering vertical 1,000m cliffs, concluding with cold sparkling wine in the valley." }
    ],
    gear: [
      "Vibram mountaineering boots",
      "32L Frameless trail pack",
      "Merino base layers (200gsm)",
      "Telescopic carbon poles",
      "Gore-Tex outer shell",
      "Compact headlamp (300lm)"
    ]
  },
  lofoten: {
    kicker: "02 / TIDE — FIELD DOSSIER",
    badge: "LOFOTEN, NORWAY",
    title: "LET THE WORLD GO QUIET.",
    desc: "Seaside timber cabins, cold-water arctic plunges, and untouched white-sand beaches tucked beneath towering granite walls. A coastal retreat paced strictly by the tide, not the clock.",
    coords: "68°09' N / 13°32' E",
    duration: "4 Days / 3 Nights",
    group: "Max 6 Explorers",
    season: "Year-Round (Aurora Season Oct–Mar)",
    img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85",
    soundLabel: "Arctic Shoreline Swell & Gull Calls",
    soundType: "surf",
    itinerary: [
      { day: "DAY 01", title: "Reine Fjord Arrival", desc: "Check in to historic red rorbu cabins resting on wooden pilings over the icy fjord." },
      { day: "DAY 02", title: "Ryten Peak & Kvalvika Beach", desc: "Hike over coastal pass to a secluded beach where North Atlantic waves roll ashore." },
      { day: "DAY 03", title: "Woodfired Sauna & Arctic Plunge", desc: "Alternate between cedar steam sauna and direct sea dips followed by local smoked cod." },
      { day: "DAY 04", title: "Midnight Sun / Aurora Kayak", desc: "Paddle silent waters under dramatic midnight glow or flickering emerald northern lights." }
    ],
    gear: [
      "Thermal wool socks & liners",
      "Windproof arctic parka",
      "Swimwear for sauna & plunge",
      "Waterproof dry bag (20L)",
      "Insulated thermos mug",
      "Polarized sea sunglasses"
    ]
  },
  kyoto: {
    kicker: "03 / AFTER HOURS — FIELD DOSSIER",
    badge: "KYOTO, JAPAN",
    title: "FOLLOW A DIFFERENT RHYTHM.",
    desc: "Slip into lantern-lit stone lanes as the day crowds disperse. Discover Kyoto through private centuries-old machiya tea houses, artisan ceramic workshops, and stories whispered by masters.",
    coords: "35°00' N / 135°46' E",
    duration: "5 Days / 4 Nights",
    group: "Max 6 Explorers",
    season: "Spring & Autumn",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85",
    soundLabel: "Night Rain on Bamboo Tiles & Distant Temple Chime",
    soundType: "rain",
    itinerary: [
      { day: "DAY 01", title: "Gion Lantern Dusk Walk", desc: "Wander cobblestone alleys of Shirakawa as wooden shutters close and paper lanterns glow." },
      { day: "DAY 02", title: "Uji Matcha Harvest & Tea Ceremony", desc: "Visit multi-generation tea master for intimate bowl preparation and wagashi confections." },
      { day: "DAY 03", title: "Philosopher's Path at Sunrise", desc: "Quiet meditative canal stroll before the city wakes, visiting quiet moss gardens." },
      { day: "DAY 04-05", title: "Kintsugi Workshop & Kaiseki Feast", desc: "Repair broken ceramics with gold lacquer; finish with a 10-course seasonal dinner." }
    ],
    gear: [
      "Slip-on walking shoes for tatami",
      "Breathable linen clothing",
      "Compact Japanese umbrella",
      "Moleskine sketch journal",
      "Silk scarf for cool evenings",
      "Camera with prime low-light lens"
    ]
  },
  madeira: {
    kicker: "JOURNAL 01 — MADEIRA",
    badge: "MADEIRA, PORTUGAL",
    title: "CHASE YOUR MOUNTAIN HIGH.",
    desc: "Walk above the clouds along ancient volcanic levadas, wander fern-lined laurel forests, and pause for cliffside picnics with infinite Atlantic horizons.",
    coords: "32°45' N / 17°00' W",
    duration: "5 Days / 4 Nights",
    group: "Max 8 Explorers",
    season: "April — October",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
    soundLabel: "Atlantic Trade Winds & Mountain Birds",
    soundType: "wind",
    itinerary: [
      { day: "DAY 01", title: "Pico do Arieiro to Pico Ruivo", desc: "The legendary cloud walk across dramatic volcanic ridges connecting highest peaks." },
      { day: "DAY 02", title: "Fanal Ancient Mist Forest", desc: "Walk among 600-year-old twisted Til trees shrouded in atmospheric coastal mist." },
      { day: "DAY 03", title: "Ponta de São Lourenço", desc: "Vibrant terracotta cliffs meeting churning cobalt ocean at Madeira's eastern tip." }
    ],
    gear: ["Trail shoes", "Light fleece layer", "Sun protection", "Refillable hydration flask"]
  },
  milos: {
    kicker: "JOURNAL 02 — MILOS",
    badge: "MILOS, GREECE",
    title: "DO VERY LITTLE. BEAUTIFULLY.",
    desc: "A secret turquoise cove, a slow lunch under olive trees, one more swim. Settle into Aegean rhythm in a converted fishermen syrma boathouse right on the waterline.",
    coords: "36°44' N / 24°25' E",
    duration: "4 Days / 3 Nights",
    group: "Max 4 Explorers",
    season: "May — October",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85",
    soundLabel: "Cycladic Gentle Lapping Waves",
    soundType: "surf",
    itinerary: [
      { day: "DAY 01", title: "Klima Syrma Settle-In", desc: "Step off the boat right onto your private water terrace with colorful painted doors." },
      { day: "DAY 02", title: "Sarakiniko Lunar Coast Sail", desc: "Explore undulating chalk-white volcanic rock formations and hidden sea caves." },
      { day: "DAY 03", title: "Slow Tavern Lunch in Plaka", desc: "Grilled octopus, fresh local caper leaves, and chilled Greek white wine." }
    ],
    gear: ["Linen shirts", "Greek leather sandals", "Snorkel mask", "Good paperback novel"]
  },
  lisbon: {
    kicker: "JOURNAL 03 — LISBON",
    badge: "LISBON, PORTUGAL",
    title: "GET LOST. FIND YOUR PEOPLE.",
    desc: "Follow azulejo ceramic tiles, savor warm pastel de nata straight from vintage ovens, and discover Alfama and Mouraria through local musicians and independent artisans.",
    coords: "38°43' N / 9°08' W",
    duration: "3 Days / 2 Nights",
    group: "Max 8 Explorers",
    season: "All Year",
    img: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1200&q=85",
    soundLabel: "Alfama Street Echoes & Distant Tram Bell",
    soundType: "rain",
    itinerary: [
      { day: "DAY 01", title: "Old Tram 28 & Miradouro Sunsets", desc: "Climb through steep cobblestone quarters to watch dusk tint the Tagus River gold." },
      { day: "DAY 02", title: "Tile Workshop & Petiscos Crawl", desc: "Hand-paint your own ceramic tile with master craftsmen; evening small plates tasting." },
      { day: "DAY 03", title: "Fado Music in Hidden Cellars", desc: "Acoustic 12-string guitar performance in an intimate stone vaulted cellar." }
    ],
    gear: ["Comfortable cobblestone walking shoes", "Cotton tote bag", "Light evening cardigan"]
  }
};

// ============================================================================
// PROCEDURAL NATURE AMBIENCE SYNTHESIZER (WEB AUDIO API)
// Creates realistic, calming ambient sound without requiring any external audio files!
// ============================================================================
class AmbienceSynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentType = "wind";
    this.nodes = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  start(type = "wind") {
    this.init();
    this.stop();
    this.currentType = type;
    this.isPlaying = true;

    // Create 5-second buffer of pink/white noise
    const bufferSize = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Pink noise algorithm
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
      b6 = white * 0.115926;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    // Dual filtering for rich resonance
    const filter = this.ctx.createBiquadFilter();
    const gainNode = this.ctx.createGain();

    if (type === "wind") {
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);
      filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

      // Low frequency oscillator for gust swells
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.2, this.ctx.currentTime);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(220, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
      this.nodes.push(lfo);

      gainNode.gain.setValueAtTime(0.35, this.ctx.currentTime);
    } else if (type === "surf") {
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.0, this.ctx.currentTime);

      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime);
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(gainNode.gain);
      lfo.start();
      this.nodes.push(lfo);

      gainNode.gain.setValueAtTime(0.3, this.ctx.currentTime);
    } else {
      // Rain
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
      gainNode.gain.setValueAtTime(0.2, this.ctx.currentTime);
    }

    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    noiseSource.start();
    this.nodes.push(noiseSource, filter, gainNode);
  }

  stop() {
    this.isPlaying = false;
    this.nodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        node.disconnect();
      } catch (e) {}
    });
    this.nodes = [];
  }

  toggle(type = "wind") {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start(type);
      return true;
    }
  }
}

const ambience = new AmbienceSynth();

// ============================================================================
// TOAST NOTIFICATION UTILITY
// ============================================================================
function showToast(message, isLime = true) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${isLime ? "toast-lime" : ""}`;
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ============================================================================
// MAIN APPLICATION LOGIC & EVENT LISTENERS
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initNavSwitcher();
  initDossierDrawer();
  initStayAppSimulator();
  initFigmaSpecsModal();
  initAmbienceControls();
});

/**
 * 1. Global Navigation Tabs (Expedition, Journal, Stay App)
 */
function initNavSwitcher() {
  const tabs = document.querySelectorAll(".nav-tab");
  const sections = {
    "section-expedition": document.getElementById("section-expedition"),
    "section-journal": document.getElementById("section-journal"),
    "section-stay-app": document.getElementById("section-stay-app")
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");
      const targetSec = sections[targetId];

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      if (targetSec) {
        targetSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // IntersectionObserver to auto-update active tab when scrolling
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
        const id = entry.target.id;
        tabs.forEach(t => {
          t.classList.toggle("active", t.getAttribute("data-target") === id);
        });
      }
    });
  }, { threshold: [0.3] });

  Object.values(sections).forEach(sec => {
    if (sec) observer.observe(sec);
  });
}

/**
 * 2. Expedition Dossier Drawer
 */
let currentOpenEscape = "dolomites";

function initDossierDrawer() {
  const drawer = document.getElementById("dossier-drawer");
  const backdrop = document.getElementById("drawer-backdrop");
  const closeBtn = document.getElementById("dossier-close-btn");

  const cards = document.querySelectorAll("[data-id]");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const escapeId = card.getAttribute("data-id");
      openDossier(escapeId);
    });
  });

  const closeDrawer = () => {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  };

  if (backdrop) backdrop.addEventListener("click", closeDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });

  // Inquire form inside drawer
  const inqForm = document.getElementById("dossier-inquiry-form");
  const successMsg = document.getElementById("inquiry-success");
  if (inqForm) {
    inqForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("inq-name").value;
      inqForm.style.display = "none";
      if (successMsg) successMsg.style.display = "block";
      showToast(`Reservation inquiry logged for ${name}!`, true);
    });
  }

  // Quick Inquire top button
  const topInquireBtn = document.getElementById("btn-quick-inquire");
  if (topInquireBtn) {
    topInquireBtn.addEventListener("click", () => {
      openDossier("dolomites");
      setTimeout(() => {
        const formBox = document.querySelector(".drawer-inquiry-box");
        if (formBox) formBox.scrollIntoView({ behavior: "smooth" });
      }, 350);
    });
  }

  // Audio button inside drawer
  const drawerAudioBtn = document.getElementById("dossier-sound-toggle");
  if (drawerAudioBtn) {
    drawerAudioBtn.addEventListener("click", () => {
      const data = ESCAPE_DOSSIERS[currentOpenEscape];
      const isPlaying = ambience.toggle(data ? data.soundType : "wind");
      updateAmbienceUi(isPlaying);
      if (isPlaying) {
        drawerAudioBtn.querySelector(".txt").textContent = "Pause Audio";
        drawerAudioBtn.querySelector(".icon").textContent = "⏸";
        showToast(`Playing soundscape: ${data.soundLabel}`);
      } else {
        drawerAudioBtn.querySelector(".txt").textContent = "Play Audio";
        drawerAudioBtn.querySelector(".icon").textContent = "▶";
      }
    });
  }
}

function openDossier(escapeId) {
  const data = ESCAPE_DOSSIERS[escapeId];
  if (!data) return;

  currentOpenEscape = escapeId;
  const drawer = document.getElementById("dossier-drawer");

  document.getElementById("dossier-kicker").textContent = data.kicker;
  document.getElementById("dossier-badge").textContent = data.badge;
  document.getElementById("dossier-title").textContent = data.title;
  document.getElementById("dossier-desc").textContent = data.desc;
  document.getElementById("dossier-coords").textContent = data.coords;
  document.getElementById("dossier-duration").textContent = data.duration;
  document.getElementById("dossier-group").textContent = data.group;
  document.getElementById("dossier-season").textContent = data.season;
  document.getElementById("dossier-sound-label").textContent = data.soundLabel;

  const imgEl = document.getElementById("dossier-img");
  imgEl.src = data.img;
  imgEl.alt = data.title;

  // Itinerary
  const itinBox = document.getElementById("dossier-itinerary");
  itinBox.innerHTML = "";
  data.itinerary.forEach(item => {
    const step = document.createElement("div");
    step.className = "timeline-step";
    step.innerHTML = `
      <div class="step-day">${item.day}</div>
      <div class="step-title">${item.title}</div>
      <div class="step-desc">${item.desc}</div>
    `;
    itinBox.appendChild(step);
  });

  // Gear
  const gearBox = document.getElementById("dossier-gear");
  gearBox.innerHTML = "";
  data.gear.forEach(gear => {
    const li = document.createElement("li");
    li.textContent = gear;
    gearBox.appendChild(li);
  });

  // Reset form
  const inqForm = document.getElementById("dossier-inquiry-form");
  const successMsg = document.getElementById("inquiry-success");
  if (inqForm) inqForm.style.display = "flex";
  if (successMsg) successMsg.style.display = "none";

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

/**
 * 3. Interactive Mobile Stay App Simulator (Figma Screen 2)
 */
function initStayAppSimulator() {
  const screens = {
    "screen-home": document.getElementById("screen-home"),
    "screen-detail": document.getElementById("screen-detail"),
    "screen-schedule": document.getElementById("screen-schedule")
  };

  const phoneCtrlBtns = document.querySelectorAll(".phone-ctrl-btn");
  const phoneNavItems = document.querySelectorAll(".phone-nav-item");

  function switchPhoneScreen(screenId) {
    Object.values(screens).forEach(s => s && s.classList.remove("active-view"));
    if (screens[screenId]) screens[screenId].classList.add("active-view");

    // Update screen switcher buttons
    phoneCtrlBtns.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-screen") === screenId);
    });

    // Update bottom nav
    phoneNavItems.forEach(item => {
      item.classList.toggle("active", item.getAttribute("data-screen") === screenId);
    });
  }

  phoneCtrlBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const scr = btn.getAttribute("data-screen");
      switchPhoneScreen(scr);
    });
  });

  phoneNavItems.forEach(item => {
    item.addEventListener("click", () => {
      const scr = item.getAttribute("data-screen");
      switchPhoneScreen(scr);
    });
  });

  // Click hotel cards to navigate to Property Detail
  const hoxtonCard = document.getElementById("thumb-hoxton");
  const pulitzerCard = document.getElementById("thumb-pulitzer");
  const popularRows = document.querySelectorAll(".popular-row-item");

  if (hoxtonCard) hoxtonCard.addEventListener("click", () => switchPhoneScreen("screen-detail"));
  if (pulitzerCard) pulitzerCard.addEventListener("click", () => switchPhoneScreen("screen-detail"));
  popularRows.forEach(row => row.addEventListener("click", () => switchPhoneScreen("screen-detail")));

  // Back button on detail screen
  const backBtn = document.getElementById("btn-back-to-home");
  if (backBtn) backBtn.addEventListener("click", () => switchPhoneScreen("screen-home"));

  // Wishlist heart toggles
  const heartBtns = document.querySelectorAll(".thumb-heart-btn");
  heartBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isLiked = btn.classList.toggle("liked");
      const svg = btn.querySelector("svg");
      if (isLiked) {
        svg.setAttribute("fill", "#EF4444");
        svg.setAttribute("stroke", "#EF4444");
        showToast("Saved to your wishlist ❤️");
      } else {
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        showToast("Removed from wishlist");
      }
    });
  });

  // City chips filter
  const cityChips = document.querySelectorAll(".city-chip");
  cityChips.forEach(chip => {
    chip.addEventListener("click", () => {
      cityChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const city = chip.getAttribute("data-city");
      showToast(`Filtered stays in ${city}`);
    });
  });

  // Live "Book a stay" button inside Detail
  const bookBtn = document.getElementById("btn-trigger-book");
  if (bookBtn) {
    bookBtn.addEventListener("click", () => {
      bookBtn.innerHTML = `<span>Confirming...</span>`;
      bookBtn.style.opacity = "0.7";

      setTimeout(() => {
        bookBtn.innerHTML = `
          <span>Book a stay</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        `;
        bookBtn.style.opacity = "1";

        // Increment badge
        const badge = document.getElementById("schedule-badge");
        if (badge) badge.textContent = "3";
        const countLabel = document.getElementById("schedule-count-label");
        if (countLabel) countLabel.textContent = "3 bookings";

        showToast("✓ Stay confirmed! Viewing your trip schedule", true);
        switchPhoneScreen("screen-schedule");
      }, 700);
    });
  }

  // Schedule segmented tabs
  const segUpcoming = document.getElementById("btn-seg-upcoming");
  const segPast = document.getElementById("btn-seg-past");
  if (segUpcoming && segPast) {
    segUpcoming.addEventListener("click", () => {
      segUpcoming.classList.add("active");
      segPast.classList.remove("active");
      document.querySelector(".schedule-stays-section").style.display = "flex";
    });
    segPast.addEventListener("click", () => {
      segPast.classList.add("active");
      segUpcoming.classList.remove("active");
      showToast("No past stays found for 2026");
    });
  }
}

/**
 * 4. Figma Design System Inspector Modal
 */
function initFigmaSpecsModal() {
  const modal = document.getElementById("specs-modal");
  const openBtn = document.getElementById("btn-open-specs");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");

  if (!modal) return;

  const openModal = () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

/**
 * 5. Audio Ambience Controls
 */
function initAmbienceControls() {
  const toggleBtn = document.getElementById("ambience-toggle");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    const isPlaying = ambience.toggle("wind");
    updateAmbienceUi(isPlaying);

    if (isPlaying) {
      showToast("Alpine wind ambience activated 🏔️", true);
    } else {
      showToast("Ambience muted");
    }
  });
}

function updateAmbienceUi(isPlaying) {
  const toggleBtn = document.getElementById("ambience-toggle");
  if (!toggleBtn) return;

  const textEl = toggleBtn.querySelector(".ambience-text");
  if (isPlaying) {
    toggleBtn.classList.add("playing");
    if (textEl) textEl.textContent = "Ambience: On";
  } else {
    toggleBtn.classList.remove("playing");
    if (textEl) textEl.textContent = "Ambience: Off";
  }
}
