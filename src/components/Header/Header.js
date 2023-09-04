import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const elementos = [
    {
        nombre: 'Home',
        link:'/'
    },
    {
        nombre: 'Favoritos',
        link:'/favoritos'
    },
    {
        nombre: 'Películas',
        link: '/peliculas'
    },
    {
        nombre: 'Series',
        link: '/series'
    }
]
export default function Header() {
  return (
    <nav>
        <ul className='main-nav'>
            {
                elementos.map((elm, idx) => <li>
                    <Link to = {elm.link}>
                        {elm.nombre}
                    </Link>
                    </li>)
            }
        </ul>
        <ul>
            <img className='logo' src= './img/logo.jpg'alt="" />
        </ul>
        
    </nav>
  )
}