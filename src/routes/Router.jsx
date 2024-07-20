import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/login/LoginPage"
import RegisterPage from "../pages/register/RegisterPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="Registro" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default Router;
