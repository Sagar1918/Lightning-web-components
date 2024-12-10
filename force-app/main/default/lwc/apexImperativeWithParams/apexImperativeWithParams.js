import { LightningElement } from 'lwc';
import searchAccounts from '@salesforce/apex/WireApexClass.searchAccount';

export default class ApexImperativeWithParams extends LightningElement {
    searchKey='';
    accounts;
    timer;

    searchHandler(event){
        //Using Debouncing technique  ---> To reduce the network calls 
        window.clearTimeout(this.timer);
        this.searchKey=event.target.value;
        this.timer = setTimeout(()=>{
            this.fetchData();
        },1500)
    }

    fetchData(){
        searchAccounts({name:this.searchKey}).then(result => {
            console.log(result);
            
            this.accounts=result;
        }).catch((error) => {
            console.error(error)
        })
    }
}