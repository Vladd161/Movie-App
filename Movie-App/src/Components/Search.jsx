import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
    //props are  read only ^
    return (
        <div className = "search">
        <div>
            <img src="search.svg" alt = "search"/>
            <input 
                type = "text"
                placeholder="Search through thounsands of movies"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                //value + onChange combo makes it so that searchbar is dynamically changing on type
            />
        </div>
        </div>
    )
}
export default Search