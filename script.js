$(document).ready(function() {
    
    $(".carousel").carousel();

    $(".topnav ul").on('click','a',function(el){        
       
       $(".topnavbutton.active").removeClass("active");
       $(this).addClass("active");
       $(".body>div.active").removeClass("active");
       $("."+$(this).data().tab).addClass("active");
        
    });

});