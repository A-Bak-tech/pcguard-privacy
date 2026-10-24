'use strict';
// This website intentionally has no analytics, cookies or third-party scripts.
const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
