import React from 'react'
import { RecipeCards,RecipeHeader, RecipeImage, Button } from './style';
import defaultImg from '../../assets/default-image.jpg'
import {useNavigate} from 'react-router-dom'


const RecipeCard = ({recipe}) => {

  let navigate = useNavigate();
const moreClick = () => {
  navigate('react-recipe-app/details', {state:{recipe}})
}

  return (
    
    <RecipeCards>
      <RecipeHeader>{recipe.label}</RecipeHeader>  
        <RecipeImage src={recipe?.image || defaultImg}/>
      <Button onClick={moreClick}>View More</Button>
    </RecipeCards>
    
  )
}

export default RecipeCard
