import React from 'react'



const searchBox = ({searchChange}) => {
    return (
        <div className = "pa2">
            <input style = {{outline: "none"}} className = "pa3 ba b--green bg-lightest-blue" 
            placeholder = "Search Pokemons" 
            type="text"
            onChange = {searchChange}
            />

        </div>
    )
}


export default searchBox