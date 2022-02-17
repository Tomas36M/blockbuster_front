import React from 'react'
import { UseMovieContext } from '../../context/MovieContext'

const Card = ({
    id,
    title,
    description,
    image,
    likes
}) => {

    const { deleteMovie, updateMovie } = UseMovieContext();

    return (
        <>
            <div className='container-image'>
                <img src={image} alt="movie-img" />
                <div className='conteiner-hover'>
                    <div className='text-container'>
                        <h4>{title}</h4>
                        <br />
                        <p>{description}</p>
                    </div>
                    <div className="conteiner-hover-button">
                        <button type="button" className="btn btn-danger" onClick={() => {
                            deleteMovie(id);
                        }}>Delete</button>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            const body = {likes: likes + 1}
                            updateMovie(id, body)
                        }}>Like {likes}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card