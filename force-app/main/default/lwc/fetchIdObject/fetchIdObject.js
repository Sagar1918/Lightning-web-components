import { LightningElement, api } from 'lwc';

export default class FetchIdObject extends LightningElement {
    //We have to use @api decorator to track the data from parent component if we use in any component
    @api recordId;
    @api objectApiName;
}