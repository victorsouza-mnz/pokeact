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
                        type = {pokemons[i].type} 
                        />
                    )
                })
            }
        </div>
    )
}

export default Cardlist