import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

class HousesService {
  addHouse(formData) {
    let newHouse = new House(formData.footage, formData.location, formData.color, formData.price, formData.img)

    ProxyState.houses = ProxyState.houses
  }
}

export const housesService = new HousesService()