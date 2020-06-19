import Recipient from "./Recipient";
import Covid19Vaccine from "./covid19Vaccine";

export default class VaccineTest {
  constructor() {
    this.recipient = new Recipient();
    this.vaccine = new Covid19Vaccine();
  }

  inject() {
    this.recipient.acceptInjection(this.vaccine);
  }

  test() {
    if (this.recipient.getHasAntibodies()) {
      return "Vaccine Test Success";
    }
    return "Vaccine Test Failed";
  }
}
