import React, {useState} from 'react'
import Header from '../../components/header/Header'
import Axios from 'axios';
import {MainContainer, ImgDiv, HomeImg} from './style';
import RecipeCard from './RecipeCard';
import homeSvg from '../../assets/home.svg';

const APP_ID = '7902fbd5';
const APP_KEY = 'be1dc39f9e64be8ede92bfa2b81676eb';
const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];

const Home = () => {
  const[meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const[query, setQuery] = useState('');
  const[recipes, setRecipes] = useState();
  
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async() =>{
    if (query !== '') {
    const response = await Axios.get(url);
    console.log(response.data.hits);
    if (response.data.more){
      console.log('No food at this name');
  }
  setRecipes(response.data.hits);
  setQuery('');
  } else {
  console.log('Please enter a food name');
}
}

  return (
    
    <div style={{backgroundColor:'#00adb5'}}> 
      <Header
      setQuery={setQuery}
      query={query}
      getData={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}
      meal={meal}
      />
      {recipes? (<MainContainer>
        {recipes.map((recipe, index)=>(
          <RecipeCard
          key={index}
          recipe={recipe.recipe}
          />
        ))}
      </MainContainer>) : (
        <ImgDiv>
          <HomeImg src={homeSvg}/>
        </ImgDiv>)}
    </div>
    
  )
}

export default Home
