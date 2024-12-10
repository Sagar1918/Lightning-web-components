import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm';

export default class LightningConfirmDem extends LightningElement {
   async confirmHandler(){
        const result = await LightningConfirm.open({
            message:"Would you like to refresh the page ?",
            label:"Are you sure",
            theme:"success",
        })

        console.log(result);
        if(result){
            location.reload();
        }
    }
}