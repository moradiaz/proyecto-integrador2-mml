import React, { Component } from 'react'
import { options } from '../../utils/constants'
import {Link} from 'react-router-dom'
import './styles.css'

export default class index extends Component {
    constructor(props){
      super(props) 
      this.state = {
        dataPeliculas: null,
        esFavorito: false

      }
    }

    componentDidMount(){
      fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
      .then(res => res.json())
      .then(data => this.setState({
        dataPeliculas: data
      }, 
      () => {
        let storageFav = localStorage.getItem('favoritos')
        let arrParseado = JSON.parse(storageFav)

        if (arrParseado !== null){
          let estaMiPelicula = arrParseado.includes(this.state.dataPeliculas.id)
          if(estaMiPelicula){
            this.setState({
              esFavorito: true
            })
          }
        }
      }

      ))
      .catch(err => console.log(err)) 
    }

    agregarFavoritos(idPelicula){
      let storageFav = localStorage.getItem('favoritos')
      if (storageFav === null){
        let arrIds = [idPelicula]
        let arrayString = JSON.stringify(arrIds)
        localStorage.setItem('favoritos', arrayString)
      }else{
        let arrParseado = JSON.parse(storageFav)
        arrParseado.push(idPelicula)
        let arrStringificado = JSON.stringify(arrParseado)
        localStorage.setItem('favoritos', arrStringificado)
      }
      this.setState({
        esFavorito: true
      })
    }
    sacarFavoritos(idPelicula){
      let storageFav = localStorage.getItem('favoritos')
      let arrParseado = JSON.parse(storageFav)
      let favsFiltrado = arrParseado.filter((id) => id !== idPelicula)
      let arrStringificado = JSON.stringify(favsFiltrado)
      localStorage.setItem('favoritos', arrStringificado)
      this.setState({
        esFavorito: false
      })
    }


  render() {
    return (
      <> 
        {
          this.state.dataPeliculas !== null? 
          <div> 
            <article className='character-card'>
            <Link to = {`/peliculas/id/${this.state.dataPeliculas.id}`}>
                <img src={`https://image.tmdb.org/t/p/w342${this.state.dataPeliculas.poster_path}`}alt="" />
            </Link>
            </article>
            <article className='detallePelis'>
              <h2>{this.state.dataPeliculas.title}</h2>
              <p>RATING:{this.state.dataPeliculas.vote_average}</p>
              <p>FECHA DE ESTRENO: {this.state.dataPeliculas.release_date}</p>
              <p>SINOPSIS: {this.state.dataPeliculas.overview}</p>
              {/* <p>GENEROS : {this.state.dataPeliculas.genre[0]}</p> */}
              <p>DURACION: {this.state.dataPeliculas.runtime}</p>
              {
                this.state.esFavorito ? 
                <button onClick = {() => this.sacarFavoritos(this.state.dataPeliculas.id)}>
                  Sacar de Favoritos
                </button>
                : 
                <button onClick = {() => this.agregarFavoritos(this.state.dataPeliculas.id)}>
                  Agregar a Favoritos
                </button>
              }
            </article>
          </div>
          :
          <h1>Trayendo Peliculas...</h1>
        }




      </>
    )
  }
}
