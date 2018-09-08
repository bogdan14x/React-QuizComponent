import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import { quiz_questions } from './quiz_data.json';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        };
    }

    render() {
        return(
            <div className="quiz_question">
                <QuizQuestion quiz_question = {quiz_questions[this.state.quiz_position - 1]} />
            </div>
        )
    }
}

export default Quiz