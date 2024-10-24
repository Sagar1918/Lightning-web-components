import { LightningElement, track } from 'lwc';

export default class QuizApp extends LightningElement {

    selectedAnswers = {};

    correctAnswers = 0;
    isSubmitted = false;

    @track quizQuestions = [
        {
            id: 'Question 1',
            question: 'Which one of the following is not an valid lwc file ?',
            answers: {
                a:'.svg',
                b: '.apex',
                c: '.js'
            }
        },
        {
            id: 'Question 2',
            question: 'Which one of the following is not a directive ?',
            answers: {
                a:'for:each',
                b: 'if:true',
                c: '@track'
            }
        }
    ]

get allValuesSelected(){
    return !(Object.keys(this.selectedAnswers).length === this.quizQuestions.length);
}

    changeHandler(event){
        console.log("name "+ event.target.name);
        console.log("value "+ event.target.value);
        const {name, value} = event.target;

        this.selectedAnswers = {...this.selectedAnswers, [name] : value};
    }
    
    submitHandler(event){
        event.preventDefault();
        let correctAns = this.quizQuestions.filter(item => this.selectedAnswers[item.id] === item.correctAnswers);
        this.correctAnswers = correctAns.length;
        this.isSubmitted = true;
    }

    resetHandler(){
        this.selectedAnswers = {};
        this.correctAnswers = 0;
    }
}