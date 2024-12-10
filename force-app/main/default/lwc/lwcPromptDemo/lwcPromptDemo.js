import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt';
import LightningAlert from 'lightning/alert';

export default class LwcPromptDemo extends LightningElement {
    async promptHandler(){
        const result = await LightningPrompt.open({
            message:"Please enter your age",
            label:"Check your voting elegibility",
            theme:"info"
        })

        if(result && Number(result) > 18){
                this.alertHandler("Hurray! you are eligible for voting", "Eligible", "success");
        } else{
            this.alertHandler("Sorry! you are not eligible for voting", "Not Eligible", "warning");
        }
    }

    alertHandler(message, label, theme){
        LightningAlert.open({
            message,
            label,
            theme
        })
    }
}