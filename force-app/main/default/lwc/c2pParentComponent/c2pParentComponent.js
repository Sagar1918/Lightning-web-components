import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    msg;

    handleShow(){
        this.showModal = true;
    }

    handleClose(event){
        this.showModal = false;
        this.msg = event.detail.msg;
    }
}