import React, { useState } from "react";

const SearchBar = ({ handleFormSubmit }) => {
    const [term, setTerm] = useState('');
    const [selectedItem, setSelectedItem] = useState('Select Link Type');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const handleChange = event => {
        setTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (selectedItem === 'Select Link Type') {
            alert("Please select a link type from the dropdown.");
        }
        else if (
            (selectedItem === 'Youtube Video' && term.includes('watch')) ||
            (selectedItem === 'Youtube Channel' && term.includes('com/@')) ||
            (selectedItem === 'KeyWords' && !term.includes('www.youtube.com'))
        ) {
            handleFormSubmit(term);
        }
        else {
            alert("Please enter detail same as selected dropdown.");
        }
    };

    return (
        <>
            <div className='search-bar ui segment'>
                <form onSubmit={handleSubmit} className='ui form'>
                    <div className='field'>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {selectedItem}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <p className="dropdown-item" onClick={() => handleItemClick('KeyWords')}>KeyWords</p>
                                <p className="dropdown-item" onClick={() => handleItemClick('Youtube Video')}>Youtube Video</p>
                                <p className="dropdown-item" onClick={() => handleItemClick('Youtube Channel')}>Youtube Channel</p>
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


