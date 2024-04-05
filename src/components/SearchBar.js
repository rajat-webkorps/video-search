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
            <h2 style={{ textAlign: "center" }}>
                <img
                    style={{ width: '200px', height: '100px', justifyContent: 'center' }}
                    src='https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg'
                    alt="youtube logo"
                />
                Hello
            </h2>
            <div className='search-bar ui segment'>
                <form onSubmit={handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={handleChange} name='video-search' type="text" placeholder="Search.." />
                    </div>
                </form>
            </div>
        </>
    );
};

export default SearchBar;


