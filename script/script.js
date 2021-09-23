$(document).ready(function(){
    $(".chat-btn").click(function(){
        $("#form").css("display","grid");
        $(".content-right").css("display","none");
    })
    $(".search").click(function(){
        $(".searchbar").toggle();
    })
    $(".avatar-menu").click(function(){
        $(".profile-menu").toggle();
    })

    $(".cancel").click(function(){
        $("#form").css("display","none");
        $(".content-right").css("display","grid");
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1
    })

    $("#loadbtn").click(function(){
        $("#hidden").css("display","grid");
        $("#loadbtn").css("display","none");
    })

        $(".toggle").click(function(){
            $(".navmenu").toggleClass("active");
        });

        // const $menu = $('.navmenu');
        

        // $(document).mouseup(e => {
        // if (!$menu.is(e.target) 
        // && $menu.has(e.target).length === 0)
        // {
        //     $menu.removeClass('active');  
           
        // }
        // });
})
