$(".contact-us-link ").click(()=> {
   $("#home").addClass("d-none");
   let w = $(".left-section").innerWidth();
   $("#closeSideMenu").toggleClass("d-none")
   $("#closeSideMenu2").toggleClass("d-none")
   $("#sideMenu").animate({ left: `-${w}px` });
   $("#contactUs").removeClass("d-none");
})