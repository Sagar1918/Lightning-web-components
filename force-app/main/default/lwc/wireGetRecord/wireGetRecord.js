import { api, LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';

export default class WireGetRecord extends LightningElement {

    name;
    annualRevenue;
    ownerName;
    @api recordId;
    @wire(getRecord, {recordId:'$recordId', fields:[NAME_FIELD, ANNUAL_REVENUE, OWNER_NAME_FIELD]})
    accountHandler({data, error}){
        if(data){
            console.log(data);
            
            // syntax: getFieldValue(record, field);
            this.name = getFieldValue(data, NAME_FIELD);
            this.annualRevenue = getFieldValue(data, ANNUAL_REVENUE);
            this.ownerName = getFieldValue(data, OWNER_NAME_FIELD);
          
        }
    }
}