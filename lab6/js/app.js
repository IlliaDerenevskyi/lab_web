'use strict';

import { NoiseSensor } from './models/NoiseSensor.js';

import { MonitoringSystem } from './services/MonitoringSystem.js';

const sensorsData = [
  { id: 'NS-01', district: 'Галицький', location: 'просп. Свободи, 1', noiseLevel: 52 },
  { id: 'NS-02', district: 'Франківський', location: 'вул. Наукова, 10', noiseLevel: 68 },
  { id: 'NS-03', district: 'Шевченківський', location: 'просп. Чорновола, 20', noiseLevel: 83 },
  { id: 'NS-04', district: 'Галицький', location: 'вул. Городоцька, 15', noiseLevel: 79 }
];

const system = new MonitoringSystem();

sensorsData.forEach(data => {
  system.addSensor(NoiseSensor.fromObject(data));
});

const sensorList = document.querySelector('.sensor-list');
const districtFilter = document.querySelector('#district-filter');
const criticalFilter = document.querySelector('#critical-filter');

function createSensorCard(sensor) {
  const status = sensor.getStatus();
  const card = document.createElement('article');
  card.classList.add('sensor-card', `sensor-card--${status}`);

  const header = document.createElement('div');
  header.classList.add('sensor-card__header');

  const title = document.createElement('h3');
  title.textContent = sensor.id;

  const statusLabel = document.createElement('span');
  statusLabel.classList.add('sensor-card__status');
  statusLabel.textContent = {
    normal: 'Норма',
    warning: 'Попередження',
    critical: 'Критичний рівень'
  }[status];

  header.append(title, statusLabel);

  const district = document.createElement('p');
  district.textContent = `Район: ${sensor.district}`;

  const location = document.createElement('p');
  location.textContent = `Локація: ${sensor.location}`;

  const noiseLevel = document.createElement('p');
  noiseLevel.textContent = `Рівень шуму: ${sensor.noiseLevel} дБ`;

  card.append(header, district, location, noiseLevel);
  return card;
}

function renderSensors(sensorArray) {
  sensorList.replaceChildren();
  sensorArray.forEach(sensor => {
    sensorList.append(createSensorCard(sensor));
  });
}

function applyFilters() {
  const selectedDistrict = districtFilter.value;
  const criticalOnly = criticalFilter.checked;
  const filteredSensors = system.sensors.filter(sensor => {
    const matchesDistrict = selectedDistrict === 'all' || sensor.district === selectedDistrict;
    const matchesStatus = !criticalOnly || sensor.getStatus() === 'critical';
    return matchesDistrict && matchesStatus;
  });

  renderSensors(filteredSensors);
}

districtFilter.addEventListener('change', applyFilters);
criticalFilter.addEventListener('change', applyFilters);
renderSensors(system.sensors);