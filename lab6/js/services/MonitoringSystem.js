'use strict';

import { NoiseSensor } from '../models/NoiseSensor.js';

export class MonitoringSystem {
  constructor() {
    this.sensors = [];
  }

  addSensor(sensor) {
    if (!(sensor instanceof NoiseSensor)) {
      throw new Error('Можна додавати лише обʼєкти NoiseSensor або його підкласів.');
    }

    const sensorExists = this.sensors.some(item => item.id === sensor.id);
    if (sensorExists) {
      throw new Error(`Датчик ${sensor.id} вже існує.`);
    }

    this.sensors.push(sensor);
  }

  findSensorById(id) {
    return this.sensors.find(sensor => sensor.id === id) || null;
  }

  getSensorsByDistrict(district) {
    return this.sensors.filter(
      sensor => sensor.district.toLowerCase() === district.toLowerCase()
    );
  }

  getCriticalSensors() {
    return this.sensors.filter(sensor => sensor.getStatus() === 'critical');
  }

  getAverageNoiseLevel() {
    if (this.sensors.length === 0) {
      return 0;
    }

    const sum = this.sensors.reduce((acc, sensor) => acc + sensor.noiseLevel, 0);
    return Number((sum / this.sensors.length).toFixed(2));
  }
}