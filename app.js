const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  if (tg.MainButton) tg.MainButton.hide();
}

const translations = {
  ru: {
    eyebrowText: 'Telegram Mini App',
    appTitle: 'Investment Calculator',
    appSubtitle: 'Калькулятор каскадных реинвестиций с управлением циклами и дополнительными вложениями.',
    inputsTitle: 'Параметры', badgeLive: 'Live model', summaryTitle: 'Итоги', badgeAuto: 'Auto-updated',
    labelInitial: 'Стартовое вложение', labelAnnualReturn: 'Годовая доходность, %', labelCycleLength: 'Длина цикла, месяцев',
    labelProjection: 'Горизонт прогноза, месяцев', labelReinvest: 'Реинвест, % от месячной выплаты', labelMonthlyAdd: 'Регулярное доп. вложение в месяц',
    calculateBtn: 'Рассчитать', resetBtn: 'Сбросить', metricTotalPayoutLabel: 'Суммарные выплаты', metricTotalReinvestedLabel: 'Реинвестировано',
    metricManualAddedLabel: 'Доп. вложения', metricActiveCapitalLabel: 'Активный капитал в конце',
    summaryNote: 'Модель считает каскад: каждый запуск выплачивается равными частями весь цикл, а заданная доля выплаты запускается заново.',
    manualTitle: 'Ручные дополнительные вложения по месяцам', manualHint: 'Editable', thMonth: 'Месяц', thExtra: 'Доп. вложение',
    chartTitle: 'График активного капитала', tableTitle: 'Помесячная модель', colMonth: 'Месяц', colOpening: 'Активный капитал на старт',
    colPayout: 'Выплата за месяц', colReinvested: 'Реинвест', colCashout: 'Вывод кэша', colRegular: 'Регулярное доп. вложение',
    colManual: 'Ручное доп. вложение', colNewCycles: 'Новые запуски месяца', colEnding: 'Активный капитал на конец',
    csv: 'CSV'
  },
  en: {
    eyebrowText: 'Telegram Mini App',
    appTitle: 'Investment Calculator',
    appSubtitle: 'Cascade reinvestment calculator with cycle controls and extra contributions.',
    inputsTitle: 'Parameters', badgeLive: 'Live model', summaryTitle: 'Summary', badgeAuto: 'Auto-updated',
    labelInitial: 'Initial investment', labelAnnualReturn: 'Annual return, %', labelCycleLength: 'Cycle length, months',
    labelProjection: 'Projection horizon, months', labelReinvest: 'Reinvest, % of monthly payout', labelMonthlyAdd: 'Recurring monthly contribution',
    calculateBtn: 'Calculate', resetBtn: 'Reset', metricTotalPayoutLabel: 'Total payouts', metricTotalReinvestedLabel: 'Reinvested',
    metricManualAddedLabel: 'Extra investments', metricActiveCapitalLabel: 'Ending active capital',
    summaryNote: 'The model uses a cascade: each cycle pays out evenly across the full term, and the selected share of each payout starts new cycles.',
    manualTitle: 'Manual extra investments by month', manualHint: 'Editable', thMonth: 'Month', thExtra: 'Extra investment',
    chartTitle: 'Active capital chart', tableTitle: 'Monthly model', colMonth: 'Month', colOpening: 'Opening active capital',
    colPayout: 'Monthly payout', colReinvested: 'Reinvested', colCashout: 'Cash out', colRegular: 'Recurring contribution',
    colManual: 'Manual contribution', colNewCycles: 'New starts this month', colEnding: 'Ending active capital', csv: 'CSV'
  },
  uz: {
    eyebrowText: 'Telegram Mini App',
    appTitle: 'Investment Calculator',
    appSubtitle: 'Siklli reinvestitsiya kalkulyatori: sikl boshqaruvi va qo‘shimcha kiritmalar bilan.',
    inputsTitle: 'Parametrlar', badgeLive: 'Live model', summaryTitle: 'Natijalar', badgeAuto: 'Auto-updated',
    labelInitial: 'Boshlang‘ich investitsiya', labelAnnualReturn: 'Yillik daromadlilik, %', labelCycleLength: 'Sikl uzunligi, oy',
    labelProjection: 'Prognoz davri, oy', labelReinvest: 'Reinvest, oylik to‘lovdan %', labelMonthlyAdd: 'Har oy qo‘shimcha kiritma',
    calculateBtn: 'Hisoblash', resetBtn: 'Qayta tiklash', metricTotalPayoutLabel: 'Jami to‘lovlar', metricTotalReinvestedLabel: 'Reinvest qilingan',
    metricManualAddedLabel: 'Qo‘shimcha kiritmalar', metricActiveCapitalLabel: 'Oxirgi aktiv kapital',
    summaryNote: 'Model kaskad bo‘yicha hisoblaydi: har bir ishga tushirish butun sikl davomida teng to‘laydi va tanlangan ulush qayta ishga tushiriladi.',
    manualTitle: 'Oylar bo‘yicha qo‘lda qo‘shimcha kiritmalar', manualHint: 'Editable', thMonth: 'Oy', thExtra: 'Qo‘shimcha kiritma',
    chartTitle: 'Aktiv kapital grafigi', tableTitle: 'Oylik model', colMonth: 'Oy', colOpening: 'Boshlanishdagi aktiv kapital',
    colPayout: 'Oylik to‘lov', colReinvested: 'Reinvest', colCashout: 'Naqd chiqarish', colRegular: 'Doimiy qo‘shimcha kiritma',
    colManual: 'Qo‘lda kiritma', colNewCycles: 'Shu oy yangi startlar', colEnding: 'Oy oxiridagi aktiv kapital', csv: 'CSV'
  }
};

const els = {
  initialInvestment: document.getElementById('initialInvestment'),
  annualReturn: document.getElementById('annualReturn'),
  cycleLength: document.getElementById('cycleLength'),
  projectionMonths: document.getElementById('projectionMonths'),
  reinvestPercent: document.getElementById('reinvestPercent'),
  monthlyAdditional: document.getElementById('monthlyAdditional'),
  calculateBtn: document.getElementById('calculateBtn'),
  resetBtn: document.getElementById('resetBtn'),
  downloadCsvBtn: document.getElementById('downloadCsvBtn'),
  modelBody: document.getElementById('modelBody'),
  manualInvestmentBody: document.getElementById('manualInvestmentBody'),
  metricTotalPayout: document.getElementById('metricTotalPayout'),
  metricTotalReinvested: document.getElementById('metricTotalReinvested'),
  metricManualAdded: document.getElementById('metricManualAdded'),
  metricActiveCapital: document.getElementById('metricActiveCapital'),
  chart: document.getElementById('capitalChart')
};

let currentLang = 'ru';
let manualInvestments = [];
let lastModel = [];

const defaultState = {
  initialInvestment: 10000,
  annualReturn: 25,
  cycleLength: 12,
  projectionMonths: 36,
  reinvestPercent: 100,
  monthlyAdditional: 0,
};

function getState() {
  return {
    initialInvestment: +els.initialInvestment.value || 0,
    annualReturn: +els.annualReturn.value || 0,
    cycleLength: Math.max(1, Math.floor(+els.cycleLength.value || 1)),
    projectionMonths: Math.max(1, Math.floor(+els.projectionMonths.value || 1)),
    reinvestPercent: Math.min(100, Math.max(0, +els.reinvestPercent.value || 0)),
    monthlyAdditional: +els.monthlyAdditional.value || 0,
  };
}

function ensureManualInputs(length) {
  if (manualInvestments.length < length) {
    manualInvestments = manualInvestments.concat(Array(length - manualInvestments.length).fill(0));
  } else if (manualInvestments.length > length) {
    manualInvestments = manualInvestments.slice(0, length);
  }
}

function monthlyPayoutForStart(principal, annualReturn, cycleLength) {
  return (principal * (1 + annualReturn / 100)) / cycleLength;
}

function buildModel(state) {
  const { initialInvestment, annualReturn, cycleLength, projectionMonths, reinvestPercent, monthlyAdditional } = state;
  ensureManualInputs(projectionMonths);
  const activeStarts = [];
  if (initialInvestment > 0) activeStarts.push({ amount: initialInvestment, monthsLeft: cycleLength });
  const rows = [];

  for (let month = 1; month <= projectionMonths; month++) {
    const openingCapital = activeStarts.reduce((sum, item) => sum + item.amount, 0);
    let payout = 0;

    for (const item of activeStarts) {
      payout += monthlyPayoutForStart(item.amount, annualReturn, cycleLength);
    }

    const reinvested = payout * (reinvestPercent / 100);
    const cashout = payout - reinvested;
    const manual = manualInvestments[month - 1] || 0;
    const newStarts = reinvested + monthlyAdditional + manual;

    const nextStarts = [];
    for (const item of activeStarts) {
      if (item.monthsLeft - 1 > 0) nextStarts.push({ amount: item.amount, monthsLeft: item.monthsLeft - 1 });
    }
    if (newStarts > 0) nextStarts.push({ amount: newStarts, monthsLeft: cycleLength });

    const endingCapital = nextStarts.reduce((sum, item) => sum + item.amount, 0);

    rows.push({
      month, openingCapital, payout, reinvested, cashout,
      recurringContribution: monthlyAdditional, manualContribution: manual,
      newStarts, endingCapital
    });

    activeStarts.length = 0;
    activeStarts.push(...nextStarts);
  }

  return rows;
}

function formatCurrency(value) {
  return new Intl.NumberFormat(currentLang === 'ru' ? 'ru-RU' : currentLang === 'uz' ? 'uz-UZ' : 'en-US', {
    style: 'currency', currency: 'USD', maximumFractionDigits: 2
  }).format(value || 0);
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  const dict = translations[lang];
  for (const [id, value] of Object.entries(dict)) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }
  els.downloadCsvBtn.textContent = dict.csv;
  render();
}

function renderManualTable(state) {
  ensureManualInputs(state.projectionMonths);
  els.manualInvestmentBody.innerHTML = '';
  for (let i = 0; i < state.projectionMonths; i++) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><input class="manual-input" type="number" min="0" step="50" value="${manualInvestments[i] || 0}" data-manual-index="${i}" /></td>
    `;
    els.manualInvestmentBody.appendChild(tr);
  }
  document.querySelectorAll('[data-manual-index]').forEach(input => {
    input.addEventListener('input', (e) => {
      manualInvestments[+e.target.dataset.manualIndex] = +e.target.value || 0;
      render();
    });
  });
}

function renderTable(rows) {
  els.modelBody.innerHTML = rows.map(row => `
    <tr>
      <td>${row.month}</td>
      <td>${formatCurrency(row.openingCapital)}</td>
      <td class="positive">${formatCurrency(row.payout)}</td>
      <td>${formatCurrency(row.reinvested)}</td>
      <td>${formatCurrency(row.cashout)}</td>
      <td>${formatCurrency(row.recurringContribution)}</td>
      <td>${formatCurrency(row.manualContribution)}</td>
      <td>${formatCurrency(row.newStarts)}</td>
      <td><strong>${formatCurrency(row.endingCapital)}</strong></td>
    </tr>
  `).join('');
}

function renderMetrics(rows) {
  const totalPayout = rows.reduce((sum, row) => sum + row.payout, 0);
  const totalReinvested = rows.reduce((sum, row) => sum + row.reinvested, 0);
  const totalManual = rows.reduce((sum, row) => sum + row.manualContribution + row.recurringContribution, 0);
  const activeCapital = rows.at(-1)?.endingCapital || 0;
  els.metricTotalPayout.textContent = formatCurrency(totalPayout);
  els.metricTotalReinvested.textContent = formatCurrency(totalReinvested);
  els.metricManualAdded.textContent = formatCurrency(totalManual);
  els.metricActiveCapital.textContent = formatCurrency(activeCapital);
}

function drawChart(rows) {
  const canvas = els.chart;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = 360 * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = 360;
  ctx.clearRect(0, 0, width, height);

  const padding = { top: 20, right: 20, bottom: 36, left: 54 };
  const values = rows.map(r => r.endingCapital);
  const max = Math.max(...values, 1);
  const min = 0;
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  ctx.strokeStyle = 'rgba(114,107,137,0.18)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();
    const value = max - (max / 4) * i;
    ctx.fillStyle = '#7d7384';
    ctx.font = '12px Inter';
    ctx.fillText(formatCompact(value), 8, y + 4);
  }

  const points = rows.map((row, index) => {
    const x = padding.left + (chartW * index) / Math.max(rows.length - 1, 1);
    const y = padding.top + chartH - ((row.endingCapital - min) / (max - min || 1)) * chartH;
    return { x, y };
  });

  const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
  gradient.addColorStop(0, 'rgba(214,166,84,.28)');
  gradient.addColorStop(1, 'rgba(89,199,222,.06)');

  ctx.beginPath();
  points.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
  ctx.lineTo(points.at(-1)?.x || padding.left, height - padding.bottom);
  ctx.lineTo(points[0]?.x || padding.left, height - padding.bottom);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  points.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
  ctx.strokeStyle = '#d6a654';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#59c7de';
  for (const point of points.filter((_, idx) => idx === 0 || idx === points.length - 1 || idx % Math.ceil(points.length / 6) === 0)) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 4.5, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = '#7d7384';
  ctx.font = '12px Inter';
  rows.forEach((row, idx) => {
    if (idx === 0 || idx === rows.length - 1 || idx % Math.ceil(rows.length / 6) === 0) {
      const x = padding.left + (chartW * idx) / Math.max(rows.length - 1, 1);
      ctx.fillText(String(row.month), x - 6, height - 10);
    }
  });
}

function formatCompact(value) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}k`;
  return value.toFixed(0);
}

function toCSV(rows) {
  const headers = ['Month','Opening Active Capital','Monthly Payout','Reinvested','Cash Out','Recurring Contribution','Manual Contribution','New Starts','Ending Active Capital'];
  const lines = rows.map(r => [r.month, r.openingCapital, r.payout, r.reinvested, r.cashout, r.recurringContribution, r.manualContribution, r.newStarts, r.endingCapital].join(','));
  return [headers.join(','), ...lines].join('\n');
}

function downloadCSV() {
  if (!lastModel.length) return;
  const blob = new Blob([toCSV(lastModel)], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'investment-calculator.csv';
  a.click();
  URL.revokeObjectURL(url);
}

function render() {
  const state = getState();
  renderManualTable(state);
  const rows = buildModel(state);
  lastModel = rows;
  renderTable(rows);
  renderMetrics(rows);
  drawChart(rows);
}

function reset() {
  Object.entries(defaultState).forEach(([key, value]) => {
    if (els[key]) els[key].value = value;
  });
  manualInvestments = [];
  render();
}

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
els.calculateBtn.addEventListener('click', render);
els.resetBtn.addEventListener('click', reset);
els.downloadCsvBtn.addEventListener('click', downloadCSV);
['initialInvestment','annualReturn','cycleLength','projectionMonths','reinvestPercent','monthlyAdditional'].forEach(id => {
  els[id].addEventListener('input', render);
});

setLanguage('ru');
