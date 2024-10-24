import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ToastNotification extends LightningElement {
    //Success variant Handler
    toastHandlerSuccess(){
        this.showToast('Success!','{0} account was Created {1}','success');
    }

    //Warning variant Handler
    toastHandlerWarning(){
       this.showToast('Warning!','Permission Denied','warning');
}

    //Error variant Handler
toastHandlerError(){
    this.showToast('Error!','Something went wrong','error');
}

    //Info variant Handler
toastHandlerInfo(){
    this.showToast('Info!','New release was updated','info');
}

//Reusable function for all variants
showToast(title, message, variant){
    const event = new ShowToastEvent({
        title,
        message,
        variant,
        messageData: [
            'Salesforce', {
                url :'http://www.salesforce.com',
                label:'Click here'
            }
        ],
        mode: 'sticky'
    });
    this.dispatchEvent(event);
}

}