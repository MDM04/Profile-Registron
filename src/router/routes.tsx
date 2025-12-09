import { Route, Routes } from "react-router-dom"
import { Registron } from "../pages/Registron"

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Registron/>}/>
        </Routes>    )
}