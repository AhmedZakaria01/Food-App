let areaMealArray = [];
// Arena Link Click
$(".area-link").click(() => {
   let w = $(".left-section").innerWidth();   
  $("#home").addClass("d-none");
  $("#closeSideMenu").toggleClass("d-none");
  $("#closeSideMenu2").toggleClass("d-none");
  $("#sideMenu").animate({ left: `-${w}px` });
  $("#area").removeClass("d-none");

//   Fetch API Data
  async function getAreaApi() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let result = await response.json();
    let areaArray = result.meals;
    let cartona = ``;
//  Display Api Data
    for (let i = 0; i < areaArray.length; i++) {
      cartona += `
      <div class="item col-md-3 p-0  my-4">
         <i customArea=${areaArray[i].strArea} class="fa-solid fa-city fa-3x  text-info  pb-3"></i>
         <h2>${areaArray[i].strArea}</h2>
      </div>
      `;
      $("#area .row").html(cartona);
    }
  }
  getAreaApi();
});

$("#area .row").click((e) => {
  let selected = $(e.target).attr("customArea");
  
// Fetch And Display API 
  async function getAreaFoodApi(selected) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selected}`);
    let result = await response.json();
    let areaMealArray = result.meals;
    let mealKey = areaMealArray;
    // console.log(areaMealArray);
    let cartona = ``;
    for (let i = 0; i < areaMealArray.length; i++) {
      // console.log(areaMealArray[i]);
      cartona += `
            <div  class="item col-md-3 ">
            <img custom= ${mealKey[i].idMeal} src=${areaMealArray[i].strMealThumb} class="w-100 rounded" alt="">
          </div> 
            `;
      $("#area").addClass("d-none");
      $("#areaFood").removeClass("d-none");
      $("#areaFood .row").html(cartona);
    }
  }
  getAreaFoodApi(selected);
});

// Get And Display
$("#areaFood .row").click((e) => {
  let selectedAttr = $(e.target).attr("custom");
  async function getAreaFoodApi(selectedAttr) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedAttr}`);
    let result = await response.json();
    let areaMealArray = result.meals;
    let cartona = ``;
    for (let i = 0; i < areaMealArray.length; i++) {
      cartona += `
         <div class="col-md-4 p-3 text-center">
           <img src=${areaMealArray[i].strMealThumb} class="w-100" alt="">
           <h2>${areaMealArray[i].strMeal}</h2>
         </div>
        <div class="col-md-8">
        <article>
         <h2>Instructions</h2>
         <p>${areaMealArray[i].strInstructions}</p>
         <h5 class="fw-bold">Area : <span class="fs-6 fw-lighter">${areaMealArray[i].strArea}</span></h5>
         <h5 class="fw-bold">Category : <span class="fs-6 fw-lighter">${areaMealArray[i].strCategory}</span></h5>
         <section class="recipes">
           <h2>Recipes :</h2>
           <div class="recipes-info d-flex justify-content-start flex-wrap">
             <h5 class="mx-2">${areaMealArray[i].strMeasure1} ${areaMealArray[i].strIngredient1}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure2} ${areaMealArray[i].strIngredient2}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure3} ${areaMealArray[i].strIngredient3}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure4} ${areaMealArray[i].strIngredient4}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure5} ${areaMealArray[i].strIngredient5}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure6} ${areaMealArray[i].strIngredient6}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure7} ${areaMealArray[i].strIngredient7}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure8} ${areaMealArray[i].strIngredient8}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure9} ${areaMealArray[i].strIngredient9}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure10} ${areaMealArray[i].strIngredient10}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure11} ${areaMealArray[i].strIngredient11}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure12} ${areaMealArray[i].strIngredient12}</h5>
             <h5 class="mx-2">${areaMealArray[i].strMeasure13} ${areaMealArray[i].strIngredient13}</h5>
             </div>
           <div class="tags my-4">
           <h3>Tags :</h3>
           <span>${areaMealArray[i].strTags}</span>
           </div>
           <div class="food-view-btns my-4">
             <button class="btn btn-outline-success"> <a class="text-white" href="${areaMealArray[i].strSource}">Source</a> </button>
             <button class="btn btn-outline-danger"> <a class="text-white" href="${areaMealArray[i].strYoutube}">Youtube</a> </button>
           </div>
         </section>
       </article>
     </div>  `;
      $("#areaFood").removeClass("d-none");
      $("#areaFood .row").html(cartona);
    }
  }
  getAreaFoodApi(selectedAttr);
});
