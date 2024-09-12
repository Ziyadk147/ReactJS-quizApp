import { useState, useEffect, useCallback } from "react"
import questions from '../../questions'
import Answer from "../Answer/Answer";
import Summary from "../Summary/Summary";
import Timer from "../Timer/Timer";


export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([])
    const selectedQuestionIndex = userAnswers.length;

    const quizIsOver = selectedQuestionIndex === questions.length;

    const handleAnserSelect =  function handleAnswerSelect(answer) {
        setUserAnswers((prevState) => [...prevState, answer])
    }

    const handleTimeout = useCallback( () => handleAnswerSelect(null)  , [handleAnswerSelect] )


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
                
                <Timer totalTime={5000} onTimeout={handleTimeout} />

                <h2 id="question-overview">
                    {questions[selectedQuestionIndex].text}
                </h2>

            </div>
            <Answer answersList={shuffledAnswers} onSelect={handleAnswerSelect} />
        </main>
    )
}