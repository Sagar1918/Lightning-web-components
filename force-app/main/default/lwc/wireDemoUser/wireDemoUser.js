import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
import { getRecord } from 'lightning/uiRecordApi';

const fields = [NAME_FIELD, EMAIL_FIELD];
export default class WireDemoUser extends LightningElement {
    userId = Id;
    userDetails;

    /**
     * Syntax: adapterConfig is the "params"
     * 
     * @wire(adapter, {adapterConfig}) 
     * property / function
     */

    //1. wire using function(Always prefer to use this approach)
    @wire(getRecord, {recordId:'$userId', fields})
    userHandler({data, error}){
        if(data){
        this.userDetails = data.fields;        
        }
        if(error){
            console.error(error);
        }
    }

    //2. wire using property
    @wire(getRecord, {recordId:'$userId', fields})
    userDetailProperty;
}