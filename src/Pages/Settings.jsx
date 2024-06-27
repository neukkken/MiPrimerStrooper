function setDifficulty(Difficulty){
    if(Difficulty == 'Facil'){
        localStorage.setItem('difficulty', 5)
    }else if(Difficulty == 'Medio'){
        localStorage.setItem('difficulty', 3)
    }else if(Difficulty == 'Dificil'){
        localStorage.setItem('difficulty', 1)
    }

    console.log(localStorage.getItem('difficulty'))
}

export default function Settings (){
    return (
        <>
            <h1>Seleccione la dificultad que desea</h1>
            <button onClick={() => (setDifficulty('Facil'))}>Facil(5 seg)</button>
            <button onClick={() => (setDifficulty('Medio'))}>Medio(3 seg)</button>
            <button onClick={() => (setDifficulty('Dificil'))}>GOD MODE(1 seg)</button>
            <br />
            <h3>Por defecto viene el dificultad Media</h3>
        </>
    )
}