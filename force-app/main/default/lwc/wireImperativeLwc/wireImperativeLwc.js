import { LightningElement, track } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import getAccounts1 from '@salesforce/apex/WireApexClass.getAccounts1';

export default class WireImperativeLwc extends LightningElement {
    @track recordId;
    accounts;
    handleClick(){
        getAccounts1().then(result => {
            console.log(result);
            
            this.accounts = result
        }).catch(error => {
            console.error(error);
        })
    }

    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Account',
                recordId: '001dM000003N5AGQA0',
                actionName: 'view'
            }
        })
    }
}