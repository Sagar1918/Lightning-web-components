import { api, LightningElement } from 'lwc';

export default class P2cChildPrimitive extends LightningElement {
    @api message;
    @api cardHeading;
}