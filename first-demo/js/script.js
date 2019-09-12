

// Wafaa JS Code
$(window).scroll( function () 
{
    let Top = $(window).scrollTop() ;
    if ( Top >= $("nav").outerHeight(true)+150 )
    {

        $("nav").addClass( "fixed-top");
        $("#navbarSupportedContent").css({"border":"none"});
        $("#navbarSupportedContent ul li").css({"border":"none"});
        $("nav").addClass("navbarBGColorScroll");
     }
    else 
    {
        $("nav").removeClass("fixed-top");
        $("nav").removeClass("navbarBGColorScroll");
        $("nav #navbarSupportedContent").css({"borderTop":"2px solid #E5E5E5"});
        $("nav #navbarSupportedContent").css({"borderBottom":"2px solid #E5E5E5"});
        $("nav #navbarSupportedContent ul li").css({"borderRight":"2px solid #E5E5E5"});
        $("nav #navbarSupportedContent ul li:last-child").css({"borderRight":"none"});
    }
})


/* to top scroll */
$("#btnUp").click(function(){

    $("html,body").animate({scrollTop:0} , 1000)
})

// End Wafaa JS Code




// Ahmed Zaki JS
// Validation

// validation for email
let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;

// validation for password
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;


// validation for age
let patientAge = $('patient-age').value;
if (patientAge < 1 || patientAge > 120) {
    console.log("Your Age is not valid!");
}

// validation for textarea

let commentRegex = /[^A-Z0-9]+/ig


// Smooth Scroll for send request page

$("#go-request").on('click', function (event) {
      if (this.hash !== "") {
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 2000, function () {
          window.location.hash = hash;
        });
      }
    });

// End Ahmed Zaki JS