import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import RegisterPage from "../pages/register/RegisterPage"
import HomePage from "../pages/home/HomePage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Registro" element={<RegisterPage/>}/>
        <Route path="/Home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default Router;
