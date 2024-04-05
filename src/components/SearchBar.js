import React, { useState } from "react";

const SearchBar = ({ handleFormSubmit }) => {
    const [term, setTerm] = useState('');

    const handleChange = event => {
        setTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        handleFormSubmit(term);
    };

    return (
        <>
            <div className='search-bar ui segment'>
                <form onSubmit={handleSubmit} className='ui form'>
                    <div className='field'>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Link Type
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item">Youtube Video</p>
                                <p className="dropdown-item">Youtube Channel</p>
                            </div>
                        </div>
                        <input className="form-control form-control-lg col-sm-10" type="text" onChange={handleChange} name='video-search' placeholder="Enter Link" />
                        
                    </div>
                </form>
            </div>
        </>
    );
};

export default SearchBar;


