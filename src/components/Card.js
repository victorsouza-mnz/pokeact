import React from "react";

const Card = ({name, type }) => {
    
    return (
        <div className="bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src= {`https://img.pokemondb.net/sprites/home/normal/${name}.png`} alt = "Charmander" />
            <div>
                <h2>{name}</h2>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default Card