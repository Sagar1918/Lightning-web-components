import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class WireGetPickValRecordTypes extends LightningElement {
    ratingOptions=[];
    industryOptions=[];
    selectedRating;
    selectedIndustry;

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo;

    @wire(getPicklistValuesByRecordType, {objectApiName: ACCOUNT_OBJECT, 
        recordTypeId:'$objectInfo.data.defaultRecordTypeId'
    }) 
    pickListHandler({data, error})
    {
        if(data)
        {
            console.log(data);
            
            const result = data.picklistFieldValues;
            this.ratingOptions = this.pickListGenerator(result.Rating);
            this.industryOptions = this.pickListGenerator(result.Industry);
        }
        else if(error)
        {
            console.error(error);
        }
    }

    pickListGenerator(data){
        return data.values.map(item => ({
            "label": item.label, "value": item.value
        }))
    }

    handleChange(event){
        const{name, value} = event.target;
        if(name === 'Rating'){
            this.selectedRating = value;
        }
        else if(name === 'Industry'){
            this.selectedIndustry = value;
        }
    }
}