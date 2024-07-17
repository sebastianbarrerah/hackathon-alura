import './login.css'
const Login = () => {
  return (
    <main className='container__login'>
      <form className='section__form'>
        <label className='label__login'>Correo electronico</label>
        <input type="text" className='input__login' placeholder='Usuario@login.com'/>

        <label className='label__login'>Contraseña</label>
        <input type="password" className='input__login'/>

        <button className='btn__login'>Entrar</button>
      </form>
      <section className='section__register'>
        <button className="btn__register">Registrarse</button>
      </section>
    </main>
  )
}

export default Login;
