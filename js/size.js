$(function(){ 
    var size = $("#size");
    /*var home = $(".home");*/
       $(window).resize(function() {  
            if ($(this).width() < 750){ 
                size.hide();
                /*home.hide();*/
            }
            else {
                size.show();
                /*home.show();*/
            }      

       });  

});