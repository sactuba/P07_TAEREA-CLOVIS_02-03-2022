function Data() {
  for (let i = 0; i < recipes.length; i++) {
    //console.log(recipes[i]);
    const ingredientLength = recipes[i].ingredients.length;
    //console.table(recipes);
    for (let j = 0; j < ingredientLength; j++) {
      const allIngredients = recipes[i].ingredients[j].ingredient;
      //console.log(allIngredients);
    }
  }
}
/* function Data() {
  fetch("/data/recipes.js").then((res) => {
    const allRecipes = recipes.forEach((recipe) =>
      recipe.ingredients.forEach((ingredient) => console.log(ingredient))
    );
  });
} */

Data();

async function recipesCard() {
  for (let i = 0; i < recipes.length; i++) {
    //console.log(recipes[i]);
    const card = `<div class="col">
    <div class="card h-100">
    <img src="" id="card__image" class="card-img-top" alt="..." />
    <div class="card__desc">
    <div class="card-ingredients">
    <h5 class="card-title">${recipes[i].name}</h5>
    <ul class="liste-ingredients" id="liste-ingredients">
    </ul>
    </div>
    <div class="card-preparation">
    <h5 class="card-timer"><i class="fa-regular fa-clock"></i> ${recipes[i].time} min</h5>
    <p class="card-text desc-preparation">${recipes[i].description}</p>
    </div>
    </div>
    </div>
    </div>`;
    main.innerHTML += card;
    for (let index = 0; index < recipes[i].ingredients.length; index++) {
      const ing = recipes[i].ingredients[index].ingredient;
      const quantity = recipes[i].ingredients[index].quantity;
      const unit = recipes[i].ingredients[index].unit;
      const ingDesc = `<li>${ing}: ${quantity} ${unit} </li>`;
      //console.log(ingDesc);
      const test = document.getElementById("liste-ingredients").innerHTML;
      //console.log(test);
      test.innerHTML += ingDesc;
    }
  }
}
recipesCard();
