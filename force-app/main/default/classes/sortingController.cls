public with sharing class sortingController {
    @AuraEnabled(cacheable=true)
    public static List<opportunity> fetchData(){
        List<opportunity> oppList = [Select Id, Name, Amount from opportunity where Amount != null];
        return oppList;
    }
}