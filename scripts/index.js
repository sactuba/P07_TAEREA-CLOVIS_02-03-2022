  const main = document.querySelector('#main');
//console.log(main);

 async function recipesCard() {
    for (let i = 0; i < recipes.length; i++) {
        //console.log(recipes[i].ingredients);
        for (let index = 0; index < ingredients.length; index++) {
            console.log(recipes[i].ingredients[index]);
        }
    }

      for (let i = 0; i < recipes.length; i++) {
        //console.log(recipes[i]);
         const card = `<div class="col">
          <div class="card h-100">
            <img src="..." id="card__image" class="card-img-top" alt="..." />
            <div class="card__desc">
            <div class="card-ingredients">
            <h5 class="card-title">${recipes[i].name}</h5>
            <p class="card-text ">${recipes[i].ingredients}</p>
            </div>
            <div class="card-preparation">
            <h5 class="card-timer">${recipes[i].time} min</h5>
                <p class="card-text">${recipes[i].description}</p>
              </div>
            </div>
          </div>
        </div>
        `
        main.innerHTML += card;
        }
  }
  recipesCard();