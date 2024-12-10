public with sharing class FilteringInLwc {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [select id, Name, email, title from Contact Limit 10];
    }
}