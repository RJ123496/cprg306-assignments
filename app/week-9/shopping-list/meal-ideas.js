import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const sanitizedIngredient = ingredient.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ''
    );
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${sanitizedIngredient}`);
    const data = await response.json();
    return data.meals || [];
};

const fetchMealDetails = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0];
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [openMealIndex, setOpenMealIndex] = useState(null);

    useEffect(() => {
        const loadMealIdeas = async () => {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            const detailedMeals = await Promise.all(
                fetchedMeals.map(async (meal) => {
                    const details = await fetchMealDetails(meal.idMeal);
                    return {
                        name: details.strMeal,
                        ingredients: getIngredients(details),
                    };
                })
            );
            setMeals(detailedMeals);
        };
        loadMealIdeas();
    }, [ingredient]);

    const getIngredients = (meal) => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient) {
                ingredients.push(`${measure} ${ingredient}`);
            }
        }
        return ingredients;
    };

    const toggleDropdown = (index) => {
        setOpenMealIndex(openMealIndex === index ? null : index);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            {meals.length === 0 ? (
                <p className="text-black font-semibold">No meal ideas found for {ingredient}</p>
            ) : (
                <>
                    <h2 className="font-bold text-2xl mb-4 text-black">Here are some ideas using {ingredient}</h2>
                    <ul className="space-y-4">
                        {meals.map((meal, index) => (
                            <li key={index} className="text-lg font-semibold text-black">
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="w-full text-left"
                                >
                                    {meal.name}
                                </button>
                                {openMealIndex === index && (
                                    <ul className="ml-4 list-disc text-sm font-normal text-gray-700 mt-2">
                                        {meal.ingredients.map((ingredient, i) => (
                                            <li key={i}>{ingredient}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
