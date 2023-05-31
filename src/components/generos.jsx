import React, { useEffect } from 'react'
import iconMovie from '../assets/film.png'

function Geners() {

  const [button, setButton] = React.useState([]);
  
  const GenersApi = async () => {
    const respuesta = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=3efe4e4340a82e91705508dc10701c4e');
    const datos = await respuesta.json();
    let objectBtns = datos.genres;
  }
  GenersApi()

  return (
    <div>
      <aside className='aside'>
        <div className='aside__logo'>
          <h1 className='aside__logo-name'>Sergio Pelis</h1>
          <img className='aside__logo-img' src={iconMovie} alt="icon-movie" />
        </div>
        <h1 className='aside__title'>Géneros</h1>
        <div className='aside__bottoms'>
          <button className='aside__bottoms-btn'>Acción</button>
          
        </div>
      </aside>
    </div>
  )
}

export {Geners}
