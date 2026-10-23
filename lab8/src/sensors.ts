interface Sensor {
  id: string;
  name: string;
  district: string;
  noiseLevel: number;
  status: "active" | "inactive";
}

function getNoiseStatusClass(noiseLevel: number): string {
  if (noiseLevel <= 55) {
    return "sensor-card--normal";
  }
  if (noiseLevel <= 70) {
    return "sensor-card--warning";
  }
  return "sensor-card--critical";
}

function renderSensors(sensors: Sensor[]): void {
  const container =
    document.querySelector<HTMLDivElement>("#sensors") ||
    document.querySelector<HTMLDivElement>("#sensors-list");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  sensors.forEach((sensor) => {
    const card = document.createElement("div");
    card.className = `sensor-card ${getNoiseStatusClass(sensor.noiseLevel)}`;
    card.innerHTML = `
      <h3>${sensor.name}</h3>
      <p>Район: ${sensor.district}</p>
      <p>Рівень шуму: ${sensor.noiseLevel} дБ</p>
      <p>Статус: ${sensor.status}</p>
    `;
    container.appendChild(card);
  });
}

async function loadSensors(): Promise<void> {
  try {
    const response = await fetch(
      "https://6ad1e96566cd28aed82d465e.mockapi.io/api/v1/sensors"
    );

    if (!response.ok) {
      throw new Error("Не вдалося завантажити сенсори");
    }

    const sensors: Sensor[] = await response.json();
    renderSensors(sensors);
  } catch (error) {
    console.error("Помилка:", error);
  }
}

loadSensors();
