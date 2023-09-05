import {Switch, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './screens/Home'
import Popular from './screens/Popular'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path = {'/'} exact = {true} component = {Home}/>
        <Route path = {'/popular'} exact = {true} component = {Popular}/>
      </Switch>
      <Footer />
    </>
  )
}

export default App;
