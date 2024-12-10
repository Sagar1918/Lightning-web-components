import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateRecordDemo extends LightningElement {
    formFields={};

    // Handler to Bind the inputs to the fields
    changeHandler(event){
        const{name, value} = event.target;
        this.formFields[name] = value;
    }

    //Button Handler
    createContact(){
        const recordInputs = {apiName: CONTACT_OBJECT.objectApiName, fields: this.formFields};
        createRecord(recordInputs).then(result => {
            this.toastHandler('Success', `Contact was created Successfully ID: ${result.id}`, 'success');
            this.template.querySelector('form.create-form').reset();
            this.formFields={};
        }).catch(error => {
            this.toastHandler('Error', error.body.messsage, 'error');
        })
    }

    toastHandler(title, messsage, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            messsage,
            variant
        }))
    }
}