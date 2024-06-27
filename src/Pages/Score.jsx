import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CalcScore(CorrectWords, MissWords){
    let score = 0

    for(let i = 0; i < CorrectWords; i++){
        score = score + 5
    }

    for(let i = 0; i < MissWords; i++){
        score = score - 3
    }

    return score
}

let scores = []

export default function Score(){
    const navigate = useNavigate()
    let correctWord = localStorage.getItem('c')
    let missWord = localStorage.getItem('m')

    const [score, setScore] = useState(CalcScore(correctWord, missWord))

    if(score < 0){
        setScore(0)
    }else{
        scores.push(score)
    }

    function PlayAgain(){
        navigate('/play')
    }

    localStorage.setItem('Scores', scores)
    console.log(localStorage.getItem('Scores'))

    return(
        <>
            <h1>Puntaje: {score}</h1>
            <h2>Correctas: {correctWord}</h2>
            <h2>Incorrectas: {missWord}</h2>

            <button onClick={() => (PlayAgain())}>Jugar De Nuevo</button>
        </>
    )
}