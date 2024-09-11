import quizLogo from "../../assets/quiz-logo.png"

export default function Header(){
    return ( 
        <header className="header">
            <img src={quizLogo} alt="" />
            <h1>ReactQuiz</h1>
        </header>
    )
}