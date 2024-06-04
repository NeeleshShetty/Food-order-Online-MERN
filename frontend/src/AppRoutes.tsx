import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<Layout>Home Page</Layout>}/>
            <Route path='/user-profile' element={<span>User Profile</span>}/>
        </Routes>
    )
}

export default AppRoutes