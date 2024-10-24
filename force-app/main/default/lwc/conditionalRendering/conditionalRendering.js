import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible = false;
    password;

    companies = ['Cognizant','TCS','Amazon','Paytm'];

    ceoList = [
        {
            id: 1,
            company: 'Amazon',
            ceo: 'Jeff bezos'
        },
        {
            id:2,
            company: 'Google',
            ceo: 'Sundar'
        }
    ]

    handleClick(){
        this.isVisible = true;
    }

    changeHandler(event){
        this.password = event.target.value;
    }

    get getPassword(){
        return this.password === 'Darling';
    }
}