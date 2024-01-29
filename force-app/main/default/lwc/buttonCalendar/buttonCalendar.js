import { LightningElement, api } from "lwc";

export default class ButtonCalendar extends LightningElement {
  @api label = "Button";
  updatedLabel;

  renderedCallback() {
    if (!this.updatedLabel) {
      this.updateLabel(); // Aktualisiert das Label beim Laden der Komponente
    }
  }

  handleButtonClick() {
    this.dispatchEvent(new CustomEvent("buttonclick"));
  }

  updateLabel(day = null) {
    if (day) {
      // Wenn ein Tag übergeben wurde, aktualisiere das Label mit diesem Tag
      this.updatedLabel = day;
    } else {
      // Andernfalls aktualisiere das Label mit dem aktuellen Tag
      const currentDate = new Date();
      const dayOfMonth = currentDate.getDate();
      const twoDigitDay = ("0" + dayOfMonth).slice(-2);
      this.updatedLabel = twoDigitDay; // Speichere das aktualisierte Label in einer separaten Eigenschaft
    }
  }

  // Getter für die Anzeige des Labels
  get displayLabel() {
    return this.updatedLabel || this.label; // Verwende das aktualisierte Label, falls vorhanden, ansonsten das Standardlabel
  }
}
