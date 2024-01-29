public with sharing class SeatController {
  public static void createSeat(String seatName) {
    Seat__c newSeat = new Seat__c();
    newSeat.Name = seatName;
    // Weitere Felder können ebenfalls gesetzt werden, je nach Ihren Anforderungen
    insert newSeat;
  }

  public static List<Seat__c> getAllSeats() {
    return [SELECT Id, Name /* Weitere Felder hier */ FROM Seat__c];
  }
}
