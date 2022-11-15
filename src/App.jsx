import {  BrowserRouter as Router, Route, UseNavigate } from 'react-router-dom'

import Home from './container/Home';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <UseNavigate>
        <Route path='/*' component={Home} exact />
        <Route path='/login' component={Login} />
      </UseNavigate>
    </Router>
  )
}

export default App
