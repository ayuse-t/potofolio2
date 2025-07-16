
// ハンバーガーメニュー


$(".hamburger").on("click" , function() {
  let hamburger = $(".hamburger span");
  $("header").toggleClass("open");
  if($("header").hasClass("open")){
    hamburger.css("background-color","white");
  }else{
    hamburger.css("background-color","black");
  }
})

$(".mask").on("click" , function() {
  $("header").toggleClass("open");
})

$(".nav").on("click" , function() {
  $("header").toggleClass("open");
})


// スライダー


$(".slick-area").slick({
  arrows: false,
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 3000,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: "50px",
        slidesToShow: 1,
      },
    },
  ],
});


//ハンバーガー背景色

let hamburger = $(".hamburger span");
let gray = $("#gray");
let mainvisual = $("#mainvisual");

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  let mainBottom = mainvisual.offset().top + mainvisual.outerHeight();
  let grayTop = gray.offset().top;
  let grayBottom = grayTop + gray.outerHeight();
  let vh = window.innerHeight;

  if (scrollTop < mainBottom) {
    hamburger.css("background-color", "white");
  } else if (scrollTop > grayTop && scrollTop < grayBottom) {
    hamburger.css("background-color", "white");
  } else {
    hamburger.css("background-color", "black"); 
  }
});



//  フェードイン


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
    } else {
      entry.target.classList.remove("is-show");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fadeIn_up').forEach(el => {
  observer.observe(el);
});
