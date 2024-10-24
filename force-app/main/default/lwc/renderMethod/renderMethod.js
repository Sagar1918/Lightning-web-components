import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderTemplate.html'


export default class RenderMethod extends LightningElement {
    isSelectedBtn='';

    connectedCallback(){}

    render(){
       return this.isSelectedBtn === 'Signin' ? signinTemplate : 
       this.isSelectedBtn === 'Signup' ? signupTemplate : renderTemplate
    }

    handleClick(event){
        this.isSelectedBtn = event.target.label;
    }
}