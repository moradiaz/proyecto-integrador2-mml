import { Component } from "react";

class Form extends Component{
    constructor (props){ // para usar props se las debemos pasar como pa´rametro al constructor y al super 
        super(props)
        this.state={
            valorInput: ""


        }

    }

    evitarSubmit(evento){
        evento.preventDefault() //para que no se actualice el sitio, el estado no se va a actualizar 


    }
    guardarValor(evento){ 
        this.setState(
            {
                valorInput: evento.target.value
            },
            () => this.props.filtrarPeliculas(this.state.valorInput)
        )
    }

    render(){
        return(
            <>
                <form onSubmit={(evento)=> this.evitarSubmit(evento)}>
                    <input onChange={(evento)=> this.guardarValor(evento)} value={this.state.valorInput}/>{/*  //para saber lo que escribio el usuario en el form */}
                    <button>Search movie</button>
                </form>
            </>
        )
    }

} 

export default Form 
