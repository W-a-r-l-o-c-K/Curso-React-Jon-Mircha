import React, {Component} from "react";

const Componente = (props) => <h2>{props.msg}</h2>; // Función no declarada(es expresada, lleva el return implícito.)

/* function Componente(props) {
    return <h2>{props.msg}</h2>; // La función no necesita el método render ni el this.
} */

/* class Componente extends Component {
    render(){
        return <h2>{this.props.msg}</h2>;
    }
} */

export default Componente;