import { LightningElement, wire } from 'lwc';
import { getRelatedListsInfo } from 'lightning/uiRelatedListApi';

export default class WireGetRelatedListInfo extends LightningElement {
    relatedData;

    @wire(getRelatedListsInfo, {
        parentObjectApiName:'Account',
    })
    listInfoHandler({data, error}){
        if(data){
            console.log("Related Data--->"+JSON.stringify(data));
            this.relatedData = data.relatedLists;
        }
        else if(error){
            console.log(error);
            
        }
       
    }
}