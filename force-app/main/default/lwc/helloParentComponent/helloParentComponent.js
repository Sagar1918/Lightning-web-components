import { LightningElement } from 'lwc';

export default class HelloParentComponent extends LightningElement {
    isChildVisible = false;

    //Method will toggle
    handleShow(){
        this.isChildVisible = !this.isChildVisible;
    }
}