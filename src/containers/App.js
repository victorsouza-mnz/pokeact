import React, {Component} from 'react'
import Cardlist from '../components/Cardlist'
import './App.css';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'



class App extends Component {
    constructor(){
        super()
        this.state = {
            pokemons : [],
            pokemonsD : [],
            searchField : '',   
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }


    componentDidMount(){


        fetch('https://pokeapi.co/api/v2/pokemon').then(response => {
            return response.json()
        }).then(pokemons => {this.setState({pokemons: pokemons.results})})
        .then(() => {for (var i = 0; i< this.state.pokemons.length; i++){ 
            fetch(this.state.pokemons[i].url).then(response => response.json()).then(pokemonsD => {this.setState({pokemonsD: [...this.state.pokemonsD, {name: pokemonsD.name, weight: pokemonsD.weight} ]})})
        }})
        
        
    }


    render() {

        const filteredPokemons = this.state.pokemonsD.filter( (el) => {
            return el.name.toLowerCase().includes(this.state.searchField.toLowerCase()) ? true : false 
        })

        return !this.state.pokemonsD.length ?
        <div><h1>Loading</h1></div> 
        : 
        (
            <div className = 'tc'>
                <h1 className='f1 f-headline-l'>Pokeact</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                    <Cardlist pokemons = {filteredPokemons}/>
                </Scroll>
            </div>  
        )
    }
}


export default App