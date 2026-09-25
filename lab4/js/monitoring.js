'use strict';

const noiseLevels = [
  42, 55, 61, 78, 83, 67, 49, 72, 91, 58, 64, 76,
  53, 47, 88, 69, 74, 82, 95, 51, 71, -1, 85, 63,
  79, 39, 141, 86
];

const warningLevel = 70;
const criticalLevel = 85;
const minValidLevel = 30;
const maxValidLevel = 130;


const isValidLevel = (level, min, max) =>
  typeof level === 'number' && Number.isFinite(level) && level >= min && level <= max;


const formatDecibels = val =>
  val !== null ? `${val.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} dB` : 'null';


function findFirstCritical(data, critLimit, minVal, maxVal) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  for (let i = 0; i < data.length; i++) {
    const level = data[i];

    if (!isValidLevel(level, minVal, maxVal)) {
      continue;
    }

    if (level > critLimit) {
      return {
        value: level,
        index: i,
        position: i + 1 
      };
    }
  }

  return null;
}


const countByCategory = function(data, warnLimit, critLimit, minVal, maxVal) {
  const categories = {
    normal: 0,
    warning: 0,
    critical: 0,
    invalidEntries: []
  };

  if (!Array.isArray(data)) {
    return categories;
  }

  for (let i = 0; i < data.length; i++) {
    const level = data[i];

    if (!isValidLevel(level, minVal, maxVal)) {
      categories.invalidEntries.push({ value: level, position: i + 1 });
      continue;
    }

    if (level <= warnLimit) {
      categories.normal++;
    } else if (level <= critLimit) {
      categories.warning++;
    } else {
      categories.critical++;
    }
  }

  return categories;
};


function calculateMetrics(data, minVal, maxVal) {
  let validCount = 0;
  let sum = 0;
  let min = null;
  let max = null;

  if (Array.isArray(data)) {
    for (const level of data) {
      if (!isValidLevel(level, minVal, maxVal)) {
        continue;
      }

      validCount++;
      sum += level;

      if (min === null || level < min) {
        min = level;
      }
      if (max === null || level > max) {
        max = level;
      }
    }
  }

  const average = validCount > 0 ? sum / validCount : null;

  return { validCount, sum, average, min, max };
}


function findRecovery(data, firstCriticalIndex, warnLimit, minVal, maxVal) {
  if (!Array.isArray(data) || firstCriticalIndex === null || firstCriticalIndex < 0) {
    return null;
  }

  let i = firstCriticalIndex + 1;
  let safeStreak = 0;

  while (i < data.length) {
    const level = data[i];

    if (isValidLevel(level, minVal, maxVal) && level <= warnLimit) {
      safeStreak++;
      if (safeStreak === 3) {
        return {
          position: i + 1,
          value: level
        };
      }
    } else {
      safeStreak = 0;
    }

    i++;
  }

  return null;
}


function findFirstValid(data, minVal, maxVal) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  let i = 0;
  let firstValid = null;

  do {
    const level = data[i];
    if (isValidLevel(level, minVal, maxVal)) {
      firstValid = { value: level, position: i + 1 };
      break;
    }
    i++;
  } while (i < data.length);

  return firstValid;
}


function runAcousticAnalysis(data, warnLimit, critLimit, minVal, maxVal, classifyCallback) {
  const total = Array.isArray(data) ? data.length : 0;
  const metrics = calculateMetrics(data, minVal, maxVal);
  const categories = classifyCallback(data, warnLimit, critLimit, minVal, maxVal);
  const firstCritical = findFirstCritical(data, critLimit, minVal, maxVal);

  const recovery = firstCritical
    ? findRecovery(data, firstCritical.index, warnLimit, minVal, maxVal)
    : null;

  return {
    total,
    metrics,
    categories,
    firstCritical,
    recovery,
    warnLimit,
    critLimit
  };
}


function displayAcousticReport(report) {
  const { total, metrics, categories, firstCritical, recovery, warnLimit, critLimit } = report;
  const totalExceedingWarning = categories.warning + categories.critical;

  console.group('Акустична варта -- звіт моніторингу');
  console.log(`Пороги: попередження > ${warnLimit} dB; критичний рівень > ${critLimit} dB`);
  console.log(`Усього вимірювань: ${total}`);
  console.log(`Коректних: ${metrics.validCount}`);
  console.log(`Некоректних: ${categories.invalidEntries.length}`);

  console.table([
    { 'Категорія': 'Без перевищення', 'Кількість': categories.normal },
    { 'Категорія': 'Попередження', 'Кількість': categories.warning },
    { 'Категорія': 'Критичні', 'Кількість': categories.critical }
  ]);

  console.log(`Середній рівень: ${formatDecibels(metrics.average)}`);
  console.log(`Мінімальний рівень: ${metrics.min !== null ? metrics.min + ' dB' : 'null'}`);
  console.log(`Максимальний рівень: ${metrics.max !== null ? metrics.max + ' dB' : 'null'}`);

  if (firstCritical) {
    console.log(`Перше критичне вимірювання: ${firstCritical.value} dB, позиція ${firstCritical.position}`);
  } else {
    console.log('Перше критичне вимірювання: не зафіксовано');
  }

  if (recovery) {
    console.log(`Відновлення -- три безпечні вимірювання поспіль: позиція ${recovery.position}`);
  } else {
    console.log('Відновлення -- три безпечні вимірювання поспіль: не знайдено');
  }

  if (totalExceedingWarning > 0) {
    console.warn(`Поріг ${warnLimit} dB перевищено у ${totalExceedingWarning} вимірюваннях.`);
  }

  if (categories.invalidEntries.length > 0) {
    const errorDetails = categories.invalidEntries
      .map(entry => `позиція ${entry.position} (${entry.value} dB)`)
      .join(', ');
    console.error(`Некоректні дані: ${errorDetails}.`);
  }

  const recoveryConclusion = recovery
    ? `після нього зафіксовано відновлення на позиції ${recovery.position}.`
    : `після першого з них стійкого відновлення не виявлено.`;

  console.log(`Висновок: зафіксовано ${categories.critical} критичні вимірювання;\n${recoveryConclusion}`);
  console.groupEnd();
}


const primaryReport = runAcousticAnalysis(
  noiseLevels,
  warningLevel,
  criticalLevel,
  minValidLevel,
  maxValidLevel,
  countByCategory
);

displayAcousticReport(primaryReport);

console.groupCollapsed('Діагностика крайових випадків (Edge Cases)');

console.log('--- Набір 1: Порожній масив [] ---');
displayAcousticReport(runAcousticAnalysis([], warningLevel, criticalLevel, minValidLevel, maxValidLevel, countByCategory));

console.log('--- Набір 2: Лише некоректні дані [-1, 141] ---');
displayAcousticReport(runAcousticAnalysis([-1, 141], warningLevel, criticalLevel, minValidLevel, maxValidLevel, countByCategory));

console.log('--- Набір 3: Граничні значення [70, 85, 86] ---');
displayAcousticReport(runAcousticAnalysis([70, 85, 86], warningLevel, criticalLevel, minValidLevel, maxValidLevel, countByCategory));

console.log('--- Набір 4: Успішне відновлення [92, 55, 60, 48] ---');
displayAcousticReport(runAcousticAnalysis([92, 55, 60, 48], warningLevel, criticalLevel, minValidLevel, maxValidLevel, countByCategory));

console.groupEnd();