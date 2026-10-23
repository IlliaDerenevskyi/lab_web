'use strict';

import { NOISE_LIMITS } from './models/NoiseSensor.js';

// Endpoint свого проєкту MockAPI (ресурс sensors, prefix /api/v1)
const MY_MOCKAPI_URL = 'https://6ad1e96566cd28aed82d465e.mockapi.io';
const API_URL = `${MY_MOCKAPI_URL}/api/v1/sensors`;

const sensorList = document.querySelector('#sensors-list');
const districtFilter = document.querySelector('#district-filter');
const criticalFilter = document.querySelector('#critical-filter');

let sensors = [];

function getNoiseStatus(noiseLevel) {
  if (noiseLevel <= NOISE_LIMITS.normalMax) {
    return 'normal';
  }
  if (noiseLevel <= NOISE_LIMITS.warningMax) {
    return 'warning';
  }
  return 'critical';
}

function createSensorCard(sensor) {
  const noiseStatus = getNoiseStatus(sensor.noiseLevel);
  const card = document.createElement('article');
  card.classList.add('sensor-card', `sensor-card--${noiseStatus}`);

  const header = document.createElement('div');
  header.classList.add('sensor-card__header');

  const title = document.createElement('h3');
  title.textContent = sensor.name;

  const statusLabel = document.createElement('span');
  statusLabel.classList.add('sensor-card__status');
  statusLabel.textContent = {
    normal: 'Норма',
    warning: 'Попередження',
    critical: 'Критичний рівень'
  }[noiseStatus];

  header.append(title, statusLabel);

  const district = document.createElement('p');
  district.textContent = `Район: ${sensor.district}`;

  const noiseLevel = document.createElement('p');
  noiseLevel.textContent = `Рівень шуму: ${sensor.noiseLevel} дБ`;

  const status = document.createElement('p');
  status.textContent = `Статус: ${sensor.status}`;

  card.append(header, district, noiseLevel, status);
  return card;
}

function showMessage(text) {
  const message = document.createElement('p');
  message.textContent = text;
  sensorList.replaceChildren(message);
}

function renderSensors(sensorArray) {
  sensorList.replaceChildren();
  if (sensorArray.length === 0) {
    showMessage('Сенсорів не знайдено.');
    return;
  }
  sensorArray.forEach(sensor => {
    sensorList.append(createSensorCard(sensor));
  });
}

function applyFilters() {
  const selectedDistrict = districtFilter.value;
  const criticalOnly = criticalFilter.checked;
  const filteredSensors = sensors.filter(sensor => {
    const matchesDistrict = selectedDistrict === 'all' || sensor.district === selectedDistrict;
    const matchesStatus = !criticalOnly || getNoiseStatus(sensor.noiseLevel) === 'critical';
    return matchesDistrict && matchesStatus;
  });

  renderSensors(filteredSensors);
}

async function loadSensors() {
  showMessage('Завантаження даних...');
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    sensors = await response.json();
    applyFilters();
  } catch (error) {
    console.error('Не вдалося завантажити сенсори:', error);
    showMessage('Не вдалося завантажити дані.');
  }
}

districtFilter.addEventListener('change', applyFilters);
criticalFilter.addEventListener('change', applyFilters);

loadSensors();
