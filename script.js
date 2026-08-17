const loader = document.getElementById('loader');
const openBtn = document.getElementById('openBtn');
const music = document.getElementById('music');
const musicBtn = document.getElementById('musicBtn');

document.body.classList.add('locked');

openBtn.addEventListener('click', async () => {
  loader.classList.add('hidden');
  document.body.classList.remove('locked');
  try { await music.play(); musicBtn.textContent = '❚❚'; } catch(e) {}
});

musicBtn.addEventListener('click', async () => {
  if (music.paused) {
    await music.play();
    musicBtn.textContent = '❚❚';
  } else {
    music.pause();
    musicBtn.textContent = '♫';
  }
});

const target = new Date('2026-12-18T17:00:00+05:30').getTime();
function tick() {
  const now = Date.now();
  const distance = Math.max(0, target - now);
  const d = Math.floor(distance / 86400000);
  const h = Math.floor(distance / 3600000) % 24;
  const m = Math.floor(distance / 60000) % 60;
  const s = Math.floor(distance / 1000) % 60;
  document.getElementById('days').textContent = String(d).padStart(2,'0');
  document.getElementById('hours').textContent = String(h).padStart(2,'0');
  document.getElementById('minutes').textContent = String(m).padStart(2,'0');
  document.getElementById('seconds').textContent = String(s).padStart(2,'0');
}
tick(); setInterval(tick,1000);

const observer = new IntersectionObserver((items) => {
  items.forEach(item => {
    if (item.isIntersecting) {
      item.target.classList.add('visible');
      observer.unobserve(item.target);
    }
  });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
