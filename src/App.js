import React, { Component } from 'react';
import './styles/App.css';

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
      school: '',
      degree: '',
      major: '',
      company: '',
      title: '',
      tasks:[],
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
        school: '',
        degree: '',
        major: '',
        company: '',
        title: '',
        tasks: [],
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
        state: this.state.state,
        zip: this.state.zip,
        summary: this.state.summary,
        skills: this.state.skills,
        school: this.state.school,
        degree: this.state.degree,
        major: this.state.major,
        company: this.state.company,
        title: this.state.title,
        tasks: this.state.tasks
      },
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      summary: '',
      skills: '',
      school: '',
      degree: '',
      major: '',
      company: '',
      title: '',
      tasks: '',
    });
  };

  editResume = (e) => {
    e.preventDefault();
    const { resume } = this.state;
    this.setState({
      name: resume.name,
      email: resume.email,
      phone: resume.phone,
      address: resume.address,
      city: resume.city,
      state: resume.state,
      zip: resume.zip,
      summary: resume.summary,
      skills: resume.skills,
      school: resume.school,
      degree: resume.degree,
      major: resume.major,
      company: resume.company,
      title: resume.title,
      tasks: resume.tasks,
    })

  }

  render() {
    const { 
      resume, 
      name, 
      email, 
      phone, 
      address, 
      city, 
      state, 
      zip, 
      summary, 
      skills,
      school,
      degree,
      major,
      company,
      title,
      tasks,
    } = this.state;

    return (
      <div className='app'>
        <div className='form-container'>
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
            <label htmlFor='school'>School:</label>
            <input type='text' id='school' value={school} onChange={this.handleChange} />
            <label htmlFor='degree'>Degree:</label>
            <input type='text' id='degree' value={degree} onChange={this.handleChange} />
            <label htmlFor='major'>Major:</label>
            <input type='text' id='major' value={major} onChange={this.handleChange} />
            <label htmlFor='company'>Company:</label>
            <input type='text' id='company' value={company} onChange={this.handleChange} />
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' value={title} onChange={this.handleChange} />
            <lable htmlFor='tasks'>Tasks:</lable>
            <textarea id='tasks' value={tasks} onChange={this.handleChange} />
            <button className='form-submit' type='submit'>Submit</button>
          </form>
        </div>
        <Resume resume={resume} editResume={this.editResume}/>
      </div>
    );
  };
};

export default App;
