import React, { Component } from 'react'
import {options} from '../../utils/constants'
import CardContainer from '../../components/CardContainer/CardContainer'

export default class index extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            backup: [],
            page: 1
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie', options)
        .then (resp => resp.json())
        .then(data => this.setState({
            peliculas: data.results
        }))
        .catch(err => console.log(err))
    }




  render() {
    return (
      <>
        <CardContainer peliculas = {this.state.peliculas}/>
      </>
    )
  }
}