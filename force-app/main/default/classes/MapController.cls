public with sharing class MapController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [select id, name, BillingCity, BillingAddress, BillingCountry from account order by Name Limit 1];
    }
}