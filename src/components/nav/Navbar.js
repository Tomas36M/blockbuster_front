import React from 'react'
import UseForm from '../../hooks/UseForm'
import { UseMovieContext } from '../../context/MovieContext'

const Navbar = () => {

    const { postMovie, handleChange } = UseMovieContext();

    const { input, handleInputChange, handleSubmit } = UseForm(postMovie, {})

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <img className='logo' src='https://d1.awsstatic.com/case-studies/EMEA/Blockbuster%20logo.cd30e3e6ba3664ae51e0495ee3b5c57085d43b05.png' alt='logo' />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto nav-items">
                        <li>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
                        </li>
                        <li>
                            <button className='btn btn-secondary ml-1' data-bs-toggle="modal" data-bs-target="#exampleModal">Post Movie</button>
                        </li>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Post your favorite movie</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="modal-body">
                                            <input type='text' name='title' placeholder='Title' value={input.title} onChange={handleInputChange} /> <br />
                                            <input type='text' name='description' placeholder='Description' value={input.description} onChange={handleInputChange} /> <br />
                                            <input type='text' name='image' placeholder='Image-Url' value={input.image} onChange={handleInputChange} /> <br />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div >
        </nav >
    )
}

export default Navbar