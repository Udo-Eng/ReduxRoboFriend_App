import React from 'react';


const SearchBox = ({ onSearch, searchTerm }) => {


    return (
        <div >
            <input type='search'
                placeholder='Search robots'
                className='pa3 ba bg--green  bg-lightest-blue heading'
                value={searchTerm}
                onChange={onSearch}
            >
            </input>
        </div>
    )
}

export default SearchBox;
