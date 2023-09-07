import React, { Component } from 'react'
import Card from '../Card/Card'




export default class CardContainer extends Component {

    render() {
    return (
      <>
      <div className='cardContainer'>

        {
          this.props.peliculas.length === 0?
          <h1 className='trayendoPeliculas'>Trayendo Peliculas...</h1>:
        this.props.peliculas.map((elm, idx) => <Card key = {elm.title + idx} id = {elm.id} poster_path = {elm.poster_path} title = {elm.title} overview = {elm.overview} actualizarState = {this.props.actualizarState? (id) => this.props.actualizarState(id) : false}/>
        )
        }
        
      </div>
      </>
    )
  }
}
