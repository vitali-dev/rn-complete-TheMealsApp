import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(
    meals => meals.id === 'm1' || meals.id === 'm2'
  );
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites',
};

export default FavoritesScreen;
