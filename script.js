const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => menu.classList.toggle('hidden'));

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 700, once: true });

  const years = [1990, 2000, 2010, 2015, 2020, 2023, 2025];
  const common = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#cbd5e1' } } },
    scales: {
      x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(203,213,225,0.06)' } },
      y: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(203,213,225,0.06)' } }
    }
  };

  new Chart(document.getElementById('co2Chart'), {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'CO₂ (ppm)',
        data: [355, 370, 390, 400, 414, 420, 423],
        tension: 0.3,
        borderColor: 'rgba(96,165,250,1)',
        backgroundColor: 'rgba(96,165,250,0.12)',
        fill: true
      }]
    },
    options: common
  });

  new Chart(document.getElementById('tempChart'), {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'Δ Temp (°C)',
        data: [0.2, 0.35, 0.55, 0.7, 0.9, 1.0, 1.05],
        tension: 0.3,
        borderColor: 'rgba(147,197,253,1)',
        backgroundColor: 'rgba(147,197,253,0.12)',
        fill: true
      }]
    },
    options: common
  });

  new Chart(document.getElementById('forestChart'), {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Índice de Desmatamento',
        data: [100, 120, 150, 130, 160, 170, 165],
        backgroundColor: 'rgba(59,130,246,0.9)'
      }]
    },
    options: common
  });
});
