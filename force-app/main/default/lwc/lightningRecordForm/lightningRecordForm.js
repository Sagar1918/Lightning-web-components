import { LightningElement, api, track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class LightningRecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track accountData = [];

    fields = ['Name', 'Industry', 'Phone'];


    successHandler(event){
        const savedData = event.detail.fields;
        this.recordId = event.detail.id;
        this.accountData.push({
            Id: savedData.Id, 
            Name: savedData.Name, 
            Industry: savedData.Industry, 
            Phone: savedData.Phone 
        });
        console.log(this.accountData);
        

        const toastMsg = new ShowToastEvent({
            title: 'Success',
            message: 'Account Successfully created',
            variant: 'success'
        })
        this.dispatchEvent(toastMsg); 
    }
   
}