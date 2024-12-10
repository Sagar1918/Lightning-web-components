import { LightningElement, track, wire } from 'lwc';
import getAccountsData from '@salesforce/apex/WireApexClass.getAccounts';

export default class WireApexLwc extends LightningElement {
@track selectedType='';

    @wire(getAccountsData, {type:'$selectedType'})
    accountHandler;

    get typeOptions(){
        return [
            {label:"Customer - Channel", value:"Customer - Channel"},
            {label:"Customer - Direct", value:"Customer - Direct"},
        ]
    }

    typeHandler(event){
        this.selectedType = event.target.value;
    }
}