import React, { Component } from 'react';
import './App.css';

import Resume from './components/Resume';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        summary: '',
        skills: [],
        education: {
          school: '',
          degree: '',
          major: '',
        },
        experience: {
          company: '',
          title: '',
          startDate: '',
        },
      resume: {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
      }
    };
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      resume: {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,

      },
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
    });
  };

  render() {
    const { resume, name, email, phone, address, city, state, zip, summary, skills, education, experience } = this.state;

    return (
      <div className='app'>
        <h1>Resume Generator</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' value={name} onChange={this.handleChange} />
          <label htmlFor='email'>Email:</label>
          <input type='text' id='email' value={email} onChange={this.handleChange} />
          <label htmlFor='phone'>Phone:</label>
          <input type='text' id='phone' value={phone} onChange={this.handleChange} />
          <label htmlFor='address'>Address:</label>
          <input type='text' id='address' value={address} onChange={this.handleChange} />
          <label htmlFor='city'>City:</label>
          <input type='text' id='city' value={city} onChange={this.handleChange} />
          <label htmlFor='state'>State:</label>
          <input type='text' id='state' value={state} onChange={this.handleChange} />
          <label htmlFor='zip'>Zip:</label>
          <input type='text' id='zip' value={zip} onChange={this.handleChange} />
          <label htmlFor='summary'>Summary:</label>
          <textarea id='summary' value={summary} onChange={this.handleChange} />
          <label htmlFor='skills'>Skills:</label>
          <textarea id='skills' value={skills} onChange={this.handleChange} />
          <label htmlFor='education'>Education:</label>
          <textarea id='education' value={education} onChange={this.handleChange} />
          <label htmlFor='experience'>Experience:</label>
          <textarea id='experience' value={experience} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
        <Resume resume={resume}/>
      </div>
    );
  };
};

export default App;
