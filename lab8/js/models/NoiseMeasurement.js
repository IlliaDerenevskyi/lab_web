'use strict';

export class NoiseMeasurement {
  constructor(value, measuredAt = new Date()) {
    this.value = value;
    this.measuredAt = measuredAt;
  }

  isValid() {
    return (
      typeof this.value === 'number' &&
      Number.isFinite(this.value) &&
      this.measuredAt instanceof Date &&
      Number.isFinite(this.measuredAt.getTime())
    );
  }
}
