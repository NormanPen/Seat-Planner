import { LightningElement, api } from "lwc";

export default class ButtonCalendar extends LightningElement {
  @api label = "Button";

  handleButtonClick() {
    // Hier kannst du die Logik für den Klick-Event hinzufügen
    this.dispatchEvent(new CustomEvent("buttonclick"));
  }
}
