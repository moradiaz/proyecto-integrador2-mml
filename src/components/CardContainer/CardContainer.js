import React, { Component } from 'react'
import Card from '../Card/Card'
import Form from '../Form/Form'

export default class CardContainer extends Component {
    constructor(props){
        super(props)
        
    }

    render() {
    return (
      <>
      <div>
        {
        this.props.peliculas.map((elm, idx) => <Card key = {elm.title + idx} id = {elm.id} poster_path = {elm.poster_path} title = {elm.title} overview = {elm.overview}/>
        )
        }
      </div>
      </>
    )
  }
}
