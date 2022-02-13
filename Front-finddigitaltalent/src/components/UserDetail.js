import { getUsers } from '../services/getUsers'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react';

export const UserDetail = () => {

  const [currentUser, setcurrentUser] = useState({})

  const { Id } = useParams();
  const navigate = useNavigate()

  useMemo ( () => getUsers().then(user => {
    const result = user.find(u => u.id === Id)
    setcurrentUser(result)
  }), [Id])
  
  const handleReturn = () => {
    navigate( -1 );
  }

  console.log(currentUser);

    return (
      <div className="row mt-5">
      <div className="col-4">
          <img 
              src= "Patata"
              alt= "Patata"
              className="img-thumbnail animate__animated animate__fadeInLeft"
          />
      </div>

      <div className="col-8 animate__animated animate__fadeIn color">
          <h3>"Patata"</h3>
          <ul className="list-group list-group-flush">
              <li className="list-group-item color2"> <b>Alter ego:</b> "Patata" </li>
              <li className="list-group-item color2"> <b>Publisher:</b> "Patata" </li>
              <li className="list-group-item color2"> <b>First Appearance:</b> "Patata" </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>"Patata"</p>

          <button
              className="btn btn-outline-danger"
              onClick={ handleReturn }
          >
              Regresar 
          </button>

      </div>

  </div>
    )
  }
  
