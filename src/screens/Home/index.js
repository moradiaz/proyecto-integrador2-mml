import React, { Component } from 'react'
import {options} from '../../utils/constants'
import CardContainer from '../../components/CardContainer/CardContainer'
import Form from '../../components/Form/Form'
import './styles.css'


export default class index extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            popular: [],
            backup: [],
            page: 1,
            upcoming: [],
            backupUp: []
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
    
    filtrarPeliculas(nombre){
        let peliculasFiltrados = this.state.backup.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
        this.setState({
            popular: peliculasFiltrados , 
            upcoming: peliculasFiltrados
        })
    }
    




  render() {
    return (
      <>
        <Form filtrarPeliculas = {(nombre) => this.filtrarPeliculas(nombre)}/>
        <main>
            <h1 className='titulo'>POPULAR MOVIES</h1>
            <CardContainer peliculas = {this.state.popular}/>
            <h1 className='titulo'>UPCOMING MOVIES</h1>
            <CardContainer peliculas = {this.state.upcoming} />

        </main>
       


      </>
    )
  }
}