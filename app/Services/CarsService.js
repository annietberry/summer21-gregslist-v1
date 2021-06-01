import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";

class CarsService {
    addCar(formData) {
        let newCar = new Car(formData.make, formData.model, formData.miles, formData.color, formData.price, formData.img)
        // ProxyState.cars.unshift(newCar)
        // TODO research the spread ... operator
        ProxyState.cars = [newCar, ...ProxyState.cars]
    }
}

let res = await pokeApi.get()
console.log('initial response', res);
ProxyState.wildPokemon = res.data.results
console.log('Appstate - wild pokemon', ProxyState.wildPokemon)

// NOTE singleton
export const carsService = new CarsService()