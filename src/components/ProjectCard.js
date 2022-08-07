import React from 'react'

function ProjectCard(props) {
  return (
    <div className='projectCard'>
        <div className='cardView'>
          <img src={props.img} />
          <h2 className='cardTitle'>{props.title}</h2>
          <p className='cardDesc'>{props.desc}</p>
        </div>
        <a href={props.projLoc}>
        <button className='cardBtn'>Live</button>
        </a>
        <a href={props.github}>
        <button className='cardBtn'>Github</button>
        </a>
    </div>
  )
}

export default ProjectCard