import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';


export default class LightningRecordEditForm extends LightningElement {
    objectName = CONTACT_OBJECT;
    fields = {
        accountId: ACCOUNTID_FIELD,
        name: NAME_FIELD,
        title: TITLE_FIELD,
        phone: PHONE_FIELD,
        email: EMAIL_FIELD
    }

    //Reset Handler
    resetHandler(){
        const inputFields = this.template.querySelectorAll('lightning-input-field');

        if(inputFields){
            Array.from(inputFields).forEach(item => {
                item.reset(); //forEach has a in-built reset function which will reset all fields empty
            })
        }
    }
}