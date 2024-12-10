import { LightningElement } from 'lwc';

export default class LwcRefsDemo extends LightningElement {
    submitHandler(){
        const nameVal = this.refs.nameRef.value;
        const ageVal = this.refs.ageRef.value;

        console.log(nameVal);
        console.log(ageVal);
        
        this.refs.responseRef.innerHTML = `Submitted name is ${nameVal} and age is ${ageVal}`

    }
}