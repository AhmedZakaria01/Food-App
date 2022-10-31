let areaMealArray =[]
// Ingredients Link Click
$(".ingredients-link").click(()=> {
   let w = $(".left-section").innerWidth();
   $("#home").addClass("d-none");
   $("#closeSideMenu").toggleClass("d-none")
   $("#closeSideMenu2").toggleClass("d-none")
   $("#sideMenu").animate({ left: `-${w}px` });

   async function getIngredientsApi() 
{  
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
   let result = await response.json();
   let ingredientsArray = result.meals
   let myArray = ingredientsArray
   // console.log(myArray);
   let cartona = ``
   let size = 0;
   // let size2 = 5;
   let myArray2 = ingredientsArray.splice(0,size)
   for (let i = 0; i < myArray.length; i++) {
   let myPar = myArray[i].strDescription.split(' ').slice(0,20).join(' ');


   // console.log(typeof(myArray));
      myArray[i];
      cartona += `
      <div class="item col-md-3 p-0  my-4 text-center">
      <i custom = ${myArray[i].strIngredient}  class="text-success fa-solid fa-bowl-food fa-3x"></i>
      <h2>${myArray[i].strIngredient}</h2>
      <h5>${myPar}</h5>
    </div>
      `
      $("#ingredients").removeClass("d-none");
      $("#ingredients .row").html(cartona)
   }
}
getIngredientsApi()




});

// When Click ingredients Link =>  Get iI it 
$("#ingredients .row").click((e)=> {
      let selected =$(e.target).attr("custom");
      async function getIngApi(selected) {
         let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${selected}`)
         let result = await response.json();
         let ingMealArr = result.meals;
         let cartona = ``
         for (let i = 0; i < ingMealArr.length; i++) {
            cartona += `
            <div  class="item col-md-3 ">
               <img custom= ${ingMealArr[i].idMeal} src=${ingMealArr[i].strMealThumb} class="w-100 rounded" alt="">
             </div> `
            $("#ingredients").addClass("d-none");
            $("#ingredientsFood").removeClass("d-none");
            $("#ingredientsFood .row").html(cartona);
         }
   
      }
      getIngApi(selected);
});
// When Click Ingredients Items =>  Get The Specific Ingredients Item From API AND Display it 
$("#ingredientsFood .row").click((e) => {
   let selectedAttr = $(e.target).attr("custom") //custom => attr owns the id of the item 

   async function getIngFoodApi(selectedAttr) {
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedAttr}`)
      let result = await response.json();
      let areaIngArray = result.meals;
      let cartona = ``;
      for (let i = 0; i < areaIngArray.length; i++) {
         cartona += `
         <div class="col-md-4 p-3 text-center">
           <img src=${areaIngArray[i].strMealThumb} class="w-100" alt="">
           <h2>${areaIngArray[i].strMeal}</h2>
         </div>
        <div class="col-md-8">
         <article>
            <h2>Instructions</h2>
            <p>${areaIngArray[i].strInstructions}</p>
            <h5 class="fw-bold">Area : <span class="fs-6 fw-lighter">${areaIngArray[i].strArea}</span></h5>
            <h5 class="fw-bold">Category : <span class="fs-6 fw-lighter">${areaIngArray[i].strCategory}</span></h5>
            <section class="recipes">
               <h2>Recipes :</h2>
               <div class="recipes-info d-flex justify-content-start flex-wrap">
                  <h5 class="mx-2">${areaIngArray[i].strMeasure2} ${areaIngArray[i].strIngredient2}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure3} ${areaIngArray[i].strIngredient3}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure4} ${areaIngArray[i].strIngredient4}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure5} ${areaIngArray[i].strIngredient5}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure6} ${areaIngArray[i].strIngredient6}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure7} ${areaIngArray[i].strIngredient7}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure8} ${areaIngArray[i].strIngredient8}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure9} ${areaIngArray[i].strIngredient9}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure10} ${areaIngArray[i].strIngredient10}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure11} ${areaIngArray[i].strIngredient11}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure12} ${areaIngArray[i].strIngredient12}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure13} ${areaIngArray[i].strIngredient13}</h5>
                  <h5 class="mx-2">${areaIngArray[i].strMeasure1} ${areaIngArray[i].strIngredient1}</h5>
               </div>
               <div class="tags my-4">
                  <h3>Tags :</h3>
                  <span>${areaIngArray[i].strTags}</span>
               </div>
               <div class="food-view-btns my-4">
                  <button class="btn btn-outline-success"> <a class="text-white" href="${areaIngArray[i].strSource}">Source</a> </button>
                  <button class="btn btn-outline-danger"> <a class="text-white" href="${areaIngArray[i].strYoutube}">Youtube</a> </button>
               </div>
            </section>
         </article>  `
         $("#ingredientsFood .row").html(cartona);
      }
   }
   getIngFoodApi(selectedAttr);
 });
   
