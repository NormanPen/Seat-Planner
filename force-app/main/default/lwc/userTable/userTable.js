import { LightningElement, wire } from "lwc";
import getUsers from "@salesforce/apex/UserController.getUsers";

export default class UserTable extends LightningElement {
  users;

  @wire(getUsers)
  wiredUsers({ error, data }) {
    if (data) {
      this.users = data.map((user) => ({
        Id: user.Id,
        Name: user.Name,
        Email: user.Email,
        SmallPhotoUrl: user.SmallPhotoUrl
      }));
    } else if (error) {
      // Fehlerbehandlung, falls erforderlich
    }
  }
}
