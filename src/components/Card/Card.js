import React, { Component } from 'react'
import "./styles.css" 
import {Link} from 'react-router-dom'

export default class Card extends Component {

  constructor(props){
    super(props)
    this.state={
      texto:"Ver mas",
      
    }
  }


  esconder(){
    this.setState({
      texto:"Ver menos",
      overview: "Descripción: " + this.props.overview
    })
  }

  mostrar(){
    this.setState({
      texto:"Ver mas",
      overview:''
    })
  }


  render() {
    return (
    <> 
      <div>
            <article className='character-card'>
                <Link to = {`/peliculas/id/${this.props.id}`}>
                    <p className='imagen'><img src={`https://image.tmdb.org/t/p/w342${this.props.poster_path}`}alt="" /></p>
                </Link>
                    <h2 className='title'> {this.props.title} </h2>
                    <br/>
                <button className='botonDescripcion'onClick={() => 
                  this.state.texto === 'Ver mas'? 
                  this.esconder()
                  :this.mostrar()}>{this.state.texto} 
               </button>
                
              <p> {this.state.overview}</p>
            </article>

            
    
        </div>
        
    </>
    )
  }
}
