import { LightningElement } from 'lwc';
import carouselImages from '@salesforce/resourceUrl/carousel';

export default class CarouselWrapper extends LightningElement {
    slides=[
        {
            image:`${carouselImages}/carousel/photo1.jpg`,
            heading:'Caption One',
            description:'Image1 of Carousel'
        },
        {
            image:`${carouselImages}/carousel/photo2.jpg`,
             heading:'Caption Two',
            description:'Image2 of Carousel'
        },
        {
            image:`${carouselImages}/carousel/photo3.jpg`,
            heading:'Caption Three',
            description:'Image3 of Carousel'
        },
    ]
}