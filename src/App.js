import React, { Component } from 'react';
import './App.css';

import Resume from './components/Resume';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      resume: {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        summary: '',
        skills: [],
        education: [],
        experience: [],
        projects: [],
        languages: [],
        interests: [],
        references: [],
      }
    }
  };

  render() {
    return (
      <div className='app'>
        <h1>Resume Generator</h1>
        <form>
          <label>
            Name:
            <input type='text' name='name' required />
          </label>
          <label>
            Email:
            <input type='email' name='email' required />
          </label>
          <label>
            Phone:
            <input type='text' name='phone' required />
          </label>
          <label>
            Address:
            <input type='text' name='address' required />
          </label>
          <label>
            City:
            <input type='text' name='city' required />
          </label>
          <button type='submit'>Submit</button>
        </form>
        <Resume />
      </div>
    );
  };
};

export default App;
