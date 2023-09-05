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
      overview: "Descripción" + this.props.overview
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
      <section className='cardContainer'>
            <article className='character-card'>
                <Link to = {`/peliculas/id/${this.props.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w342${this.props.poster_path}`}alt="" />
                </Link>
                    <h2 className='name'> {this.props.title} </h2>
                    
                
                
            
                <button className='botonDescripcion'onClick={() => 
                  this.state.texto === 'Ver mas'? 
                  this.esconder()
                  :this.mostrar()}>{this.state.texto} 
            
               </button>
                
              <p> {this.state.overview}</p>
            </article>

            
    
        </section>
        
    </>
    )
  }
}
