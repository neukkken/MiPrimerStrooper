import { useState } from "react"

export default function Scores(){

    const [scores, setScores] = useState(localStorage.getItem('Scores'))
    let scoreArray = []

    if(scores !== null){
        scoreArray = scores.split(',')
    }
    
    const showScores = scoreArray.map((number) => 
        <li>{number}</li>   
    )
    
    function compare(a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
            
        return 0;
    }
        
    showScores.sort(compare)

    if(scores == null){
        return (
            <>
                <h1>No has jugado :/</h1>
            </>
    
        )
    }else{
        return (
            <>
                <h1>Ultimos puntajes</h1>
                <ul>{showScores}</ul>
            </>
    
        )
    }
    
    
}