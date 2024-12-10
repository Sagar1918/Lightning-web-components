import { LightningElement } from 'lwc';

export default class SpreadParent extends LightningElement {
    parentData = {
        name: 'Sagar',
        age: 26,
        gender: 'Male',
        location: 'USA',
        onclick: this.updateAge.bind(this),
    }

    updateAge(){
        this.parentData = {
            ...this.parentData,
            age: this.parentData.age + 1
        }
    }
}