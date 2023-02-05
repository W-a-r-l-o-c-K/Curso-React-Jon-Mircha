import React,{Component} from "react";

function Login() {
    return(
        <div>
            <h3>Login</h3>
        </div>
    );
}

function LogOut() {
    return(
        <div>
            <h3>LogOut</h3>
        </div>
    );
}

export default class RenderizadoCondicional extends Component  {
    constructor(props){
        super(props);
        this.state = {
            session: false,
        };
    }
    render (){
        return (
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session ? <Login /> : <LogOut />}
            </div>
        );
    }
}