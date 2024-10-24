import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track details = {
        name: 'Sagar',
        id: 12121,
        title: 'Sfdc Developer'
    }

    changeHandler(event){
        this.details.title = event.target.value;
    }

    /** Getter Example */
    users = ['sagar','shashi','Sushu'];
    num1 = 10;
    num2 = 20;

    get userName(){
        return this.users[2].toUpperCase();
    }

    get sumOfTwo(){
        return (this.num1 + this.num2);
    }
}