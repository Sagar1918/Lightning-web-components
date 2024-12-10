import { api, LightningElement } from 'lwc';

const CARD_VISIBLE = 'slds-show';
const CARD_HIDDEN = 'slds-hide';

const DOT_ACTIVE = 'dot active';
const DOT_INACTIVE = 'dot';
export default class CarouselChild extends LightningElement {
    slides=[];
    slideIndex=1;

    @api 
    get slidesData(){
        return this.slides;
    }

    //we are setting the data coming from parent & modifying the data
    set slidesData(data){
        this.slides = data.map((item,index) => {
            return index === 0 ? {...item, slideIndex: index+1, cardClasses: CARD_VISIBLE, dotClasses: DOT_ACTIVE} 
            : {...item, slideIndex: index+1, cardClasses: CARD_HIDDEN, dotClasses: DOT_INACTIVE};
        })
    }

    backSlide(){
        let slideIndex  = this.slideIndex - 1
        this.slideSelectionHandler(slideIndex)
    }
    forwardSlide(){
       let slideIndex  = this.slideIndex +1
       this.slideSelectionHandler(slideIndex)
    }

    slideSelectionHandler(id){
        if(id > this.slides.length){
            this.slideIndex = 1
        } else if(id < 1){
            this.slideIndex = this.slides.length
        } else {
            this.slideIndex = id
        }
        this.slides = this.slides.map(item=>{
            return this.slideIndex === item.slideIndex ? {
                ...item,
                cardClasses:CARD_VISIBLE,
                dotClases:DOT_VISIBLE
            }:{
                ...item,
                cardClasses:CARD_HIDDEN,
                dotClases:DOT_HIDDEN
            }
        })
    }
}