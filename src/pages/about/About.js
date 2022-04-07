import React from 'react'
import {AboutContainer, InfoContainer, HeaderContainer, StyledImage} from './style'
import codingSvg from '../../assets/coding.svg'

const About = () => {
  return (
    <AboutContainer>
    <StyledImage src={codingSvg} alt='coding'/>
    <HeaderContainer>
      <h1>About Software Developer <span>Onur</span></h1>{' '}
    </HeaderContainer>
    <InfoContainer>
        <h2>Hi, I'am Onur</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          {' '}
          I know JS, ReactJS, Django, NodeJS, MongoDB,SQL, Python, AWS Services.
        </h4>
        <h2>
          <a href="mailto:honorclarus2000@gmail.com">Send email</a> :
          honorclarus2000@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
}

export default About
