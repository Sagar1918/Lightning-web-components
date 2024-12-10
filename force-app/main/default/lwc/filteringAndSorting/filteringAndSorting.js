import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/FilteringInLwc.getContacts';

export default class FilteringAndSorting extends LightningElement {
    headings=['Id','Name','Email','Title'];
    fullTableData=[];
    filteredData=[];
    timer;
    //Giving default value
    filterBy='Name';
    sortedBy='Name';
    sortedDirection='asc';

    @wire(getContacts)
    contactHandler({data,error}){
        if(data){
            console.log(data);
            this.fullTableData=data;
            //On load we are sorting the data
            this.filteredData=[...this.sortBy(data)];
        }
        if(error){
            console.log(error);
            
        }
    }


    //This handler works filter by options
    filterByHandler(event){
        this.filterBy = event.target.value;
    }

    //Combo-box options
    get FilterByOptions(){
        return[
            {label:'All', value:'All'},
            {label:'Id', value:'Id'},
            {label:'Name', value:'Name'},
            {label:'Email', value:'Email'},
            {label:'Title', value:'Title'},
        ]
    }


    //This filter handler is working by taking the input from user
    filterHandler(event){
        const{value} = event.target;
        window.clearTimeout(this.timer);

        if(value){
            this.timer = window.setTimeout(()=>{
                this.filteredData = this.fullTableData.filter(eachObj => { 
                    if(this.filterBy=='All'){
                        return Object.keys(eachObj).some(key=>{
                            return eachObj[key].toLowerCase().includes(value);
                        })
                    }
                    else{
                        //This filter works by only selected field
                        const val = eachObj[this.filterBy] ? eachObj[this.filterBy] : '';
                        return val.toLowerCase().includes(value);
                    }
                    
                    //Filtering logic by all key values
                    //Object.keys(eachObj) = ['Id','Name','Email','Title'];
                    // return Object.keys(eachObj).some(key=>{
                    //     return eachObj[key].toLowerCase().includes(value);
                    // })
                })
            },500)
        }
        else{
            this.filteredData=[...this.fullTableData];
        }
    }

    //Sorting Handler
    sortHandler(event){
        this.sortedBy=event.target.value;
        this.filteredData= [...this.sortBy(this.filteredData)];
    }

    //Sorting logic
    sortBy(data){
        const cloneData = [...data];
        cloneData.sort((a,b)=>{
            if(a[this.sortedBy] === b[this.sortedBy]){
                return 0;
            }
            return this.sortedDirection === 'desc' ?
            a[this.sortedBy] > b[this.sortedBy] ? -1 : 1:
            a[this.sortedBy] < b[this.sortedBy] ? -1 : 1
        })
        return cloneData;
    }
}