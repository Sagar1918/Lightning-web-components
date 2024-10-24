import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
   handleClose(){
    const myEvent = new CustomEvent('close',{
        detail:{
            msg:"Modal Closed Succesfully"
        }
    });
    this.dispatchEvent(myEvent);
   }
}