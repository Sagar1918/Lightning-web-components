import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export default class BookApp extends LightningElement {
    query='';
    books=[]
    timer;

    connectedCallback(){
        console.log('From connectedcallback Call');
        this.fetchBookData();
    }
 
    fetchBookData(){
        fetch(BOOK_URL+this.query)
        .then(response=>response.json())
        .then(data=>{
        
            this.books =  data ? this.formatData(data) :[];

             console.log("this.books",  this.books )
        })
        .catch(error=>console.error(error))
    }

    //Search Handler
    fetchBooksHandler(event){
        this.query = event.target.value
        window.clearTimeout(this.timer)
        this.timer= setTimeout(()=>{
            console.log('From Handler Call');
            this.fetchBookData()            
        }, 1000)
    }

    //Shortening the code
    formatData(data){
        console.log(data)
        let books =  data.items.map(item=>{
            let id = item.id
            let thumbnail = item.volumeInfo.imageLinks && (item.volumeInfo.imageLinks.smallThumbnail || item.volumeInfo.imageLinks.thumbnail)
            let title = item.volumeInfo.title
            let publishedDate = item.volumeInfo.publishedDate
            let averageRating = item.volumeInfo.averageRating ||'NA'
            return {id, thumbnail, title, publishedDate, averageRating}
    
        })
        return books
    }
}