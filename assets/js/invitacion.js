const stage = document.getElementById("stage");
const opener = document.getElementById("opener");
const card = document.getElementById("card");
const countdown = document.getElementById("countdown");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const eventTime = new Date(document.getElementById("event-date").dateTime);
const [days, hours, minutes, seconds] = ["d", "h", "m", "s"].map((id) =>
  document.getElementById(id),
);

function updateCountdown() {
  const remaining = Math.max(0, Math.floor((eventTime - Date.now()) / 1000));
  days.textContent = Math.floor(remaining / 86400);
  hours.textContent = Math.floor(remaining / 3600) % 24;
  minutes.textContent = Math.floor(remaining / 60) % 60;
  seconds.textContent = remaining % 60;
  return remaining > 0;
}

function startCountdown() {
  if (!updateCountdown()) return;
  const clock = setInterval(() => {
    if (!updateCountdown()) clearInterval(clock);
  }, 1000);
}

function addLeaves() {
  const symbols = ["🍃", "🌿", "✨", "🍃"];
  const decoration = document.createDocumentFragment();
  for (let index = 0; index < 16; index++) {
    const leaf = document.createElement("span");
    leaf.className = "leaf";
    leaf.setAttribute("aria-hidden", "true");
    leaf.textContent = symbols[index % symbols.length];
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = 8 + Math.random() * 8 + "s";
    leaf.style.animationDelay = Math.random() * -12 + "s";
    decoration.append(leaf);
  }
  document.body.append(decoration);
}

function revealCard() {
  stage.hidden = true;
  document.body.classList.remove("waiting");
  card.hidden = false;
  card.classList.add("show");
  countdown.hidden = false;
  startCountdown();
  card.focus({ preventScroll: true });
  if (!reducedMotion.matches) addLeaves();
}

function openInvitation() {
  if (reducedMotion.matches) {
    revealCard();
    return;
  }

  function finishOpening() {
    stage.removeEventListener("transitionend", onFade);
    stage.removeEventListener("transitioncancel", onFade);
    window.clearTimeout(fallback);
    revealCard();
  }

  function onFade(event) {
    if (event.target === stage && event.propertyName === "opacity") {
      finishOpening();
    }
  }

  stage.addEventListener("transitionend", onFade);
  stage.addEventListener("transitioncancel", onFade);
  stage.classList.add("open");
  stage.inert = true;
  const fallback = window.setTimeout(finishOpening, 950);
}

opener.addEventListener("click", openInvitation, { once: true });
card.hidden = true;
document.body.classList.add("waiting");
stage.hidden = false;
