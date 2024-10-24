import { api, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
import FirstName from '@salesforce/schema/Contact.FirstName';

export default class NavigateToHome extends NavigationMixin(LightningElement) {
    //1. This function helpful for navigate to home
    handleNavigateToHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }

     //2. This function helpful for navigate to home
     handleNavigateToChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }

    //3. Navigate to new Record
    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    //4. Navigate to new Record with default values
    navigateToNewRecordWithDefault(){
        //Always pass as an object
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Maya',
            LastName: 'Tata'
        })

        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state:{
                defaultFieldValues: defaultValues,
            }
        })
    }

    //5. Navigate to List View
    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state:{
                filterName: 'Recent',
            }
        })
    }

    //6. Navigate to record page in view & edit Mode
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Contact',
                recordId: '003dM000006nbv4QAA',
                actionName: 'view'
            }
        })
    }

    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                objectApiName: 'Contact',
                recordId: '003dM000006nbv4QAA',
                actionName: 'edit'
            }
        })
    }

    //7. Navigate to another Tab
    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Comp_context_Toast'
            }
        })
    }

    //8. Navigate to Related Record
    navigateToRelatedRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '001dM00000KtoALQAZ',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts', //Child always be plural
                actionName: 'view'
            }
        })
    }

    //8. Navigate to External web page
    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               url: 'https://www.salesforce.com'
            }
        })
    }

    //9. Navigation to same LWC page(***Important)
    navigateToLwcPage(){
        var anotherPage = {
            componentDef: 'c:navigateToFiles',
            attributes: {
                //Data to pass
                FirstName: 'Sagar'
            }
        }


        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               url: '/one/one.app#'+btoa(JSON.stringify(anotherPage))
            }
        })
    }

     //8. Navigate to VF page
     navigateToVfPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               url: '/apex/navigateVfPage'
            }
        }).then((generatedUrl) => {
            console.log(generatedUrl);
            
            window.open(generatedUrl);
        })
    }

}