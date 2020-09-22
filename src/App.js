import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Rating from './components/Rating';
import Ranking from './components/Ranking';

import './App.css';

export default function App() {

  const [stock, setStock] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const updateNote = (letter) => {
    if (stock.findIndex(e => e.letter === letter) > -1) {
      setStock(stock.map(e => e.letter === letter ? { ...e, note: e.note + 1 } : e))
    } else {
      setStock([...stock, { letter: letter, note: 1 }])
    }
  }

  const setUser = (user) => {
    if (currentUser) {
      setCurrentUser(null)
      setStock([])
    } else {
      setCurrentUser(user)
    }
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/ranking">
            <Ranking currentUser={currentUser} setUser={setUser} stock={stock} />
          </Route>
          <Route path="/rating">
            <Rating currentUser={currentUser} updateNote={updateNote} />
          </Route>
          <Route path="/">
            <Home currentUser={currentUser} setUser={setUser} />
          </Route>
        </Switch >
      </Router >
    </div >
  );
}
