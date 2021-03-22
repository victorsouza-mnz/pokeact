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
            searchField : '',   
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }


    componentDidMount(){

        fetch('https://pokeapi.co/api/v2/pokemon').then(response => {
            return response.json()
        }).then(pokemons => this.setState({pokemons: pokemons.results})) 
    }


    render() {
        const filteredPokemons = this.state.pokemons.filter( (el) => {
            return el.name.toLowerCase().includes(this.state.searchField.toLowerCase()) ? true : false 
        })

        return !this.state.pokemons.length ?
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