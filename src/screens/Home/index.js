import React, { Component } from 'react'
import {options} from '../../utils/constants'
import CardContainer from '../../components/CardContainer/CardContainer'
import './styles.css'


export default class index extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            popular: [],
            backup: [],
            page: 1,
            upcoming: [],
            backupUp: [], 
            valorInput: '', 
            resultados: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then (resp => resp.json())
        .then(data => this.setState({
            popular: data.results.slice(0,5),
            backup: data.results.slice(0,5)
        }))
        .catch(err => console.log(err))

        fetch('https://api.themoviedb.org/3/movie/upcoming', options)
        .then(resp => resp.json())
        .then(data => this.setState({
            upcoming: data.results.slice(0,5),
            backup: data.results.slice(0,5)
        }))
        .catch(err => console.log(err))

    }
    evitarSubmit(evento){
        evento.preventDefault() //para que no se actualice el sitio, el estado no se va a actualizar 


    }
    guardarValor(evento){ 
        this.setState(
            {
                valorInput: evento.target.value
            },
            () => this.busquedaHome()
        )
    }
    
    busquedaHome(){
        if (this.state.valorInput != '') {
            fetch (`https://api.themoviedb.org/3/search/movie?query=${this.state.valorInput}`, options)
            .then(resp => resp.json())
            .then(data => this.setState({
                resultados: data.results
            }))
            .catch(err => console.log(err)) 
        }   
    }




  render() {
    return (
      <>
        <form className="formulario" onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input className="form" onChange={(evento)=> this.guardarValor(evento)} value={this.state.valorInput}/>{/*  //para saber lo que escribio el usuario en el form */}
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        {this.state.valorInput === ''? 
        <main>
            <h1 className='titulo'>POPULAR MOVIES</h1>
            <CardContainer peliculas = {this.state.popular}/>
            <h1 className='titulo'>UPCOMING MOVIES</h1>
            <CardContainer peliculas = {this.state.upcoming} />

        </main>
        :
        <>
        <h1>Resultados de busqueda</h1>
        <CardContainer peliculas = {this.state.resultados}/>
        </>
        }
      </>
    )
  }
}