import {Switch, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './screens/Home'
import Popular from './screens/Popular'
import Upcoming from './screens/Upcoming'
import Detalle from './screens/Detalle'
import NotFound from './screens/NotFound'
import Favoritos from './screens/Favoritos'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path = {'/'} exact = {true} component = {Home}/>
        <Route path = {'/popular'}  component = {Popular}/>
        <Route path = {'/upcoming'}  component = {Upcoming}/>
        <Route path = {'/peliculas/id/:id'} component = {Detalle} />
        <Route path = {'/favoritos'} component = {Favoritos} />
        <Route component = {NotFound}/>
      </Switch>
      <Footer />
    </>
  )
}

export default App;
