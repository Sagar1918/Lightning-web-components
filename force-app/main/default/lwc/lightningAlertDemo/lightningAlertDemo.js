import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';

export default class LightningAlertDemo extends LightningElement {
   async alertHandler(event){
        const{name} = event.target;

       await LightningAlert.open({
            message:"This is the alert Message",
            // variant: "headerless", //IF we don't want header use this
            label:`I am ${name} alert Haeder`,
            theme:name
        })
    }
}