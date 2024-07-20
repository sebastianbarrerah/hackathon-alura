/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import './perfil.css';

const Perfil = ({ modal, setModal }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    setModal(false); 
  };

  return (
    <div className={`modal-perfil ${modal ? 'mostrar' : 'ocultar'}`}>
      <div className="modal-content-perfil">
        <h1>Editar Perfil</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form-perfil">
          <label className="label-perfil">Email</label>
          <input className="input-perfil" {...register("email", { required: true })} />
          {errors.email && <p>Email es requerido</p>}
          
          <label className="label-perfil">Username</label>
          <input className="input-perfil" {...register("username", { required: true })} />
          {errors.username && <p>Username es requerido</p>}
          
          <label className="label-perfil">Password</label>
          <input type="password" {...register("password", { required: true })} className="input-perfil" />
          {errors.password && <p>Password es requerido</p>}
          <div className="cointainers-btn">
              <button type="submit" className="btn-perfil" >Guardar</button>
              <button type="button"  className="btn-perfil" onClick={() => setModal(false)}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
