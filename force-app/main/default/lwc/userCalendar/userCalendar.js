import { LightningElement, track, wire } from "lwc";
import getUsers from "@salesforce/apex/UserController.getUsers";

export default class UserCalendar extends LightningElement {
  @track currentDate;
  @track Monday;
  @track Tuesday;
  @track Wednesday;
  @track Thursday;
  @track Friday;
  @track Saturday;
  @track Sunday;
  @track users = [];

  connectedCallback() {
    this.setCurrentWeek();
  }

  setCurrentWeek(selectedDate = new Date()) {
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

    this.currentDate = selectedDate.toLocaleDateString("de-DE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    this.Monday = this.getDayWithDate(startOfWeek, 1);
    this.Tuesday = this.getDayWithDate(startOfWeek, 2);
    this.Wednesday = this.getDayWithDate(startOfWeek, 3);
    this.Thursday = this.getDayWithDate(startOfWeek, 4);
    this.Friday = this.getDayWithDate(startOfWeek, 5);
    this.Saturday = this.getDayWithDate(startOfWeek, 6);
    this.Sunday = this.getDayWithDate(startOfWeek, 0);
  }

  handleDateChange(event) {
    const selectedDate = event.target.value
      ? new Date(event.target.value)
      : new Date();
    this.setCurrentWeek(selectedDate);
  }

  getDayWithDate(baseDate, addDays) {
    const targetDate = new Date(baseDate);
    targetDate.setDate(baseDate.getDate() + addDays);
    const options = { weekday: "long", day: "numeric" };
    return targetDate.toLocaleDateString("de-DE", options);
  }

  @wire(getUsers)
  wiredUsers({ error, data }) {
    if (data) {
      this.users = data.map((user) => ({
        ...user,
        PictureUrl: user.SmallPhotoUrl // Annahme: das Feld "SmallPhotoUrl" enthält die Profilbild-URL
      }));
    } else if (error) {
      console.error("Fehler beim Laden von Benutzern:", error);
    }
  }
}
