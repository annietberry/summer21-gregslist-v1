export const pokeApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/cars",
  timeout: 10000
})