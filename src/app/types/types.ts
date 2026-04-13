interface apiResponse {
  id: Number,
  Text: string,
  Min: string,
  Value: string,
  Max: string,
  ImageURL: string,
  Children: apiResponse[],
}
