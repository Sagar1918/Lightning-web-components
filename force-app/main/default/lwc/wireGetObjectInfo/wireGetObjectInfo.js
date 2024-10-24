import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class WireGetObjectInfo extends LightningElement {
    adapterParams;

    //getObjectInfo adapter gives us the Object Metadata about a specific object
    //1. Using function
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfoHandler({data, error}){
        if(data){
            this.adapterParams = data;
        }
        if(error){
            console.error(error);
        }
    }


    //2. Using Property
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfoProperty;


    //3. getObjectInfos adapter using function
    objectInfos;
    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];
    @wire(getObjectInfos, {objectApiNames: '$objectApiNames'})
    differentObjectHandlers({data}){
        if(data){
            console.log(data);
            this.objectInfos = data;
        }
    }
}