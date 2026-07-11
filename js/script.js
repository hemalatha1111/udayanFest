/* ===================================================================
   UDAYAN 2026 — script.js
   Vanilla JS: countdown timer, mobile nav, schedule tabs, header state.
   No frameworks, no dependencies.
   =================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  safeInit(initCountdown);
  safeInit(initNavToggle);
  safeInit(initScheduleTabs);
  safeInit(initHeaderScrollState);
});

// Runs a setup function and, if it throws, logs the error to the console
// instead of silently killing every feature that hasn't initialized yet.
function safeInit(fn) {
  try {
    fn();
  } catch (err) {
    console.error(`UDAYAN: "${fn.name}" failed to initialize`, err);
  }
}

/* ---------------------------------------------------------------
   1) LIVE COUNTDOWN TIMER
   Target: July 10, 2026, 9:00 AM (fest gates-open time, IST).
   Edit FEST_DATE below to change the target date/time.
   --------------------------------------------------------------- */
function initCountdown() {
  // IST is UTC+5:30 — encoded explicitly so the countdown is correct
  // regardless of the visitor's own timezone.
  // ⚠️ Set this to your ACTUAL fest date before submitting.
  const FEST_DATE = new Date("2026-07-20T09:00:00+05:30");

  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    mins: document.getElementById("cd-mins"),
    secs: document.getElementById("cd-secs"),
    note: document.getElementById("countdownNote"),
    grid: document.getElementById("countdownGrid"),
  };

  if (!els.days) return; // countdown markup not present, bail safely

  let timerId; // declared BEFORE tick() runs, so tick() can safely clear it

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = new Date();
    const diff = FEST_DATE.getTime() - now.getTime();

    if (diff <= 0) {
      // Fest has started (or already happened) — show a live/complete state
      // instead of a confusing negative countdown.
      els.grid.innerHTML =
        '<p class="countdown-live">🎉 UDAYAN 2026 is live on campus right now!</p>';
      els.note.textContent =
        "See the Timeline section below for what's happening now.";
      clearInterval(timerId);
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    els.days.textContent = pad(days);
    els.hours.textContent = pad(hours);
    els.mins.textContent = pad(mins);
    els.secs.textContent = pad(secs);
  }

  tick();
  timerId = setInterval(tick, 1000);
}

/* ---------------------------------------------------------------
   2) MOBILE NAV TOGGLE
   --------------------------------------------------------------- */
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu after tapping a link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------------------------------------------------
   3) SCHEDULE DAY TABS
   --------------------------------------------------------------- */
function initScheduleTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".schedule-panel");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const day = tab.dataset.day;

      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.dayPanel === day);
      });
    });
  });
}

/* ---------------------------------------------------------------
   4) HEADER STATE ON SCROLL (subtle background shift)
   --------------------------------------------------------------- */
function initHeaderScrollState() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  let lastState = false;
  function onScroll() {
    const scrolled = window.scrollY > 24;
    if (scrolled !== lastState) {
      header.style.boxShadow = scrolled
        ? "0 8px 24px -12px rgba(0,0,0,0.5)"
        : "none";
      lastState = scrolled;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
