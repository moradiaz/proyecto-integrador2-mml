import React, { Component } from 'react'
import CardContainer from '../../components/CardContainer/CardContainer'

export default class index extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            favoritos: []
        }
    }

    componentDidMount(){
        let storageFav = localStorage.getItem('favoritos')

        if (storageFav !== null) {
            let favsParseado = JSON.parse(storageFav)
            Promise.all(
                favsParseado.map(id => 
                    fetch('https://api.themoviedb.org/3/movie/' + id)
                    .then(resp => resp.json())
                    )
            

            )
            .then(data => this.setState({
                favoritos: data
            }))
            .catch(err => console.log(err))
        }
    }

    actualizarState(id){
        let stateActualizado = this.state.favoritos.filter(elm => elm.id !== id)
        this.setState({
            favoritos: stateActualizado
        })
    }

  render() {
    return (
      <div>Favoritos
        <CardContainer actualizarState = {(id) => this.actualizarState(id)} peliculas = {this.state.favoritos}
        />
      </div>
    )
  }
}
