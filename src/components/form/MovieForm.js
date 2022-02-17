import React from 'react'
import UseForm from '../../hooks/UseForm'
import { UseMovieContext } from '../../context/MovieContext'

const MovieForm = () => {

    const { postMovie } = UseMovieContext();
    const { input, handleInputChange, handleSubmit } = UseForm(postMovie, {})

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='Title' value={input.title} onChange={handleInputChange} />
                <input type='text' name='description' placeholder='Description' value={input.description} onChange={handleInputChange} />
                <input type='text' name='image' placeholder='Image-Url' value={input.image} onChange={handleInputChange} />
            </form>
        </div>
    )
}

export default MovieForm