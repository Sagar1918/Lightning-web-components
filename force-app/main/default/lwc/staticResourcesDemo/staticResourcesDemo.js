import { LightningElement } from 'lwc';
import USER_IMG from '@salesforce/resourceUrl/user_logo';
import SF_IMG from '@salesforce/resourceUrl/salesforce_logo';


export default class StaticResourcesDemo extends LightningElement {
    user_image = USER_IMG;
    salesforce_image = SF_IMG;
}