import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Card extends Component {


  render() {
    return (
    <> 
      <section className='cardContainer'>
            <article className='character-card'>
                <Link to = {`/peliculas/id/${this.props.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w342${this.props.poster_path}`}alt="" />
                </Link>
                    <h2> {this.props.title} </h2>
                    <p> {this.props.overview} </p>
                
                    {/* <a className= 'more' onClick = {() => this.cambiar()}>{this.state.valor}</a>
                    <a href='#' className='delete'>Borrar</a> */}
                {/* {
                this.state.esFavorito ?
                <button onClick={()=> this.sacarFavoritos(this.props.id)}>
                    Sacar de favoritos
                </button>
                :
                <button onClick={() =>this.agregarFavoritos(this.props.id)}>
                    Agregar a favoritos
                </button>
                } */}
            </article>
        </section>
    </>
    )
  }
}
