'use strict';

import { NoiseSensor, MobileNoiseSensor } from './models/NoiseSensor.js';
import { NoiseMeasurement } from './models/NoiseMeasurement.js';
import { MonitoringSystem } from './services/MonitoringSystem.js';

const sensorsData = [
  { id: 'NS-01', district: 'Галицький', location: 'просп. Свободи', noiseLevel: 58 },
  { id: 'NS-02', district: 'Франківський', location: 'вул. Наукова', noiseLevel: 74 },
  { id: 'NS-03', district: 'Шевченківський', location: 'просп. Чорновола', noiseLevel: 83 }
];

const system = new MonitoringSystem();

sensorsData.forEach(data => {
  system.addSensor(NoiseSensor.fromObject(data));
});

const patrolSensor = new MobileNoiseSensor('MNS-01', 'Сихівський', 'вул. Сихівська', 50, 15);
system.addSensor(patrolSensor);


function renderSensorCard(sensor) {
  const status = sensor.getStatus();
  const card = document.createElement('article');
  card.className = `sensor-card ${status}`;

  card.innerHTML = `
    <div class="sensor-card__header">
      <span class="sensor-card__id">${sensor.id}</span>
      <span class="sensor-card__status badge badge--${status}">${status}</span>
    </div>
    <div class="sensor-card__body">
      <p><strong>Район:</strong> ${sensor.district}</p>
      <p><strong>Адреса:</strong> ${sensor.location}</p>
      <p><strong>Рівень шуму:</strong> ${sensor.noiseLevel} dB</p>
      ${sensor instanceof MobileNoiseSensor ? `<p><strong>Заряд:</strong> ${sensor.batteryLevel}%</p>` : ''}
    </div>
  `;
  return card;
}

function updateView() {
  const container = document.getElementById('sensors-container');
  const avgElement = document.getElementById('average-noise');

  if (container) {
    container.innerHTML = '';
    system.sensors.forEach(sensor => {
      container.appendChild(renderSensorCard(sensor));
    });
  }

  if (avgElement) {
    avgElement.textContent = `${system.getAverageNoiseLevel()} dB`;
  }
}

document.addEventListener('DOMContentLoaded', updateView);


console.group('--- Перевірка роботи системи класів ---');
const sensorA = system.findSensorById('NS-01');
const sensorB = system.findSensorById('NS-02');

console.log('Спільний метод у prototype (true):', sensorA.getStatus === sensorB.getStatus);
console.log('Власна властивість noiseLevel (true):', Object.hasOwn(sensorA, 'noiseLevel'));
console.log('Власна властивість getStatus (false):', Object.hasOwn(sensorA, 'getStatus'));

console.log('Середній рівень (очікується ~71.67 dB без MNS):', system.getAverageNoiseLevel(), 'dB');
console.log('Критичні сенсори:', system.getCriticalSensors().map(s => `${s.id}: ${s.noiseLevel} dB`));

sensorA.updateNoiseLevel(80);
console.log(`NS-01 після оновлення: ${sensorA.noiseLevel} dB, статус: ${sensorA.getStatus()}`);
console.groupEnd();