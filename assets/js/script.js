
$(document).ready(function(){
    $('.owl-diet').owlCarousel({
     loop:true,
     margin:10,
     nav:true,
     autoplay:true,
     autoplayHoverPause:true,
     smartSpeed:700,
     autoplayTimeout:2000,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
    $( ".owl-prev").html('<i class="fa-solid fa-angle-left"></i>');
    $( ".owl-next").html('<i class="fa-solid fa-angle-right"></i>');
});





//Custom Select...


$(document).ready(function(){
    $(".selected-option").click(function(event){
        event.stopPropagation()
        $(".select-option-card").fadeOut("fast").stop();
        $(this).next(".select-option-card").stop().fadeToggle("fast");
    })


    $(".select-option-card li").click(function(event){
        var x = $(this).text();
        $(this).parents(".select-option-card").hide()
        $(this).parents(".select-wrapper").find(".selected-option p").text(x);
    })

    $(document).click(function(){
        $(".select-option-card").hide();
    })
}) 



//Top Bar Sticky...


$(window).scroll(function(){
    if ($(this).scrollTop()){  
        $('.header-wrapper').addClass("sticky");
    }
    else{
        $('.header-wrapper').removeClass("sticky");
    }
});



//Nav list Responsive...


var navres1 = document.getElementById("nav-menu-toogle");
var bar1=document.getElementById("bar");
bar1.addEventListener('click',()=>{
    navres1.classList.toggle('activemenu');
});


// Nav Responsive...


$('#line').click(function(){
    $('#nav').addClass('open');

})
$('#cros').click(function(){
    $('#nav').removeClass('open');
    
});
