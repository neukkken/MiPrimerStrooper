import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Play from "./Pages/Play"
import Score from "./Pages/Score"
import Settings from "./Pages/Settings"
import Scores from "./Pages/Scores"

function AppRoutes (){
    let Routes = useRoutes([
        {path: "/", element: <Home/>},
        {path: "/play", element: <Play/>},
        {path: "/score", element: <Score/>},
        {path: "/settings", element: <Settings/>},
        {path: "/scores", element: <Scores/>}
    ])

    return Routes
}

export default function App(){
    return(
        <>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </>
    )
}