localStorage.setItem('difficulty', 5)

export default function Home(){
    return(
        <>
            <a href="/play">Play</a>
            <a href="/scores">Score</a>
            <a href="/settings">Settings</a>
            <a href="/help">Help</a>
        </>
    )
}