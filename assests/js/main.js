$(document).ready(function () {
    
    $('#jumbotron').css({'height': ($(window).height() )+'px'});

    $(window).resize(function (){
        $('#jumbotron').css({'height':($(window).height())+'px'});
        });
    
});

