import { LightningElement } from "lwc";
import officeSVG from "@salesforce/resourceUrl/aq_office";

export default class Office extends LightningElement {
  officeBackground = `background-image: url(${officeSVG}); background-repeat: no-repeat; background-position: center center; background-size: cover;`;
}
