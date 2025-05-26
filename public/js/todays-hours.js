// hours-today.js (runtime client JS)
import { getHoursForToday } from './calendarData.js';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('[data-today-hours]');
  if (el) {
    el.textContent = getHoursForToday();
  }
});
