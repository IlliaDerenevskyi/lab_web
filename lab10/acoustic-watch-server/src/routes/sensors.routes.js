import { Router } from "express";
import sensors from "../data/sensors.js";

const router = Router();
let nextId = Math.max(0, ...sensors.map((s) => s.id)) + 1;

function validSensor(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return false;
  }
  return typeof data.name === "string" && data.name.trim() !== ""
    && typeof data.district === "string" && data.district.trim() !== ""
    && typeof data.noiseLevel === "number"
    && Number.isFinite(data.noiseLevel)
    && data.noiseLevel >= 0 && data.noiseLevel <= 120
    && (data.status === "active" || data.status === "inactive");
}

function parseId(value) {
  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

router.get("/", (req, res) => {
  const { status, district } = req.query;
  let result = sensors;

  if (typeof status === "string") {
    result = result.filter((item) => item.status === status);
  }
  if (typeof district === "string") {
    result = result.filter((item) => item.district === district);
  }

  res.json(result);
});

// "/stats" має бути оголошений раніше за "/:id"
router.get("/stats", (req, res) => {
  const total = sensors.length;
  const active = sensors.filter((item) => item.status === "active").length;
  const noiseSum = sensors.reduce((sum, item) => sum + item.noiseLevel, 0);
  const averageNoiseLevel = total === 0
    ? 0
    : Number((noiseSum / total).toFixed(1));

  res.json({ total, active, inactive: total - active, averageNoiseLevel });
});

router.get("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ message: "Invalid sensor ID" });
  }
  const sensor = sensors.find((item) => item.id === id);
  if (!sensor) {
    return res.status(404).json({ message: "Sensor not found" });
  }
  res.json(sensor);
});

router.post("/", (req, res) => {
  if (!validSensor(req.body)) {
    return res.status(400).json({ message: "Invalid sensor data" });
  }
  const { name, district, noiseLevel, status } = req.body;
  const sensor = {
    id: nextId++, name: name.trim(), district: district.trim(),
    noiseLevel, status
  };
  sensors.push(sensor);
  res.status(201).json(sensor);
});

router.put("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ message: "Invalid sensor ID" });
  }
  const sensor = sensors.find((item) => item.id === id);
  if (!sensor) {
    return res.status(404).json({ message: "Sensor not found" });
  }
  if (!validSensor(req.body)) {
    return res.status(400).json({ message: "Invalid sensor data" });
  }
  const { name, district, noiseLevel, status } = req.body;
  sensor.name = name.trim();
  sensor.district = district.trim();
  sensor.noiseLevel = noiseLevel;
  sensor.status = status;
  res.json(sensor);
});

router.delete("/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (id === null) {
    return res.status(400).json({ message: "Invalid sensor ID" });
  }
  const index = sensors.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Sensor not found" });
  }
  sensors.splice(index, 1);
  res.status(204).send();
});

export default router;
