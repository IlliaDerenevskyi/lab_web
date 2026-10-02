'use strict';

import { NoiseMeasurement } from './NoiseMeasurement.js';

export const NOISE_LIMITS = Object.freeze({
  minValid: 30,
  maxValid: 130,
  normalMax: 55,
  warningMax: 70
});

export class NoiseSensor {
  constructor(id, district, location, noiseLevel = 0) {
    if (!id || typeof id !== 'string') {
      throw new Error('ID сенсора має бути непорожнім рядком.');
    }

    this.id = id;
    this.district = district;
    this.location = location;
    this.noiseLevel = Number(noiseLevel);
    this.measurements = [];

    if (NoiseSensor.isValidNoiseLevel(this.noiseLevel)) {
      this.measurements.push(new NoiseMeasurement(this.noiseLevel));
    }
  }

  getStatus() {
    if (this.noiseLevel <= NOISE_LIMITS.normalMax) {
      return 'normal';
    }
    if (this.noiseLevel <= NOISE_LIMITS.warningMax) {
      return 'warning';
    }
    return 'critical';
  }

  updateNoiseLevel(value) {
    if (!NoiseSensor.isValidNoiseLevel(value)) {
      throw new Error(`Неприпустиме значення рівня шуму: ${value}`);
    }
    const measurement = new NoiseMeasurement(value);
    this.addMeasurement(measurement);
  }

  addMeasurement(measurement) {
    if (!(measurement instanceof NoiseMeasurement)) {
      throw new Error('Очікується обʼєкт NoiseMeasurement.');
    }
    if (!measurement.isValid()) {
      throw new Error(`Вимірювання поза діапазоном: ${measurement.value} dB`);
    }

    this.measurements.push(measurement);
    this.noiseLevel = measurement.value;
  }

  static isValidNoiseLevel(value) {
    return (
      typeof value === 'number' &&
      Number.isFinite(value) &&
      value >= NOISE_LIMITS.minValid &&
      value <= NOISE_LIMITS.maxValid
    );
  }

  static fromObject(data) {
    const requiredKeys = ['id', 'district', 'location', 'noiseLevel'];
    for (const key of requiredKeys) {
      if (!(key in data)) {
        throw new Error(`Обʼєкт не містить обовʼязкового поля: ${key}`);
      }
    }
    return new NoiseSensor(data.id, data.district, data.location, data.noiseLevel);
  }
}

export class MobileNoiseSensor extends NoiseSensor {
  constructor(id, district, location, noiseLevel, batteryLevel = 100) {
    super(id, district, location, noiseLevel);
    this.batteryLevel = Math.max(0, Math.min(100, Number(batteryLevel)));
  }

  needsCharging() {
    return this.batteryLevel < 20;
  }

  getStatus() {
    if (this.needsCharging()) {
      return 'warning';
    }
    return super.getStatus();
  }
}