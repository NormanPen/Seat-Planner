public with sharing class SeatController {
  // Methode zum Erstellen eines neuen Sitzplatzes
  public static void createSeat(String seatName) {
    try {
      Seat__c newSeat = new Seat__c();
      newSeat.Name = seatName;
      // Hier können weitere Felder gesetzt werden, je nach Bedarf
      // Zum Beispiel: newSeat.OwnerId = 'OwnerIdWert';
      insert newSeat;
    } catch (Exception e) {
      System.debug('Fehler beim Erstellen des Sitzplatzes: ' + e.getMessage());
      // Hier können Sie geeignete Fehlerbehandlung hinzufügen
    }
  }

  // Methode zum Abrufen aller Sitzplätze
  public static List<Seat__c> getAllSeats() {
    return [SELECT Id, Name /* Weitere Felder hier */ FROM Seat__c];
  }
}
