import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CustomEditForm extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    inputValue = '';

handleChange(event){
    this.inputValue = event.target.value;
}

    handleSubmit(event){
        event.preventDefault();
        const inputValues = this.template.querySelectorAll('lightning-input');
        const checkedValue = inputValues.value;
        if(!checkedValue.includes('Hyderabad')){
            //setting the error message
            inputValues.setCustomValidity("The account name must be Hyderabad");
        }
        else{
            inputValues.setCustomValidity("");
            const fields = event.detail.fields;
            fields.Name = value;
            this.template.querySelectorAll('lightning-record-edit-form').submit(fields);
        }
        //Throwing the error message
        inputValues.reportValidity();
    }

    handleSuccess(event){
        const toast = new ShowToastEvent({
            title: 'Account Created',
            message: 'Record Id: '+event.detail.id,
            variant: 'success'
        })
        this.dispatchEvent(toast);
    }

}