public with sharing class RefreshAccountRating {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRating(Id accountId){
        return [Select Id, Rating from Account where Id = :accountId];
    }
}