const searchBox = document.querySelector('.search-box');
const searchBtn = document.querySelector(".search-btn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const fatchRecipes = async (query) => {
    recipeContainer.innerHTML = "Fetching Recipes......";
    try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await data.json();
        recipeContainer.innerHTML = "";
        response.meals.forEach(meal => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `<img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}
        <p>${meal.strCategory}
        `
            const button = document.createElement('button');
            button.textContent = "View Recipe";
            recipeDiv.appendChild(button);
            button.addEventListener('click', () => {
                openRecipePopup(meal);
            })
            recipeContainer.appendChild(recipeDiv);
        
        });

    }
    catch (error) {
        recipeContainer.innerHTML =
          "<p>We're having trouble fetching the recipes. Please try again.</p>";
    }
}

const fatchIngredients = (meal) => { 
    let ingredientList = "";
    for (let i = 1; i <= 20; i++){
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
            const measure = meal[`strMeasure${i}`];
            ingredientList += `<li>${measure} ${ingredient}</li>`
        }
        else {
            break;
        }
    
        
    }
    return ingredientList;
}
const openRecipePopup = (meal) => {
    recipeDetailsContent.innerHTML = `
    <h2 class="recipeName">${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="ingredientsList">${fatchIngredients(meal)}</ul>
    <div class="recipeInstructions" > 
    <h3>Instructions:</h3>
    <p>${meal.strInstructions}</p>
    `;
    recipeDetailsContent.parentElement.style.display = 'block';
    
}
searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if (!searchInput) {
        recipeContainer.innerHTML = `<h2>Type the meal in the search box.<h2>`;
        return;
    }
    fatchRecipes(searchInput);
})
recipeCloseBtn.addEventListener('click', (e) => {
    recipeDetailsContent.parentElement.style.display = "none";
});