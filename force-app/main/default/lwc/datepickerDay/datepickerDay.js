import { LightningElement, track } from "lwc";

export default class DatepickerDay extends LightningElement {
  @track month = "";
  @track tableRows = [];
  @track currentDate;
  @track datePickerVisible = false;

  get datePickerClass() {
    return this.datePickerVisible
      ? "date-picker-container"
      : "date-picker-container-hidden";
  }

  handleButtonClick() {
    this.datePickerVisible = !this.datePickerVisible;
  }

  connectedCallback() {
    this.setCurrentMonth();
  }

  setCurrentMonth() {
    this.currentDate = new Date();
    this.currentDate.setDate(1); // Setze auf den 1. Tag des Monats
    this.updateTable();
  }

  updateTable() {
    const firstDayOfMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1
    );
    let startDay = firstDayOfMonth.getDay(); // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag

    // Korrektur für Montag als Starttag
    startDay = startDay === 0 ? 6 : startDay - 1;

    const daysInMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    ).getDate();

    this.month = this.currentDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric"
    });
    this.tableRows = [];

    for (let i = 1; i <= daysInMonth + startDay; i++) {
      const row = {
        key: i,
        cells: []
      };

      for (let j = 0; j < 7; j++) {
        const day = i - startDay;
        row.cells.push({
          key: day,
          value: day > 0 && day <= daysInMonth ? day : ""
        });
        i++;
      }

      this.tableRows.push(row);
    }
  }

  handlePrevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateTable();
  }

  handleNextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateTable();
  }

  handleDayClick(event) {
    const day = event.target.dataset.day;
    if (day) {
      const selectedDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        parseInt(day, 10)
      );
      console.log(
        "Ausgewähltes Datum:",
        selectedDate.toLocaleDateString("de-DE")
      );
      this.handleButtonClick(); // Datepicker schließen
    }
  }

  resetToCurrentMonth() {
    this.setCurrentMonth();
  }
}
