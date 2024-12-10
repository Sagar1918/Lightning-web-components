public with sharing class RefreshContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [Select Id, FirstName, LastName, Email from Contact Limit 10];
    }
}