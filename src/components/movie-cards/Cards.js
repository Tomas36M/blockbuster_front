import React from 'react'
import { UseMovieContext } from '../../context/MovieContext'
import Card from './Card'

const Cards = () => {

    const {movies, filteredMovies} = UseMovieContext();

    return (
        <div className='container'>
            {movies &&
                <div className='row'>
                    {filteredMovies && filteredMovies.map((element) => (
                        <div className='col-xs-12 col-sm-6 col-md-3' key={element.id}>
                        <Card 
                            id={element.id}
                            title={element.title}
                            description={element.description}
                            image={element.image}
                            published={element.published}
                            likes={element.likes}
                        />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Cards