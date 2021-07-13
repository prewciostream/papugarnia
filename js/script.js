$(document).ready(function(){
    hidePreloader();
    clickEvents();
    customSettings();
    randomEvents();
    navToFix();
});

function navToFix(){
    var nawigacjaTop = $("#nawigacja").offset().top;
    $(window).scroll(function (){
        var y = $(window).scrollTop();
        if(y>nawigacjaTop){
            $("#nawigacja").addClass("navbar-fixed");
        } else {
            $("#nawigacja").removeClass("navbar-fixed");
        }
    })
}

function customSettings(){
    $('#data').text(new Date().getFullYear());
}

function hidePreloader(){
    setTimeout(
        function() 
        {
            $('#preloader').fadeOut("slow");
            $('#promo').get(0).play();
        }
    , 300);
}

function randomEvents(){

}

function clickEvents(){
    $('#przenies-onas').click(function(){
        $('html,body').animate({
            scrollTop: $("#o-nas").offset().top-95}
        ,200);
    })
}
  