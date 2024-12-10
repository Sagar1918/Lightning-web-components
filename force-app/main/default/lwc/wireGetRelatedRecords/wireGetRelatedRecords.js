import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class WireGetRelatedRecords extends LightningElement {
    @api recordId;
    relatedRecords;

    @wire(getRelatedListRecords, {
        parentRecordId:'$recordId',
        relatedListId:'Contacts',
        fields:['Contact.Name', 'Contact.Id']
    })listRecordsHandler({data, error}){
        if(data){
            console.log(JSON.stringify(data));
            this.relatedRecords = data.records;
            
        } else if(error){
            console.log(error);
            
        }
    }
}