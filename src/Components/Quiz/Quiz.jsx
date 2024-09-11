import { useState, useEffect } from "react"
import questions from '../../questions'
import Answer from "../Answer/Answer";
import Summary from "../Summary/Summary";


export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([])
    const selectedQuestionIndex = userAnswers.length;

    const quizIsOver = selectedQuestionIndex === questions.length;

    function handleAnswerSelect(answer) {
        setUserAnswers((prevState) => [...prevState, answer])
        // console.log(userAnswers)
    }

    if (quizIsOver) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    }
    let shuffledAnswers = questions[selectedQuestionIndex].answers;
    shuffledAnswers.sort(() => Math.random() - 0.5);
    return (
        <main id="quiz">
            <div id="question">
                <progress value={100} max={1000} />
                <h2 id="question-overview">
                    {questions[selectedQuestionIndex].text}
                </h2>

            </div>
            <Answer answersList={shuffledAnswers} onSelect={handleAnswerSelect} />
        </main>
    )
}