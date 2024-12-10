import { api, LightningElement } from 'lwc';
import {registerRefreshHandler, unregisterRefreshHandler} from 'lightning/refresh';
import getAccountRating from '@salesforce/apex/RefreshAccountRating.getAccountRating';

export default class RefreshCustomViewApi extends LightningElement {
    @api recordId;
    ratingValue;
    refreshHandlerId;

    connectedCallback(){
        /**registerRefreshHandler takes 2 parameters --> current context, callback method */
        this.refreshHandlerId = registerRefreshHandler(this, this.refreshHandler);
        this.fetchRating();
    }

disconnectedCallback(){
    unregisterRefreshHandler(this.refreshHandlerId);
}

    refreshHandler(){
        console.log("Something has changed");
        return new Promise(resolve => {
            this.fetchRating();
            resolve(true);
        })
    }

    fetchRating(){
        getAccountRating({"accountId":this.recordId}).then((response) => {
            console.log(response);
            this.ratingValue = response[0].Rating;
            
        }).catch((error) => {
            console.log(error);
            
        })
    }
}