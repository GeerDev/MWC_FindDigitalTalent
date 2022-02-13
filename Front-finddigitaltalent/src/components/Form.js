import { Link } from 'react-router-dom'
export const Form = () => {
    return (
      <div className="form animate__animated animate__fadeInLeft d-flex flex-column align-items-center justify-content-center">
      <div className="title mt-2">Bienvenid@</div>
      <div className="subtitle text-center">Por favor rellena estos datos personales</div>
      <div className="input-container">
        <input id="firstname" className="input" type="text" placeholder="Nombre completo" />
      </div>
      <div className="input-container">
        <input id="lastname" className="input" type="text" placeholder="Correo electrónico" />
      </div>
      <div className="input-container">
        <input id="email" className="input" type="text" placeholder="Pais" />
      </div>
      <div className="input-container">
        <input id="email" className="input" type="text" placeholder="Ciudad de residencia" />
      </div>
      <div className="input-description">
        <textarea id="email" className="input" type="text" placeholder="Una breve descripción..."/>
      </div>
      {/* <div className="input-error">
        Hola
      </div> */}
      <Link to="/Registro2">
      <button type="text" className="submit mb-2">Ya solo falta el último paso</button>
      </Link>
    </div>
    )
  }
  
  