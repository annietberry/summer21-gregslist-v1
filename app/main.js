import { CarsController } from "./Controllers/CarsController.js"
import { JobsController } from "./Controllers/JobsController.js"
import { HousesController } from "./Controllers/HousesController.js"
class App {

  // constructor(){
  //   this.carsController = new CarsController()
  // }

  carsController = new CarsController()
  jobsController = new JobsController()
  housesController = new HousesController()


}

const app = new App();

window["app"] = app