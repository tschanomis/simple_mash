import React from 'react';
import { Redirect } from 'react-router-dom';

import './Home.css';

export default function Home(props) {

  const submitUserName = (e) => {
    e.preventDefault()
    props.setUser(e.target.name.value)
  }

  return (
    <div className="Home">
      { props.currentUser ?
        <Redirect to="/rating" />
        :
        <div className="Home-card">
          <form className="Home-card-form" onSubmit={submitUserName}>
            <h2>Hello, what's your name ?</h2>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="submit" value="Play" />
          </form>
        </div>
      }
    </div>
  );
}