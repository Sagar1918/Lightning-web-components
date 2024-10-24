import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {MessageContext, publish} from 'lightning/messageService';


export default class L2LLmsA extends LightningElement {
    inputvalue;

    @wire(MessageContext) context;

    inputHandler(event){
        this.inputvalue = event.target.value;
    }

    publishMessage(){
    const message = {
    lmsData: {
        value: this.inputvalue,
    }
}

    //publish(messageContext, messageChannel, message)
    publish(this.context, SAMPLEMC, message);

    }

}