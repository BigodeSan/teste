$(function(){   
    var menu = $('#menu');
        var home = $(".home");
        home.hide();
    $(window).scroll(function () { 
		if ($(this).scrollTop() > 120) { 
            menu.addClass("menu-fixo");
            home.show();
				/*$('body').css('padding-top', 70);*/
			} else { 
				menu.removeClass("menu-fixo");
                home.hide();
				/*$('body').css('padding-top', 0);*/
			} 
		});  
	});
