import { LightningElement, wire } from 'lwc';
import { getRelatedListCount } from 'lightning/uiRelatedListApi';

export default class WireGetRelatedListCount extends LightningElement {
    relatedData;

    /**This adapter is useful if we want to know the related records count */
    @wire(getRelatedListCount, {
        parentRecordId:'001dM000003N5AKQA0', //Account ID
        relatedListId:'Contacts'
    })listCountHandler({data, error}){
        if(data){
            console.log(data);
            this.relatedData = data;
        } else if(error){
            console.log(error);
            
        }
    }

}