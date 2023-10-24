import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealIdeas = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const fetchedMeals = data.meals || [];

        // Fetch ingredients for each meal
        const mealsWithIngredients = await Promise.all(
          fetchedMeals.map(async (meal) => {
            const ingredientsResponse = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            );
            if (!ingredientsResponse.ok) {
              throw new Error('Network response for ingredients was not ok');
            }
            const ingredientsData = await ingredientsResponse.json();
            const mealWithIngredients = {
              ...meal,
              ingredients: getIngredientsFromData(ingredientsData.meals[0]),
            };
            return mealWithIngredients;
          })
        );

        // Set the meals list with ingredients
        setMeals(mealsWithIngredients);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching meal ideas:', error);
        setError('Error fetching meal ideas. Please try again later.');
        setLoading(false);
      }
    };

    // Fetch meal ideas when the ingredient prop changes
    fetchMealIdeas();
  }, [ingredient]);

  const getIngredientsFromData = (mealData) => {
    const ingredients = [];
    if (mealData) { // Check if mealData is defined
      for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;
        if (mealData[ingredientKey] && mealData[measureKey]) {
          ingredients.push(
            `${mealData[measureKey]} ${mealData[ingredientKey]}`
          );
        } else {
          break; // No more ingredients
        }
      }
    }
    return ingredients;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      {meals.length === 0 ? (
        <p>No meal ideas found for {ingredient}.</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <p>{meal.strMeal}</p>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <ul>
                {meal.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealIdeas;
