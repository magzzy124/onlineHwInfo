interface apiResponse {
  id: Number,
  SensorId: string,
  Text: string,
  Min: string,
  Value: string,
  Max: string,
  ImageURL: string,
  Children: apiResponse[],
}

interface widgetType {
  type: "barChart"
  data: apiResponse
}

interface sensorType {
  value: Number,
  min: Number,
  max: Number,
  format: string
}
