import { useEffect } from "react"

export default function Answer({ answersList , onSelect }) {
    

    return (
        <div id="answers">
            {answersList.map((answer) => (
                <div className="answer">
                    <button onClick={ () => {onSelect(answer)} }>
                        {answer}
                    </button>
                </div>
            ))}
        </div>
    )

}