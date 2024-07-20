import { useForm } from 'react-hook-form';
import './login.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()

    const handleForm = (data) => {
      console.log(data);
      reset()
      Swal.fire({
        title: "Bienvenido",
        text: "Iniciaste sesión con exito",
        icon: "success"
      });
    }
  return (
    <main className='container__login'>
      <form className='section__form' onSubmit={handleSubmit(handleForm)}>
        <label className='label__login'>Correo electronico</label>
        <input type="text" className='input__login' placeholder='Usuario@login.com' {...register("email")}/>

        <label className='label__login'>Contraseña</label>
        <input type="password" className='input__login' {...register("password")}/>

        <button className='btn__login'>Entrar</button>
      </form>
      <section className='section__register' onClick={() => navigate('/registro')}>
        <button className="btn__register">Registrarse</button>
      </section>
    </main>
  )
}

export default Login;
