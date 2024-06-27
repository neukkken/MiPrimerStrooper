import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const WordColor = ["Rojo", "Verde", "Azul", "Negro", "Amarillo"]
const HexColor = ["#FF2D00", "#29FF00", "#0006FF", "#000", "#F9FF00"]

function randInt(max){
    return Math.floor(Math.random() * max)
}

function getRandomColor(){
    return WordColor[randInt(WordColor.length)]
}

function getRandomHex(){
    return HexColor[randInt(HexColor.length)]
}



export default function Play(){

    const [colorWord, setColorWord] = useState(getRandomColor())
    const [colorHex, setColorHex] = useState(getRandomHex())
    const [correctWord, setCorrectWord] = useState(0)
    const [missWord, setMissWord] = useState(0)
    const navigate = useNavigate()

    const Timer = ({InitialTime, OnTimeUp}) =>{
        const [time, setTime] = useState(InitialTime)

        useEffect(() => {
            if(time > 0){
                const timerId = setTimeout(() => {
                    setTime(time - 1)
                }, 1000)

                return () => clearTimeout(timerId)
            }else{
                OnTimeUp(() => setTime(InitialTime))
            }
        }, [time, InitialTime, OnTimeUp])

        return (
            <>
                <h1>Tiempo restante: {time}</h1>
            </>
        )
    }

    let OnHandleTime = ((resetTime) => {
        setMissWord(missWord + 1)
        setColorHex(getRandomHex())
        setColorWord(getRandomColor())
        resetTime()
    })

    function checkTrue(){
        let indexHex = HexColor.indexOf(colorHex)
        let indexWord = WordColor.indexOf(colorWord)

        if(indexHex == indexWord){
            setCorrectWord(correctWord + 1)
            setColorHex(getRandomHex())
            setColorWord(getRandomColor())
        }else{
            setMissWord(missWord + 1)
            setColorHex(getRandomHex())
            setColorWord(getRandomColor())
        }
    }

    function checkFalse(){
        let indexHex = HexColor.indexOf(colorHex)
        let indexWord = WordColor.indexOf(colorWord)

        if(indexHex !== indexWord){
            setCorrectWord(correctWord + 1)
            setColorHex(getRandomHex())
            setColorWord(getRandomColor())
        }else{
            setMissWord(missWord + 1)
            setColorHex(getRandomHex())
            setColorWord(getRandomColor())
        }
    }

    if(correctWord + missWord == 20){
        navigate('/score')
    }

    useEffect(() => {
        localStorage.setItem('c', correctWord)
        localStorage.setItem('m', missWord)
    }, [correctWord, missWord])

    function Quit(){
        navigate('/')
    }

    return(
        <>
            <Timer InitialTime={localStorage.getItem('difficulty')} OnTimeUp={OnHandleTime}/>
            <h2 style={{color : colorHex}}>{colorWord}</h2> 
            <br />
            <button onClick={() => (checkTrue())}>Verdadero</button>
            <button onClick={() => (checkFalse())}>Falso</button>
            <br />
            <h1>Correctas: {correctWord}</h1>
            <h1>Incorrectas: {missWord}</h1>
            <br />
            <button onClick={() => (Quit())}>Salir</button>
        </>
    )
}