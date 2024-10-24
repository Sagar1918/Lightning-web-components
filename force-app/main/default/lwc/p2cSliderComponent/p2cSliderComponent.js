import { api, LightningElement } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 20;

    changeHandler(event){
        this.val = event.target.value;
    }

    @api resetSlider(){
        this.val = 0;
    }
}