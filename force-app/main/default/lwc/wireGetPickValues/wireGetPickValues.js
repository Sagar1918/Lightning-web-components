import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class WireGetPickValues extends LightningElement {
    selectedIndustry='';
    industryOptions=[];

    //We are using this adapter to get the object record Id
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo;

    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD})
    industryPickListHandler({data, error}){
        if(data){
            this.industryOptions = [...this.generatePickList(data)]
        }
        if(error){
            console.error(error);
        }
    }

    //This function will return the values from the adapter API
    generatePickList(data){
        return data.values.map(item => ({label: item.label, value: item.value}))
    }

    handleChange(event){
        this.selectedIndustry = event.detail.value;
    }
}