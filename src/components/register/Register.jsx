import './register.css'
const Register = () => {
  return (
    <main className='container__register'>
    <section className='section__form'>
        <form className='formulario__register' >
            <label className='label__register'>Correo electronico</label>
            <input type="email" className='input__register' placeholder='Usuario@register.com'/>

            <label className='label__register'>Usuario</label>
            <input type="text" className='input__register' placeholder='John Doe'/>

            <label className='label__register'>Contraseña</label>
            <input type="password" className='input__register'/>

            <button className='btn__register'>Entrar</button>

        </form>
    </section>
    <section className='section__register'>
    </section>
  </main>
  )
}

export default Register
