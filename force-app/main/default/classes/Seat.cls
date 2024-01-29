public with sharing class Seat {
  // Methode zum Erstellen eines neuen Sitzplatzes
  public static void create(String seatName) {
    Seat__c newSeat = new Seat__c();
    newSeat.Name = seatName;
    // Weitere Felder können ebenfalls gesetzt werden, je nach Ihren Anforderungen
    insert newSeat;
  }

  // Methode zum Abrufen aller Sitzplätze
  public static List<Seat__c> getAll() {
    return [SELECT Id, Name /* Weitere Felder hier */ FROM Seat__c];
  }

  // Weitere Methoden für Updates, Löschungen usw. je nach Bedarf
}
