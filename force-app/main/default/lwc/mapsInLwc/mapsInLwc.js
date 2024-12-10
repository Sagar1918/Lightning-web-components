import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapController.getAccounts';

export default class MapsInLwc extends LightningElement {
    // mapMarkers are used for location pointing in map
    mapMarkers=[];
    selectedMarker
    markersTitle='Account Information'

    @wire(getAccounts)
    mapHandler({data,error}){
        if(data){
            console.log(data);
            this.formatData(data);
            
        }
        if(error){
            console.log(error);
            
        }
    }

    formatData(data){
        this.mapMarkers = data.map((item) => {
           return{ 
            location:{
                City:item.BillingCity || '',
                Country:item.BillingCountry || '',
                PostalCode:item.BillingAddress.postalCode || '',
                State:item.BillingAddress.state || '',

            },
            icon:'utility:salesforce1',
            title: item.Name,
            value: item.Name,
            description: item.description,
        }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value;
    }

    //selectedMarkerValue is an in-built property
    callMarkerHandler(event){
        this.selectedMarker = event.detail.selectedMarkerValue;
    }
}