import React from 'react'
import { UseMovieContext } from '../../context/MovieContext';
import Cards from '../../components/movie-cards/Cards';

function Home() {

    const {loading, error} = UseMovieContext();

    return (
        <div className="home">
            {loading && loading ?
                (<h1>Is loading</h1>) :
                (<div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    {
                        <div>
                            <Cards />
                        </div>
                    }
                </div>
                )}
        </div>
    )
}

export default Home;