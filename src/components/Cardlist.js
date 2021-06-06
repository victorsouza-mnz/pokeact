import React from 'react';
import Card from './Card'

const Cardlist = ({pokemons}) => {


    return (

        <div>
            {
                pokemons.map((el, i)=>{
                    return (
                        <Card 
                        key={i} 
                        name={pokemons[i].name} 
                        weight = {pokemons[i].weight} 
                        />
                    )
                })
            }
        </div>
    )
}

export default Cardlist