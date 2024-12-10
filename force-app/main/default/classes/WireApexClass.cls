public with sharing class WireApexClass {
    
@AuraEnabled(cacheable=true)
public static List<Account> getAccounts(String type){
    return [Select Id, Name, Type from Account where Type =: type Limit 5];
}

@AuraEnabled
public static List<Account> getAccounts1(){
    return [Select Id, Name, Type from Account Limit 5];
}

@AuraEnabled(cacheable=true)
public static List<Account> searchAccount(String name){
    String searchKey = '%'+name+'%';
    return [Select Id, Name from Account Where Name Like :searchKey];
}
}