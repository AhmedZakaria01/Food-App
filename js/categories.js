let category = [];
let selectedCategory;
let response;
let result;
// Get and Display all categories
async function apiMealCategory() {
  response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  result = await response.json();
  category = result.categories;
  let cartona = ``;
  for (let i = 0; i < category.length; i++) {
    cartona += `<div class="item col-md-3 ">
        <img src=${category[i].strCategoryThumb} class="w-100 rounded" alt="">
      </div>  `;

    $("#categories .row").html(cartona);

    $(".row").click((e) => {  
      let src = $(e.target).attr("src");

      if (category[i].strCategoryThumb === src) {
        let selectedCat;
        selectedCat = category[i].strCategory;
        async function getMeal(selectedCat) {
          response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCat}`
          );
          result = await response.json();
          let meals2 = result.meals;
          let cartona = ``;
          for (let i = 0; i < meals2.length; i++) {
            cartona += `
            <div class="item col-md-3 ">
              <img src=${meals2[i].strMealThumb} class="w-100 rounded" alt="">
             </div> `;
            $("#categories .row").html(cartona);
          }
          $(".row").click((e) => {
            let src = $(e.target).attr("src");
            for (let i = 0; i < meals2.length; i++) {
              if (meals2[i].strMealThumb == src) {
                let mealId = meals2[i].idMeal;
                let mealSpec = [];
                async function specificMeal(mealId) {
                  response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
                  );
                  result = await response.json();
                  mealSpec = result.meals;
                  let cartona = ``;
                  for (let i = 0; i < mealSpec.length; i++) {
                    cartona += `
                  <div class="col-md-4 p-3 text-center">
                    <img class="rounded rounded-2 w-100" src=${mealSpec[i].strMealThumb} class="w-100" alt="">
                    <h2>${mealSpec[i].strMeal}</h2>
                  </div>
                 <div class="col-md-8">
                 <article>
                  <h2>Instructions</h2>
                  <p>Fry the finely chopped onions and minced meat in oil. Add the salt and pepper. Grease a round baking tray and put a layer of pastry in it. Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil. Put another layer of filling and cover with pastry. When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve.</p>
                  <h5 class="fw-bold">Area : <span class="fs-6 fw-lighter">Croatian</span></h5>
                  <h5 class="fw-bold">Category : <span class="fs-6 fw-lighter">Side</span></h5>
                  <section class="recipes">
                    <h2>Recipes :</h2>
                    <div class="recipes-info d-flex justify-content-start flex-wrap">
                      <h5 class="mx-2">${mealSpec[i].strMeasure1} ${mealSpec[i].strIngredient1}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure2} ${mealSpec[i].strIngredient2}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure3} ${mealSpec[i].strIngredient3}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure4} ${mealSpec[i].strIngredient4}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure5} ${mealSpec[i].strIngredient5}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure6} ${mealSpec[i].strIngredient6}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure7} ${mealSpec[i].strIngredient7}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure8} ${mealSpec[i].strIngredient8}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure9} ${mealSpec[i].strIngredient9}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure10} ${mealSpec[i].strIngredient10}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure11} ${mealSpec[i].strIngredient11}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure12} ${mealSpec[i].strIngredient12}</h5>
                      <h5 class="mx-2">${mealSpec[i].strMeasure13} ${mealSpec[i].strIngredient13}</h5>
                      </div>
                    <div class="tags my-4">
                      <h3>Tags :</h3>
                      <span>${mealSpec[i].strTags}</span>
                   </div>
                    <div class="food-view-btns my-4">
                      <button class="btn btn-outline-success"> <a class="text-white" href="${mealSpec[i].strSource}">Source</a> </button>
                      <button class="btn btn-outline-danger"> <a class="text-white" href="${mealSpec[i].strYoutube}">Youtube</a> </button>
                    </div>
                  </section>
                </article>  `;
                    $("#categories").addClass("d-none");
                    $("#meals").removeClass("d-none");
                    $("#meals .row").html(cartona);
                  }
                }
                specificMeal(mealId);
              }
            }
          });
        }
        getMeal(selectedCat);
      }
    });
  }
}
apiMealCategory();
