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

async function displayRecipesCard() {
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

displayRecipesCard();

function filterByIng() {
  const cardSearch = document.getElementsByClassName("card-search");
  const displayIng = document.getElementById("display-ing");
  console.log(displayIng);
  let liste = document.createElement("ul");
  liste.classList.add("dropdown-liste");

  displayIng.appendChild(liste);

  const ingredientInput = document.getElementById("ingredients-input");

  ingredientInput.addEventListener("focus", function () {
    let arrow = document.getElementById("arrow-filter-ing");
    displayIng.style.display = "block";
    for (let i = 0; i < recipes.length; i++) {
      for (let index = 0; index < recipes[i].ingredients.length; index++) {
        const ing = recipes[i].ingredients[index].ingredient;
        const ingredientsDropDown = `
         <li class="ing-liste">${ing}</li>
         `;
        liste.innerHTML += ingredientsDropDown;
        //console.log(ingredientsDropDown);
      }
    }
  });
  ingredientInput.addEventListener("blur", function () {
    displayIng.style.display = "none";
  });
}

function filterByAppareils() {
  const cardSearch = document.getElementsByClassName("card-search");
  const displayAppareils = document.getElementById("display-appareils");
  let liste = document.createElement("ul");
  liste.classList.add("dropdown-liste");

  displayAppareils.appendChild(liste);

  const appareilsInput = document.getElementById("appareils-input");

  appareilsInput.addEventListener("focus", function () {
    displayAppareils.style.display = "block";

    for (let i = 0; i < recipes.length; i++) {
      for (let index = 0; index < recipes[i].ingredients.length; index++) {
        const appliance = recipes[i].appliance;
        console.log(appliance);
        const applianceDropDown = `
         <li class="ing-liste">${appliance}</li>
         `;
        liste.innerHTML += applianceDropDown;
      }
    }
  });
  appareilsInput.addEventListener("blur", function () {
    displayAppareils.style.display = "none";
  });
}

function filterByUstensils() {
  const cardSearch = document.getElementsByClassName("card-search");
  const displayUstensils = document.getElementById("display-ustensils");
  const liste = document.createElement("ul");
  liste.classList.add("dropdown-liste");

  displayUstensils.appendChild(liste);

  const ustensilsInput = document.getElementById("ustensils-input").value;

  for (let i = 0; i < recipes.length; i++) {
    for (let index = 0; index < recipes[i].ingredients.length; index++) {
      const ustensils = recipes[i].ustensils;
      console.log(ustensils);
      const ustensilsDropDown = `
       <li class="ing-liste">${ustensils}</li>
       `;
      //liste.innerHTML += ingredientsDropDown;
    }
  }
}

filterByIng();
filterByAppareils();
filterByUstensils();
