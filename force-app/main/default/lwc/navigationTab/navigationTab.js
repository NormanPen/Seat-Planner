import { LightningElement, api } from "lwc";

export default class NavigationTab extends LightningElement {
  @api label = "Button";

  handleClick() {
    this.dispatchEvent(new CustomEvent("buttonclick"));
  }
}
