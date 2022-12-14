
$(".loading .sk-cube-grid").fadeOut(1000, ()=> {
  $(".loading").fadeOut(100, ()=> {
      $("body").css("overflow","auto")
  })
})
$(document).ready(function () {
    // Side Menu Show / Hide
    let w = $(".left-section").innerWidth();
    $("#sideMenu").animate({ left: `-${w}px` }, 0);
    $(".closeSideMenu").click(() => {
      if ($("#sideMenu").css("left") == "0px") {
      $("#sideMenu").animate({ left: `-${w}px` });

      } else {
        $("#sideMenu").animate({ left: 0 });
      }
    });

  //Fetch the API For Landing Page
  let meals = [];
  (async function getApi() {
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    result = await response.json();
    meals = result.meals;
    let cartona = ``;
    for (let i = 0; i < meals.length; i++) {
      cartona += `
      <div class="item col-md-3 ">
        <img src=${meals[i].strMealThumb} class="w-100 rounded" alt="">
      </div> `;
      $("#home .row").html(cartona);
    }
  })();

  $("#home").children().click((e) => {

      for (let i = 0; i < meals.length; i++) {
        if ($(e.target).attr("src") == meals[i].strMealThumb) {
          let cartona = ``;
          getItemImgSrc = $(e.target).attr("src");
          cartona += `
          <div class="col-md-4 p-3 text-center">
            <img src=${meals[i].strMealThumb} class="w-100" alt="">
            <h2>${meals[i].strMeal}</h2>
          </div>
         <div class="col-md-8">
         <article>
          <h2>Instructions</h2>
          <p>${meals[i].strInstructions}</p>
          <h5 class="fw-bold">Area : <span class="fs-6 fw-lighter">${meals[i].strArea}</span></h5>
          <h5 class="fw-bold">Category : <span class="fs-6 fw-lighter">${meals[i].strCategory}</span></h5>
          <section class="recipes">
            <h2>Recipes :</h2>
            <div class="recipes-info d-flex justify-content-start flex-wrap">
              <h5 class="mx-2">${meals[i].strMeasure1} ${meals[i].strIngredient1}</h5>
              <h5 class="mx-2">${meals[i].strMeasure2} ${meals[i].strIngredient2}</h5>
              <h5 class="mx-2">${meals[i].strMeasure3} ${meals[i].strIngredient3}</h5>
              <h5 class="mx-2">${meals[i].strMeasure4} ${meals[i].strIngredient4}</h5>
              <h5 class="mx-2">${meals[i].strMeasure5} ${meals[i].strIngredient5}</h5>
              <h5 class="mx-2">${meals[i].strMeasure6} ${meals[i].strIngredient6}</h5>
              <h5 class="mx-2">${meals[i].strMeasure7} ${meals[i].strIngredient7}</h5>
              <h5 class="mx-2">${meals[i].strMeasure8} ${meals[i].strIngredient8}</h5>
              <h5 class="mx-2">${meals[i].strMeasure9} ${meals[i].strIngredient9}</h5>
              <h5 class="mx-2">${meals[i].strMeasure10} ${meals[i].strIngredient10}</h5>
              <h5 class="mx-2">${meals[i].strMeasure11} ${meals[i].strIngredient11}</h5>
              <h5 class="mx-2">${meals[i].strMeasure12} ${meals[i].strIngredient12}</h5>
              <h5 class="mx-2">${meals[i].strMeasure13} ${meals[i].strIngredient13}</h5>
            </div>
            <div class="tags my-4">
              <h3>Tags :</h3>
              <span>${meals[i].strTags}</span>
            </div>
            <div class="food-view-btns my-4">
              <button class="btn btn-outline-success"> <a  class="text-white" target"_blank" href="${meals[i].strSource} ">Source EEE</a> </button>
              <button class="btn btn-outline-danger"> <a class="text-white" href="${meals[i].strYoutube} ">Youtube</a> </button>
            </div>
          </section>
        </article>    `;

          $("#home .row").html(cartona);
        } 
      }
    });
});



// Contact-Us-Validation
function checkNameRegex(e) {
let uNameValue = $("#uName").val();
let nameRegex = /^[a-z ?]{2,20}$/gi
   if(!uNameValue.match(nameRegex)){
   $("#uName").addClass("border-danger");
   $(".name-invalid").addClass("d-block");
   $(".name-invalid").removeClass("d-none");
   e.preventDefault();

   }else {
   $("#uName").removeClass("border-danger");
   $("#uName").addClass("border-success");
   $(".name-invalid").addClass("d-none");
   $(".name-invalid").removeClass("d-block");

   }
}
function checkEmailRegex(e) {
   let uEmailValue = $("#uEmail").val();
   let emailRegex = /^[a-z0-9.?]{8,20}@(gmail|yahoo).com$/gi
      if(!uEmailValue.match(emailRegex)){
      $("#uEmail").addClass("border-danger");
      $(".email-invalid").addClass("d-block");
      $(".email-invalid").removeClass("d-none");
      e.preventDefault();
   
      }else {
      $("#uEmail").removeClass("border-danger");
      $("#uEmail").addClass("border-success");
      $(".email-invalid").addClass("d-none");
      $(".email-invalid").removeClass("d-block");
   
      }
}
function checkPhoneRegex(e) {
   let uPhoneValue = $("#uPhone").val();
   let phoneRegex = /^01[0-9]{9}$/gi
      if(!uPhoneValue.match(phoneRegex)){
      $("#uPhone").addClass("border-danger");
      $(".phone-invalid").addClass("d-block");
      $(".phone-invalid").removeClass("d-none");
      e.preventDefault();
   
      }else {
      $("#uPhone").removeClass("border-danger");
      $("#uPhone").addClass("border-success");
      $(".phone-invalid").addClass("d-none");
      $(".phone-invalid").removeClass("d-block");
   
      }
}
function checkAgeRegex(e) {
   let ageValue = $("#uAge").val();
   let ageRegex = /^[0-9]{2}$/gi
      if(!ageValue.match(ageRegex)){
      $("#uAge").addClass("border-danger");
      $(".age-invalid").addClass("d-block");
      $(".age-invalid").removeClass("d-none");
      e.preventDefault();
   
      }else {
      $("#uAge").removeClass("border-danger");
      $("#uAge").addClass("border-success");
      $(".age-invalid").addClass("d-none");
      $(".age-invalid").removeClass("d-block");
   
      }
}
function checkPasswordRegex(e) {
   let uPassValue = $("#uPass").val();
   let passRegex = /[0-9]{10,20}[a-zA-Z]{1,10}$/g
      if(!uPassValue.match(passRegex)){
      $("#uPass").addClass("border-danger");
      $(".password-invalid").addClass("d-block");
      $(".password-invalid").removeClass("d-none");
      e.preventDefault();
      }else {
      $("#uPass").removeClass("border-danger");
      $("#uPass").addClass("border-success");
      $(".password-invalid").addClass("d-none");
      $(".password-invalid").removeClass("d-block");
      }

}


// SHOW HIDE SECTIONS
let w = $(".left-section").innerWidth();

$(".search-link").click(() => {
  $("#sideMenu").animate({ left: `-${w}px` });
  $("#search").removeClass("d-none");
  $("#home").addClass("d-none");
  $("#categories").addClass("d-none");
  $("#area").addClass("d-none");
  $("#ingredients").addClass("d-none");
  $("#contactUs").addClass("d-none");
  $("#meals").addClass("d-none");
  $("#ingredientsFood").addClass("d-none");
  $("#areaFood").addClass("d-none");
});

$(".categories-link").click(() => {
  $("#sideMenu").animate({ left: `-${w}px` });
  $("#categories").removeClass("d-none");
  $("#search").addClass("d-none");
  $("#home").addClass("d-none");
  $("#area").addClass("d-none");
  $("#ingredients").addClass("d-none");
  $("#contactUs").addClass("d-none");
  $("#meals").addClass("d-none");
  $("#ingredientsFood").addClass("d-none");
  $("#areaFood").addClass("d-none");
});
$(".area-link").click(() => {
  $("#sideMenu").animate({ left: `-${w}px` });
  $("#area").removeClass("d-none");
  $("#categories").addClass("d-none");
  $("#search").addClass("d-none");
  $("#home").addClass("d-none");
  $("#ingredients").addClass("d-none");
  $("#contactUs").addClass("d-none");
  $("#meals").addClass("d-none");
  $("#ingredientsFood").addClass("d-none");
  $("#areaFood").addClass("d-none");

});

$(".ingredients-link").click(() => {
  $("#sideMenu").animate({ left: `-${w}px` });
  $("#ingredients").removeClass("d-none");
  $("#area").addClass("d-none");
  $("#categories").addClass("d-none");
  $("#search").addClass("d-none");
  $("#home").addClass("d-none");
  $("#contactUs").addClass("d-none");
  $("#meals").addClass("d-none");
  $("#ingredientsFood").addClass("d-none");
  $("#areaFood").addClass("d-none");
});

$(".contact-us-link").click(() => {
  $("#sideMenu").animate({ left: `-${w}px` });
  $("#contactUs").removeClass("d-none");
  $("#ingredients").addClass("d-none");
  $("#area").addClass("d-none");
  $("#categories").addClass("d-none");
  $("#search").addClass("d-none");
  $("#home").addClass("d-none");
  $("#meals").addClass("d-none");
  $("#ingredientsFood").addClass("d-none");
  $("#areaFood").addClass("d-none");
});



