import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'

function Modal( {
  image_poster, 
  title_poster, 
  date_poster, 
  sipnosis_poster,
  event_click,
  lenguaje_poster
} ) {
  return (
    <>
      <div className='modal'>
        <div className='modal__icon-delete'>
          <AiFillCloseCircle size={30} cursor={'pointer'} onClick={event_click}/>
        </div>
        <img className='modal__image-poster' src={image_poster} alt="prueba" />
        <h1 className='modal__title'>Titulo: <span className='title__response'>{title_poster}</span></h1>
        <h1 className='modal__title'>Fecha de lanzamiento: <span className="title__response">{date_poster}</span></h1>
        <h1 className='modal__title'>Lenguaje: <span className="title__response">{lenguaje_poster}</span></h1>
        <p className='modal__title'>Sinopsis: <span className='title__response title__response--sinopsis'>{sipnosis_poster}</span></p>
      </div>
    </>
  );
}

export { Modal };