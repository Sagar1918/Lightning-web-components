import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext, APPLICATION_SCOPE, subscribe, unsubscribe } from 'lightning/messageService';

export default class L2LLmsX extends LightningElement {
    receivedMessage;
    subscription;
    @wire(MessageContext) context;

    subscribeMessage(){
        // Syntax: subscribe(messageConext, messageChannel, listener, subscriberOptions)
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {this.handleMessage(message)}, {scope: APPLICATION_SCOPE});
        }

        handleMessage(message){
            this.receivedMessage = message.lmsData.value ? message.lmsData.value : 'No message Published';
        }

    handleUnsubscribe(){
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}