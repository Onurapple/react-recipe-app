import React from 'react'
import {useNavigate} from 'react-router-dom'
import {FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput, Button} from './style'
import mealSvg from '../../assets/meal.svg'


const Login = () => {

  let navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault()
  /* navigate('/react-recipe-app/home') */
  /* window.location.href='/react-recipe-app/home' */
}

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg}/>
        <Header>
          {'<Clarusway/> Recipe'}
        </Header>
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="username" required/>
            <StyledInput type="password" placeholder="password" required/>
            <StyledButton type="submit"><Button to='/react-recipe-app/home'>Login</Button></StyledButton>
        </StyledForm>

      </FormContainer>
    </LoginContainer>
  )
}

export default Login
