import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js"

export class HousesController {
    constructor() {
        ProxyState.on('houses', this.drawHouses)
        //this.drawHouses()
    }

    drawHouses() {
        let template = ''
        ProxyState.houses.forEach(house => {
            template += /*html */`
            <div class="col-lg-4 listing my-3">
                <div class="card">
                    <div> 
                        <img src="${house.img}" height="200" /> 
                    </div>
                    <div class="card-body">
                        <p>
                            ${house.location}
                        </p>
                        <p>
                            <b>${house.price}<b>
                        </p>
                    </div>
                </div>
            </div>
            `

        });
        document.getElementById('listings').innerHTML = template

    }

    addHouse(event) {
        event.preventDefault()
        console.log(event)
        let form = event.target
        let formData = {
            footage: form.footage.value,
            location: form.location.value,
            color: color.location.value,
            price: price.location.value,
            img: img.location.value,
        }
        console.log(formData)
        housesService.addHouse(formData)
        form.reset()
        this.toggleForm()
    }

    toggleForm() {
        document.getElementById('house-form').classList.toggle('d-none')
    }
}