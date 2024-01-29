public with sharing class UserSeatAssignmentController {
  public static void assignUserToSeat(Id userId, Id seatId, Date assignedDate) {
    UserSeatAssignment__c assignment = new UserSeatAssignment__c();
    assignment.User__c = userId;
    assignment.Seat__c = seatId;
    assignment.Date__c = assignedDate;
    // Weitere Felder können ebenfalls gesetzt werden, je nach Ihren Anforderungen
    insert assignment;
  }

  public static List<UserSeatAssignment__c> getUserAssignmentsForDate(
    Id userId,
    Date assignedDate
  ) {
    return [
      SELECT Id, User__c, Seat__c, Date__c /* Weitere Felder hier */
      FROM UserSeatAssignment__c
      WHERE User__c = :userId AND Date__c = :assignedDate
    ];
  }
}
