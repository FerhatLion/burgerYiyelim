import React from 'react'
import AboutImage from '../assets/BurgerYiyelimHome.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${AboutImage})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rem nesciunt modi? Facilis, 
          temporibus alias vel dignissimos, consequuntur, aspernatur dolore similique neque harum 
          architecto minima suscipit molestiae earum error!</p>
      </div>

    </div>
    
  )
}
