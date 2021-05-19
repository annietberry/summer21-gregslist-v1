import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";

class JobsService {
  addJob(formData) {
    let newJob = new Job(formData.title, formData.business, formData.salary)
    //CHECK SPREAD OPERATOR
    ProxyState.jobs = Proxystate.jobs
  }
}

export const jobsService = new JobsService()