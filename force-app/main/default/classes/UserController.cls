public with sharing class UserController {
  @AuraEnabled(cacheable=true)
  public static List<UserWrapper> getUsers() {
    List<UserWrapper> usersWrapperList = new List<UserWrapper>();
    // Abfrage der Mitglieder der Gruppe "SeatPlanner"
    for (User u : [
      SELECT Id, Name, Email, SmallPhotoUrl, Profile.UserType
      FROM User
      WHERE
        Id IN (
          SELECT UserOrGroupId
          FROM GroupMember
          WHERE Group.Name = 'SeatPlanner'
        )
    ]) {
      usersWrapperList.add(new UserWrapper(u));
    }
    return usersWrapperList;
  }

  public class UserWrapper {
    @AuraEnabled
    public Id Id { get; set; }
    @AuraEnabled
    public String Name { get; set; }
    @AuraEnabled
    public String Email { get; set; }
    @AuraEnabled
    public String SmallPhotoUrl { get; set; }
    @AuraEnabled
    public String UserType { get; set; }

    public UserWrapper(User u) {
      this.Id = u.Id;
      this.Name = u.Name;
      this.Email = u.Email;
      this.SmallPhotoUrl = u.SmallPhotoUrl;
      this.UserType = u.Profile.UserType;
    }
  }
}
