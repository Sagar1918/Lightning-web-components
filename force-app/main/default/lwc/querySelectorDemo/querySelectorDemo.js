import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {
    fetchHandler(){
        const ele = this.template.querySelector('h1');
        console.log(ele.innerText);
        
    }
}