// ==UserScript==
// @name        Crunchyroll Auto-Skip Intro
// @version     1.0
// @description Skip Intro&Credits
// @match       https://*.crunchyroll.com/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

//[data-testid="skipIntroText"]
//[data-testid="skipCreditsText"]

(()=>{
document.head.appendChild(document.createElement('style')).textContent='@keyframes s{to{transform:translateZ(0)}}[data-testid*="skip"]{animation:s 1ms}';
document.addEventListener('animationstart',e=>e.animationName==='s'&&e.target.click(),{passive:1,capture:1})
})();