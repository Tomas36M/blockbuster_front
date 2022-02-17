import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios';

const MovieContext = createContext();

const MovieProvider = (props) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');

    const baseUrl = 'https://blockbuster-sequelize.herokuapp.com/movies'

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredMovies = movies && movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    const fetchData = async () => {
        await axios.get(baseUrl)
        .then((response) => {
            console.log(response.data);
            setMovies(response.data)
            setLoading(false)
        })
        .catch((error) => {
            setError(error)
            console.log(error);
        })
    };

    const deleteMovie = (id) => {
        const desicion = prompt('Are you sure you want to delete this movie? YES or NO').toLowerCase();
        if (desicion === 'yes') {
            axios.delete(`${baseUrl}/${id}`)
                .then(() => {
                    fetchData();
                    alert(`La pelicula con id ${id}, se elimino de forma exitosa`);
                })
                .catch((error) => {
                    alert(error)
                })
        } else {
            console.log('No has eliminado la pelicula');
        }
    }

    const postMovie = (data) => {
        axios.post(`${baseUrl}`, data)
            .then((response) => {
                console.log(response.data);
                fetchData();
                alert('La pelicula se a agregado a la lista!');
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    const updateMovie = async (id, body) => {
        await axios.patch(`${baseUrl}/${id}`, body)
            .then((response) => {
                console.log(response);
                fetchData();
            })
            .catch((error) => {
                alert(error);
            })
    }

    useEffect(() => {

        fetchData();

    }, []);

    const value = {
        movies,
        filteredMovies,
        handleChange,
        loading,
        error,
        deleteMovie,
        updateMovie,
        postMovie,
    }

    return (
        <MovieContext.Provider value={value} {...props} />
    )
}

const UseMovieContext = () => {
    const context = useContext(MovieContext);
    return context;
}

export {
    MovieProvider,
    UseMovieContext
}