

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