import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/RefreshContactController.getContacts';
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';



const columns=[
    {label:'First Name', fieldName:'FirstName', editable:true},
    {label:'Last Name', fieldName:'LastName', editable:true},
    {label:'Email', fieldName:'Email', editable:true},

]
export default class RefreshApexLwc extends LightningElement {
columns=columns;
draftValues=[];

    @wire(getContacts)
    contacts;

    handleSave(event){
        console.log(event.detail.draftValues);
        const recordInputs = event.detail.draftValues.slice().map(draft=>{
            const fields = Object.assign({},draft)
            return {fields}
        });
console.log("recordInputs: ",recordInputs);

const promises = recordInputs.map(recordInput => updateRecord(recordInput));
Promise.all(promises).then((result) => {
    this.showToastMsg('Success','Contacts Updated','success');
    this.draftValues=[];
    this.refreshApex(contacts);
}).catch(error=>{
    // this.showToastMsg('Error while editing record',error.body.message,'error');
    console.log(error);
})
   
    }

    showToastMsg(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant
        }))
    }
}