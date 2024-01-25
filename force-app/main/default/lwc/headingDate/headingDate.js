// HeadingDate.js
import { LightningElement, wire, track } from "lwc";
import { publish, MessageContext } from "lightning/messageService";

export default class HeadingDate extends LightningElement {
  @track date;

  // Drahtbindung (Wire Service) für die Datenaustausch-Nachricht
  @wire(MessageContext)
  messageContext;

  connectedCallback() {
    console.log("HeadingDate connectedCallback");
    this.addEventListener("dateselected", this.handleDateSelected.bind(this));
  }

  handleDateSelected(event) {
    const selectedDate = event.detail;
    this.date = selectedDate.toLocaleDateString("de-DE");

    // Sende das ausgewählte Datum über eine Nachricht ins System, sodass andere Komponenten darauf reagieren können
    const message = { date: this.date };
    publish(this.messageContext, "dateSelectedMessage", message);
  }
}
