import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sensor } from './sensor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sensors: Sensor[] = [
    {
      id: 1,
      name: 'Сенсор Центр',
      district: 'Галицький',
      noiseLevel: 72,
      status: 'active'
    },
    {
      id: 2,
      name: 'Сенсор Сихів',
      district: 'Сихівський',
      noiseLevel: 58,
      status: 'active'
    },
    {
      id: 3,
      name: 'Сенсор Левандівка',
      district: 'Залізничний',
      noiseLevel: 45,
      status: 'inactive'
    }
  ];

  darkTheme = false;
  errorMessage = '';

  newName = '';
  newDistrict = '';
  newNoiseLevel: number | null = null;

  addSensor() {
    const name = this.newName.trim();
    const district = this.newDistrict.trim();

    if (!name || !district || this.newNoiseLevel === null) {
      this.errorMessage = 'Заповніть назву, район і рівень шуму.';
      return;
    }

    if (this.newNoiseLevel < 30 || this.newNoiseLevel > 130) {
      this.errorMessage = 'Рівень шуму має бути в межах 30–130 дБ.';
      return;
    }

    this.errorMessage = '';

    const nextId = this.sensors.length
      ? Math.max(...this.sensors.map(sensor => sensor.id)) + 1
      : 1;

    this.sensors.push({
      id: nextId,
      name,
      district,
      noiseLevel: this.newNoiseLevel,
      status: 'active'
    });

    this.newName = '';
    this.newDistrict = '';
    this.newNoiseLevel = null;
  }

  deleteSensor(id: number) {
    this.sensors = this.sensors.filter(sensor => sensor.id !== id);
  }

  toggleStatus(id: number) {
    const sensor = this.sensors.find(sensor => sensor.id === id);

    if (sensor) {
      sensor.status = sensor.status === 'active' ? 'inactive' : 'active';
    }
  }

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
  }

  get activeCount() {
    return this.sensors.filter(sensor => sensor.status === 'active').length;
  }

  get criticalCount() {
    return this.sensors.filter(sensor => sensor.noiseLevel > 70).length;
  }

  get averageNoise() {
    if (!this.sensors.length) {
      return 0;
    }
    const sum = this.sensors.reduce((acc, sensor) => acc + sensor.noiseLevel, 0);
    return Math.round(sum / this.sensors.length);
  }

  getNoiseStatus(noiseLevel: number): 'normal' | 'warning' | 'critical' {
    if (noiseLevel <= 55) {
      return 'normal';
    }
    if (noiseLevel <= 70) {
      return 'warning';
    }
    return 'critical';
  }

  getNoiseLabel(noiseLevel: number) {
    return {
      normal: 'Норма',
      warning: 'Попередження',
      critical: 'Критичний рівень'
    }[this.getNoiseStatus(noiseLevel)];
  }
}
