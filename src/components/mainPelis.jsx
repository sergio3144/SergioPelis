import React, {useEffect, useState} from 'react'
import { BiSolidSkipNextCircle } from 'react-icons/bi'
import { BiSolidSkipPreviousCircle } from 'react-icons/bi'
import { SpinnerDotted } from 'spinners-react'

function Main() {
  const [peliculas, setPeliculas] = useState([]);
  let [page, setPage] = useState(1)
  const [loadingPelis, setLoadingPelis] = useState(false)
  useEffect(() => {
    moviesPopular()
  }, [])


  const moviesPopular = async () => {
    setLoadingPelis(true)
    try {
      const API_POPULAR = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3efe4e4340a82e91705508dc10701c4e&page=${page}`);
      const data = await API_POPULAR.json();
      setPeliculas(data.results)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    setLoadingPelis(false)
  }

  const nextFuncion = () => {
    if(page < 1000) {
      setPage( page += 1);
      moviesPopular()
    }
  }

  const prevFuncion = () => {
    setPage(page -= 1);
    moviesPopular()
  }
  return (
    <>
    
    <div className='container'>
      <h1 className='container__title'>Peliculas</h1>
      <div className="container-pelis__view">
        { loadingPelis ? (<div className='spinner'>
            <SpinnerDotted color='white' size={100}/>
          </div> ) : (peliculas.map((poster) => 
              <img key={poster.title} className='container-pelis__img' src={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`} alt="poster"/>
          ))
        }
      </div>
      <div className="container__pagination">
        {page === 1 ? <BiSolidSkipPreviousCircle onClick={prevFuncion} pointerEvents='none' color='white' opacity={.5} cursor='pointer' size={60}/> : <BiSolidSkipPreviousCircle onClick={prevFuncion} color='white' cursor='pointer' size={60}/>}
        <BiSolidSkipNextCircle onClick={nextFuncion} color='white' cursor='pointer' size={60}/>
      </div>
    </div>
    </>
  )
}

export { Main }
