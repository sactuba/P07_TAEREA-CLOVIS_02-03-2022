  const main = document.querySelector('#main');
;

 async function recipesCard() {
    for (let i = 0; i < recipes.length; i++) {
        //console.log(recipes[i].ingredients);
        for (let index = 0; index < recipes[i].ingredients.length; index++) {
            //console.log(recipes[i].ingredients[index]);
            const ingredientList = `
            <p class="card-text desc-ingredients">${recipes[i].ingredients[index].ingredient}</p>
            `
            console.log(ingredientList);
            //document.querySelector('.card-ingredients').innerHTML += ingredientList;
        }
    }

      for (let i = 0; i < recipes.length; i++ ) {
        //console.log(recipes[i]);
         const card = `<div class="col">
          <div class="card h-100">
            <img src="" id="card__image" class="card-img-top" alt="..." />
            <div class="card__desc">
            <div class="card-ingredients">
            <h5 class="card-title">${recipes[i].name}</h5>
            <p class="card-text desc-ingredients">${recipes[i].ingredients[1].ingredient}</p>
            </div>
            <div class="card-preparation">
            <h5 class="card-timer"><i class="fa-regular fa-clock"></i> ${recipes[i].time} min</h5>
                <p class="card-text desc-preparation">${recipes[i].description}</p>
              </div>
            </div>
          </div>
        </div>`
        
        main.innerHTML += card;
        }
  }
  recipesCard();