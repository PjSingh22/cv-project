import React, { useState } from 'react';
import './styles/App.css';

import Resume from './components/Resume';

function App(props) {
  const [values, setValues] = useState({
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
    tasks: ''
  });
  const [resume, setResume] = useState({
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
    tasks: ''
  });

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.id]: e.target.value
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault();

    setResume({ ...resume, ...values });
    setValues({
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
      tasks: ''
    });
  };

  const editResume = (e) => {
    e.preventDefault();
    setValues({ ...resume });
  }

    return (
      <div className='app'>
        <div className='form-container'>
          <h1>Resume Generator</h1>
          <form onSubmit={onSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' value={values.name} onChange={handleChange} />
            <label htmlFor='email'>Email:</label>
            <input type='text' id='email' value={values.email} onChange={handleChange} />
            <label htmlFor='phone'>Phone:</label>
            <input type='text' id='phone' value={values.phone} onChange={handleChange} />
            <label htmlFor='address'>Address:</label>
            <input type='text' id='address' value={values.address} onChange={handleChange} />
            <label htmlFor='city'>City:</label>
            <input type='text' id='city' value={values.city} onChange={handleChange} />
            <label htmlFor='state'>State:</label>
            <input type='text' id='state' value={values.state} onChange={handleChange} />
            <label htmlFor='zip'>Zip:</label>
            <input type='text' id='zip' value={values.zip} onChange={handleChange} />
            <label htmlFor='summary'>Summary:</label>
            <textarea id='summary' value={values.summary} onChange={handleChange} />
            <label htmlFor='skills'>Skills:</label>
            <textarea id='skills' value={values.skills} onChange={handleChange} />
            <label htmlFor='school'>School:</label>
            <input type='text' id='school' value={values.school} onChange={handleChange} />
            <label htmlFor='degree'>Degree:</label>
            <input type='text' id='degree' value={values.degree} onChange={handleChange} />
            <label htmlFor='major'>Major:</label>
            <input type='text' id='major' value={values.major} onChange={handleChange} />
            <label htmlFor='company'>Company:</label>
            <input type='text' id='company' value={values.company} onChange={handleChange} />
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' value={values.title} onChange={handleChange} />
            <lable htmlFor='tasks'>Tasks:</lable>
            <textarea id='tasks' value={values.tasks} onChange={handleChange} />
            <button className='form-submit' type='submit'>Submit</button>
          </form>
        </div>
        <Resume resume={resume} editResume={editResume}/>
      </div>
    );
};

export default App;
