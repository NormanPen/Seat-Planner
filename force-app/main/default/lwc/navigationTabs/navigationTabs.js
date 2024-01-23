import { LightningElement, track } from "lwc";

export default class NavigationTabs extends LightningElement {
  @track isSheetOpen = true;
  @track isTestOpen = false;

  get sheetButtonClass() {
    return this.isSheetOpen ? "active" : "is-inactive";
  }

  get testButtonClass() {
    return this.isTestOpen ? "active" : "is-inactive";
  }

  handleSheetButtonClick() {
    this.isSheetOpen = true;
    this.isTestOpen = false;
  }

  handleTestButtonClick() {
    this.isSheetOpen = false;
    this.isTestOpen = true;
  }
}

//Unbedingt besser bennen. Weiss ja kein Schwein was gemeint ist
