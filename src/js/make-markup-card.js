
function sliceCategories(categories) { 
    if (categories.length < 4) {
        
        return categories
    } else {
        return [...categories.slice(0, 2), "Other"];
        
    }
};


export function makeMarkupCard(name, sliceCategories, year) {
    const card = `
      <div class="card__img-wrap">
        <img src="#" alt="" class="card__img" />
      </div>
      <div class="card__text-wrap">
        <h2 class="card__name">${name}</h2>
        <div class="card__info">
          <p class="card__genres">${sliceCategories.join(', ')}</p>
          <p class="card__year">${year}</p>
        </div>
      </div>
    `;
    return card;
  }



