
// let nameRegex = /[a-zA-Z][^0-9]$/i;
// let emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@(gmail)\.com$/gi 


// $("form #nameInput").on("input", (e) => {
//    // e.preventDefault();
//    let nameValue = $("#nameInput").val()
//    let validationName =  nameRegex.test(nameValue);
//       if (validationName === true) {
//          isNameValid()
//       } else{
//          isNameNotValid()
//       }
// })
// $("form #emailInput").on("input", (e) => {
//    // e.preventDefault();
//    let emailValue = $("#emailInput").val()
//    let validationEmail =  emailRegex.test(emailValue);
//       if (validationEmail === true) {
//          isEmailValid()
//       } else{
//          isEmailNotValid()
//       }
// })




function isNameValid() {
   $("#nameInput").removeClass("notValid")
   $("#nameInput").addClass("valid")
}

function isNameNotValid() {
   $("#nameInput").removeClass("valid")
   $("#nameInput").addClass("notValid")
  }
  function isEmailValid() {
   $("#emailInput").removeClass("notValid")
   $("#emailInput").addClass("valid")

}

function isEmailNotValid() {
   $("#emailInput").removeClass("valid")
   $("#emailInput").addClass("notValid")
}





// /(info|org|com)/ -> info or org or Com
// /(.org|.com)/ -> info or .org or .Com

// /[0-2]/ -> range from 0 to 2
// /[^0-2]/ -> get any number out of from 0 to 2 (Not Equal)
// /[a-z]/ -> small char
// /[A-Z]/ -> Capital char
// /[a-zA-Z]/   Small and Capital Char
// /[^a-zA-Z0-9.]/ not equal small or caapital characters or number or dot (.)





// Gmail type Gmail REGEX
// /^[a-z0-9](\.?[a-z0-9]){5,}@(gmail)\.com$/gi 

// PASSWORD REGEX Numbers And at least 1 Charcter
// /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi


// REGEX Phone Number Start With 0 and 1 and then should have 9 numbers
// /^[0][1][0-9]{9}/gi

//REGEX NAME ONLY LETTERS AND SPACES
// /[a-z ]/gi

// REGEX AGE ONLY NUMBERS 
// /[0-9 ]/gi 
