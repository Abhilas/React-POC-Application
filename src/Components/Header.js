import React, { Fragment } from 'react';
import '../Assets/Css/Home.css';

const Header = () => {
    return (
        <Fragment>            
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Movie Cards</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="nav-item dropdown">
                        <form className="form-inline my-2 my-lg-0 pull-right">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter by
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Release Year</a>
                                <div className="dropdown-divider"></div>
                                <div className="genreDrop">Genre:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Comedy</a>
                                <a className="dropdown-item" href="#">Animated</a>
                            </div>
                        </form>
                    </div>
                    <div className="searchContainer">
                        <form className="form-inline my-2 my-lg-0 pull-right">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>
        </Fragment>        
    )
}

export default Header;