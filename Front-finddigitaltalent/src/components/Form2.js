import { Link } from 'react-router-dom'
export const Form2 = () => {
    return (
      <div className="form animate__animated animate__fadeInRight d-flex flex-column align-items-center justify-content-center">
      <div className="subtitle text-center">Los últimos detalles</div>
      <div className="input-container">
      <select name="cars" id="cars" className="input-select">
      <option disabled selected>Selecciona sector</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
      </select>
      </div>
      <div className="input-container">
        <input id="firstname" className="input" type="text" placeholder="Años de experiencia" />
      </div>
      <div className="input-container">
        <input id="firstname" className="input" type="text" placeholder="Habilidades" />
      </div>
      {/* <div className="input-error">
        Hola
      </div> */}
      <Link to="/Participantes">
      <button type="text" className="submit mb-2">Enviar</button>
      </Link>
    </div>
    )
  }
  