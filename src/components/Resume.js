import React from 'react';
import '../styles/Resume.css';

export default function Resume(props) {
  const { resume } = props;

  if(resume.name === '') {
    return null;
  }

  return (
    <div className='resume-container'>
      <button type='button' className='edit-btn' onClick={props.editResume}>Edit</button>
      <div className='resume-header section'>
        <h1>{resume.name}</h1>
        <h2>{resume.email}</h2>
        <h2>{resume.phone}</h2>
        <h2>{resume.address}</h2>
        <h2>{resume.city}, {resume.state} {resume.zip}</h2>
      </div>
      <div className='resume-summary section'>
        <h3>Summary</h3>
        <p>{resume.summary}</p>
      </div>
      <div className='resume-skills section'>
        <h3>Skills</h3>
        <p>{resume.skills}</p>
      </div>
      <div className='resume-education section'>
        <h3>Education</h3>
        <ul>
          <li>School: {resume.school}</li>
          <li>Degree: {resume.degree}</li>
          <li>Major: {resume.major}</li>
        </ul>
      </div>
      <div className='resume-experience section'>
        <h3>Experience</h3>
        <ul>
          <li>Company: {resume.company}</li>
          <li>Position: {resume.title}</li>
          <li>Tasks: {resume.tasks}</li>
        </ul>
      </div>
    </div>
  )
}