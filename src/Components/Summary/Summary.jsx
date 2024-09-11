import { useEffect } from "react"
import quizCompleteImg from "../../assets/quiz-complete.png"
import questions from '../../questions'

export default function Summary({ userAnswers }) {


    let answer =  userAnswers.filter( (answer , answerIndex) => answer === questions[answerIndex].answers[0] )

    const correctCount = answer.length;
    const correctPercentage = (correctCount / questions.length * 100).toFixed(0)

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="" />
            <h2>Quiz Completed</h2>

            <div id="summary-stats">
                <p>
                    <span className="number">
                        {correctPercentage}%
                    </span>
                    <span className="text">Right</span>
                </p>
                <p>
                    <span className="number">
                        {100 - correctPercentage}%
                    </span>
                    <span className="text">Wrong</span>
                </p>
            </div>
        </div>
    )

}