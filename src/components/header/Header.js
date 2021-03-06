import React from "react";
import Form from "./Form";
import {
  HeaderContainer,
  MainHeader,
} from "./style";

const Header = ({setQuery, query, getData, mealTypes, setMeal, meal}) => {
  return (
    <HeaderContainer>
      <MainHeader>
        <h2>Food App</h2>
      </MainHeader>
      <Form 
      setQuery={setQuery}
      query={query}
      getData={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}
      meal={meal}
      />
    </HeaderContainer>
  );
};

export default Header;
