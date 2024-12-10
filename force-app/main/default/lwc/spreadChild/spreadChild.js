import { api, LightningElement } from 'lwc';

export default class SpreadChild extends LightningElement {
    @api name;
    @api age;
}