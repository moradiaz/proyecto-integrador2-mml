import React, { Component } from 'react'
import {options} from '../../utils/constants'
import CardContainer from '../../components/CardContainer/CardContainer'
import Form from '../../components/Form/Form'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            upcoming: [],
            backup: [],
            page: 1
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming', options)
        .then(resp => resp.json())
        .then(data => this.setState({
            upcoming: data.results,
            backup: data.results
        }))
        .catch(err => console.log(err))
    }

    traerMasPeliculas(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?page=${this.state.page + 1}`, options)
        .then(resp => resp.json())
        .then(data => this.setState({
            upcoming: this.state.upcoming.concat(data.results),
            backup: this.state.backup.concat(data.results),
            page: this.state.page + 1
        }))
    }

    filtrarPeliculas(nombre){
        let peliculasFiltrados = this.state.backup.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
        this.setState({
            upcoming: peliculasFiltrados
        })
    }
    

  render() {
    return (
        <>
            <h1>UPCOMING MOVIES</h1>
            <Form filtrarPeliculas = {(nombre) => this.filtrarPeliculas(nombre)}/>
            <button onClick={()=> this.traerMasPeliculas()}>Traer más películas</button>
            <CardContainer peliculas = {this.state.upcoming}/>
            
        </>
    )
  }
}
