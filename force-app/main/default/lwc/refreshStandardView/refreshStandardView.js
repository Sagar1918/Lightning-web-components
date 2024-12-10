import { LightningElement } from 'lwc';
import {RefreshEvent} from 'lightning/refresh';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';

export default class RefreshStandardView extends LightningElement {
    nameField = NAME_FIELD;
    phoneField = PHONE_FIELD;
    emailField = EMAIL_FIELD;
    accountId = ACCOUNT_ID;

    handleSuccess(event){
        this.dispatchEvent(new RefreshEvent());
    }
}