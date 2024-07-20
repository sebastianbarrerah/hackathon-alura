import { useForm } from 'react-hook-form';
import './register.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Register = () => {

  const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate()

    const handleRegister = (data) => {
      console.log(data);
      reset()
      Swal.fire({
        title: "Te has registrado con exito",
        text: "Ahora por favor inicia sesión",
        icon: "success"
      });
      navigate("/")
    }

  return (
    <main className='container__register'>
    <section className='section__form'>
        <form className='formulario__register' onSubmit={handleSubmit(handleRegister)} >
            <label className='label__register'>Correo electronico</label>
            <input type="email" className='input__register' placeholder='Usuario@register.com' {...register("email")}/>

            <label className='label__register'>Usuario</label>
            <input type="text" className='input__register' placeholder='John Doe' {...register("nameUser")}/>

            <label className='label__register'>Contraseña</label>
            <input type="password" className='input__register' {...register("password")}/>

            <button className='btn__register'>Entrar</button>
        </form>
    </section>
    <section className='section__register'>
    </section>
  </main>
  )
}

export default Register
