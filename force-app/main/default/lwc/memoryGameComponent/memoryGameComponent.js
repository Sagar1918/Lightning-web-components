import { LightningElement } from 'lwc';
import FONT_AWESOME from '@salesforce/resourceUrl/fontawesome';
import {loadStyle} from 'lightning/platformResourceLoader';

export default class MemoryGameComponent extends LightningElement {
    isLibLoaded = false;
    openedCards = [];
    matchedCards=[];
    moves=0;
    showCongratulations = false;

    cards= [
        {id:1, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:2, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:3, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:4, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:5, listClass:"card", type:'cube', icon:'fa fa-cube'},
        {id:6, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:7, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:8, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:9, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:10, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:11, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:12, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:13, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:14, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:15, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:16, listClass:"card", type:'cube', icon:'fa fa-cube'},
      ]


    get gameRating(){
        let stars =  this.moves<12 ? [1,2,3]:this.moves>=13 ? [1,2]:[1]
      return this.matchedCards.length ===16 ? stars :[]
      }


    //Display the icon when we click on the card
    displayCard(event){
        let pickedCard = event.target;
        pickedCard.classList.add('open', 'show', 'disabled');
        this.openedCards = this.openedCards.concat(event.target);
        const len = this.openedCards.length;
        if(len == 2){
            this.moves = this.moves+1;
            if(this.openedCards[0].type === this.openedCards[1].type){
                this.matchedCards = this.matchedCards.concat(this.openedCards[0], this.openedCards[1]);
                //calling the matched function if both are matched
                this.matched();
            }
            else{
                this.unmatched();
            }
        }
    }

    //This function will change the matched cards colour & disable the click functionality
    matched(){
        this.openedCards[0].classList.add('matched', 'disabled');
        this.openedCards[1].classList.add('matched', 'disabled');

        this.openedCards[0].classList.remove('show','open');
        this.openedCards[0].classList.remove('show', 'open');
        this.openedCards= []; //We are emptying the openedcards array for to show the different matched cards
        if(this.matchedCards.length === 16){
            this.showCongratulations = true
        }
        
    }

    //This function will change the unmatched cards colour to red & disable the click functionality
    unmatched(){
        this.openedCards[0].classList.add('unmatched');
        this.openedCards[1].classList.add('unmatched');
        this.action('DISABLE')

        //If the 2 cards doesn't matched, it will remove the red the colour & hide the icon in 1.1 sec
        setTimeout(() => {
        this.openedCards[0].classList.remove('show', 'open', 'unmatched');
        this.openedCards[1].classList.remove('show', 'open', 'unmatched');

        this.openedCards= []; //We are emptying the openedcards array for to show the different matched cards
        this.action('ENABLE')
        }, 1100);
        
    }

    action(action){
        let cards = this.template.querySelectorAll('.card')
        Array.from(cards).forEach(item=>{
            if(action === 'ENABLE'){
                let isMatch = item.classList.contains('match')
                if(!isMatch){
                    item.classList.remove('disabled')
                }
            }
            if(action === 'DISABLE'){
                item.classList.add('disabled')
            }
        })
    }

    //Handler to reset
    resetHandler(){
        this.showCongratulations = false
        this.openedCards =[]
        this.matchedCards=[]
        this.moves=0
        let elem = this.template.querySelectorAll('.card')
        Array.from(elem).forEach(item=>{
            item.classList.remove("show", "open", "matched", "disabled")
        })
    }

    renderedCallback(){
        if(this.isLibLoaded){
            return;
        }
        else{
            loadStyle(this, FONT_AWESOME+'/fontawesome/css/font-awesome.min.css').then(() => {
                console.log('loaded Successfully');
                
            }).catch((error) => {
                console.error(error);
                
            })
            this.isLibLoaded = true;
        }
    }
}