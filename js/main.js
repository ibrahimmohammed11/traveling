/* owl carousal */
const responsive = {       
0: {
  items: 1,
},
950: {
  items: 2,
},
1400: {
  items: 3,
}
}
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    autoplayTimeout:5000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .prev'), $('.owl-navigation .next')],
    responsive: responsive,
  });
});
/* owl carousal */
/* back to top button  */

$("#toTop").click(function(){
  $("body,html").animate({scrollTop:0},1500)
});

$(window).scroll(function(){
  let top=$(window).scrollTop();
  if(top>900)
  {
    $("#toTop").fadeIn(1000)
  }
  else
  {
    $("#toTop").fadeOut(1000)
  }
})
/* back to top button  */

/* nav-links smooth scroll  */
$(".nav-link").click(function(){
  let currentLink=$(this).attr("href");
  let secOffset=$(currentLink).offset().top;
  $("body,html").animate({scrollTop:secOffset},1500)
})
/* nav-links smooth scroll  */
/* navbar change color  */
$(window).scroll(function(){
  let top=$(window).scrollTop();
  if(top>400)
  {
    $(".navbar").css({
      "background-color":"white",
      "transition":"all 1.5s"
    })
  }
  else
  {
    $(".navbar").css({
      "background-color":"#DCE1E3",
      "transition":"all 1.5s"
    })
  }
})
/* navbar change color  */
/* loading screen  */
$(document).ready(function(){
  $("#loading").fadeOut(2500,function(){
    $("body").css("overflow","visible")
  })
})
/* loading screen  */
/* AOS animation  */
AOS.init();
/* AOS animation  */

/* skitter  */
$(document).ready(function() {
  $(".skitter-large").skitter({
    interval:1500,
    preview: true,
    with_animations:["paralell", "glassBlock", "cubeSpread", "cubeShow"],
  });
});
/* skitter  */

/* typed  */
var typed = new Typed('.element', {
  strings: ['Amazing Place on Earth', 'Best Travel Website'],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  showCursor: false,
});
/* typed  */
