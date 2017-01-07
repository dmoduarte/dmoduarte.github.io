$(document).ready(function() {
    
    $(".carousel").carousel();

    $(".topnav ul").on('click','a',function(e){        
       
       $(".topnavbutton.active").removeClass("active");
       $(this).addClass("active");
       $(".body>div.active").removeClass("active");
       $("."+$(this).data().tab).addClass("active");
        
    });
    
     $("#show-more").on('click','a',function(e){        
       
       $(".topnavbutton.active").removeClass("active");
       $(this).addClass("active");
       $(".body>div.active").removeClass("active");
       $("."+$(this).data().tab).addClass("active");
       $("#show-more").removeClass("active");  
         
    });
    
    $('a[href="#show-more"]').on('click',function(){   
        $("#show-more").toggleClass("active");
    });

});