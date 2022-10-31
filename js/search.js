let meals = [];
let fValue;
let nValue;
// Search Api => By Name
async function searchApiName(nValue) {
  response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nValue}` );
  result = await response.json();
  meals = result.meals;
}
function displayName(nValue) {
  let cartona = ``;
  for (let i = 0; i < meals.length; i++) {
    if (meals[i].strMeal.toLowerCase().includes(nValue.toLowerCase()) == true) {
    let newMeals = meals[i]
    $(".item-container").click(()=> {
    newMeals= [...meals]
    })
      cartona += `
        <div class="item col-md-3 ">
           <img src=${meals[i].strMealThumb} class="w-100 rounded" alt="">
         </div> `;
      $(".item-container").html(cartona);
    }
  }
}
$("#searchName").on("input", async () => {
  nValue = $("#searchName").val();
  await searchApiName(nValue);
  displayName(nValue);
});
// Search Api => By First Letter
async function searchApiLetter(fValue) {
  response = await fetch( `https://www.themealdb.com/api/json/v1/1/search.php?f=${fValue}`);
  result = await response.json();
  meals = result.meals;
}
function displayFirstLetter(fValue) {
  let cartona = ``;
  for (let i = 0; i < meals.length; i++) {
    if (meals[i].strMeal.toLowerCase().includes(fValue.toLowerCase()) == true) {
      cartona += `
          <div class="item col-md-3 ">
            <img src=${meals[i].strMealThumb} class="w-100 rounded" alt="">
          </div>  `;
      $(".item-container").html(cartona);
    }
  }
}
$("#searchLetter").on("input", async () => {
  fValue = $("#searchLetter").val();
  await searchApiLetter(fValue);
  displayFirstLetter(fValue);
});





