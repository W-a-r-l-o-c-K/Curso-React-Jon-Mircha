import React, {Component} from "react";

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.id} - {props.name}</figcaption>
        </figure>
    );
}

export default class AjaxApis extends Component {
    state = {
        pokemons: [],    
    }

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon";
        let pokemones = [];
        fetch(url) 
            .then((res) => res.json())
            .then((json) => {
                //console.log(json);
                json.results.forEach((el) => {
                    fetch(el.url)
                        .then((res) => res.json())
                        .then(json => {
                            //console.log(json.name);
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar:json.sprites.front_default,
                            };                          
                            pokemones.push(pokemon);
                            this.setState({pokemons:pokemones});
                        });
                });
            });
    }

    render() {
        return(
           <>
            <h2>Peticiones Asíncronas en Componentes de Clase</h2>
            {this.state.pokemons.map((el) => (
                <Pokemon key={el.id} id={el.id} name={el.name} avatar={el.avatar} />))}
           </> 
        );
    }
}