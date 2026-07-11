# UDAYAN 2026 — Aditya University Fest Landing Page

A mobile-first, single-page landing site for Aditya University's annual
fest — built with plain HTML, CSS, and vanilla JavaScript, featuring a
live countdown, an events grid, a two-day schedule, and an infinite
sponsor marquee.

## 🔗 Live Demo

https://drive.google.com/file/d/1nCa9T-_qGSALfSApePw9mdbn_ztvR5Aq/view?usp=sharing

## 📸 Screenshots


**Desktop**
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e91fd022-06b0-4d12-9997-4800317a723d" />

**Mobile**

## ✨ Features

- **Hero section** — fest name, tagline, and a "Register Now" CTA over an animated contour-ring background
- **Live countdown timer** — vanilla JS, counts down in real time to the fest's start date
- **Events grid** — responsive cards for Hackathon, Coding Contest, Dance Battle, Gaming Arena, Startup Pitch, and Battle of Bands
- **Two-day schedule** — tabbed timeline view (Day One / Day Two) with time-stamped event entries
- **Infinite sponsor marquee** — seamless, looping horizontal scroll built with pure CSS animation
- **Gmail-integrated registration** — "Register Now" opens a pre-filled Gmail compose window addressed to the event organizer
- **Fully responsive** — mobile-first from 360px up through desktop, with a hamburger nav and sticky mobile CTA bar

## 🛠️ Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties (design tokens), CSS Grid/Flexbox, keyframe animations, no frameworks
- **Vanilla JavaScript** — countdown logic, tab switching, mobile nav toggle, scroll state (no libraries)
- **AI-assisted features** — layout structure, countdown/timer logic, and CSS marquee animation were built with AI assistance (see below)

## 🎨 Design References

 Refero / Godly /coolers

## 🤖 AI Tools Used

I used Claude (Anthropic) to help build this project. Specifically, I asked it to:
- Generate the initial HTML structure and section layout from my brief (fest theme, color palette, required sections)
- Write the CSS design system (color tokens, typography, responsive breakpoints) using my exact color palette
- Build the vanilla JS for the live countdown timer, schedule day-tabs, and mobile nav toggle
- Debug a JavaScript error where the countdown timer crashed and silently broke the schedule tabs
- Wire up the Gmail-based registration button
- Write this README

I reviewed, tested, and customized the generated code (fest name, dates, organizer details, copy) rather than using it unmodified.

## 💡 What I Learned

I learned how to build a fully responsive layout using CSS Grid and Flexbox without any frameworks, and how a single unhandled JavaScript error (in my countdown timer) can silently break other features on the same page. Working with AI also taught me to read and test generated code carefully rather than just pasting it in.

## Folder Structure
udayan-fest/
├── html/
│ └── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
├── assets/
└── README.md
