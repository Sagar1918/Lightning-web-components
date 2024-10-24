import { LightningElement, wire } from 'lwc';
import fetchData from '@salesforce/apex/sortingController.fetchData';

//We are declaring the fields because of const keyword, we are not able to declare inside
const fields = [
    {label:'Id', fieldName:'Id', type:'text', sortable: true},
    {label:'Name', fieldName:'Name', type:'text', sortable: true},
    {label:'Amount', fieldName:'Amount', type:'number', sortable: true},
];

export default class ClientSideSorting extends LightningElement {
    opportunityData = [];
    columns = fields;
    sortedDirection;
    sortedBy;

    @wire(fetchData)
    wiredData({data,error}){
        if(data){
            this.opportunityData = data;
            
        }
        else if(error){
            console.log('Error------>'+JSON.stringify(error));
            
        }
    }

    //Sorting Handler
    handleSort(event){
        console.log('event-->'+event);
        const{fieldName, sortDirection} = event.detail;
        this.sortedBy = fieldName;
        this.sortedDirection = sortDirection;

        //calling the function
        this.sortData(this.sortedBy, this.sortedDirection);
    }

    //Sorting logic
    sortData(field, direction){

        //For not loosing original data we are assigning it into a different variable
        let sortResult = [...this.opportunityData];

        //Sorting the array
        sortResult.sort((a,b) =>{
            let valueA = a[field];
            let valueB = b[field];

            if(typeof valueA === 'string' && typeof  valueB === 'string'){
                valueA = valueA.toLowerCase();
                valueB = valueB.toLowerCase();
            }

            if(valueA > valueB){
                return direction === 'asc' ? 1 : -1;
            }
            else if(valueA < valueB){
                return direction === 'asc' ? -1 : 1;
            }

            //if they are equal, don't change anything
            return 0;
        });

        this.opportunityData = sortResult;
    }
}