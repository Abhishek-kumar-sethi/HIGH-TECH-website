$(document).ready(function(){
        $("#header").load("index.html .home-page-header")
        $("#nav").load("index.html #home-page-nav")
        $("#counter").load("index.html #home-counter")
        $("#about-page-about").load("index.html .about-section")
        $("#about-page-team").load("index.html .team-section")
        $("#about-page-footer").load("index.html .footer-section")
        $(".service-page-header").load("index.html .home-page-header")
        $(".service-page-nav").load("index.html #home-page-nav")
        $(".service-page-counter").load("index.html #home-counter")
        $(".service-page-service").load("index.html .service-section")
        $(".service-page-footer").load("index.html .footer-section")
        $(".project-page-header").load("index.html .home-page-header")
        $(".project-page-nav").load("index.html #home-page-nav")
        $(".project-page-counter").load("index.html #home-counter")
        $(".project-page-project").load("index.html .project-section")
        $(".project-page-footer").load("index.html .footer-section")
        $(".contact-page-header").load("index.html .home-page-header")
        $(".contact-page-nav").load("index.html #home-page-nav")
        $(".contact-page-counter").load("index.html #home-counter")
        $(".contact-page-form").load("index.html .contact-section")
        $(".contact-page-footer").load("index.html .footer-section")
        $(".blog-page-header").load("index.html .home-page-header")
        $(".blog-page-nav").load("index.html #home-page-nav")
        $(".blog-page-counter").load("index.html #home-counter")
        $(".blog-page-blog").load("index.html .blog-section")
        $(".blog-page-footer").load("index.html .footer-section")
        $(".team-page-header").load("index.html .home-page-header")
        $(".team-page-nav").load("index.html #home-page-nav")
        $(".team-page-counter").load("index.html #home-counter")
        $(".team-page-team").load("index.html .team-section",function(){
            const scrollContainer = document.getElementById('scrollContainer');
const cardWidth = 350 + 20; // Card width plus margin-right
function scrollNext() {
    scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
}    
function scrollPrevious() {
    scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
}
setInterval(scrollNext,3000)
        })
        $(".team-page-footer").load("index.html .footer-section")
        $(".testimonial-page-header").load("index.html .home-page-header")
        $(".testimonial-page-nav").load("index.html #home-page-nav")
        $(".testimonial-page-counter").load("index.html #home-counter")
        $(".testimonial-page-testimonial").load("index.html .testimonials-section")
        $(".testimonial-page-footer").load("index.html .footer-section")
})
$(document).ready(function() {
        function counter(id,count){
        var start = 0;
        var counterInterval = setInterval(function() {
          if (start < count) {
                start++;
                $(id).text(start);
          }
          else {
                clearInterval(counterInterval);
              }
        },20);
        }
        counter('#counter1',99);
        counter('#counter2',25);
        counter('#counter3',120);
        counter('#counter4',5);
      });
$(document).ready(function(){
    $("show").click(function(){
        $(this).slide()
    })
  })
//  $(document).ready(function() {
//        const scrollContainer = $('#scrollContainer');
//        const cardWidth = 350 + 20;
//        var next = $("#scrollnext")
//        var prev = $("#scrollprev")
//          function scrollnext(){
//             console.log("scrollnext")
//              scrollContainer.animate({
//                  scrollLeft: scrollContainer.scrollLeft() + cardWidth
//              }, 500);
//          }
//          function scrollprev(){
//             console.log("scrollprev")
//              scrollContainer.animate({
//                  scrollLeft: scrollContainer.scrollLeft() - cardWidth
//              }, 500);
//          }
//          if(next){
//             console.log("we have next")
//             console.log(next);
//             next.click(function(){
//                 scrollnext();   
//             })
//          }
//          if(prev){
//             console.log("we have prev")
//             console.log(prev)
//             prev.click(function(){
//                 scrollprev();
//             })
//          }
//         // setInterval(scrollnext,3000)
//         });
//     //   $('.next').on('click', function() {
//     //       $scrollContainer.animate({
//     //           scrollLeft: $scrollContainer.scrollLeft() + cardWidth
//     //       }, 500);
//     //   });
  
//     //   $('.prev').on('click', function() {
//     //     $scrollContainer.animate({
//     //         scrollLeft: $scrollContainer.scrollLeft() - cardWidth
//     //     }, 500);
//     //   });
//   });
// document.addEventListener('DOMContentLoaded',function(){
//     console.log("working")
// const scrollContainer = document.getElementById('scrollContainer');
// const cardWidth = 350 + 20; // Card width plus margin-right
// function scrollNext() {
//     scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
// }    
// function scrollPrevious() {
//     scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
// }
// setInterval(scrollNext,3000)
// })
const scrollContainer = document.getElementById('scrollContainer');
const cardWidth = 350 + 20; // Card width plus margin-right
function scrollNext() {
    scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
}    
function scrollPrevious() {
    scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
}
setInterval(scrollNext,3000)
$(document).ready(function() {
      let currentIndex = 0;
      const $cards = $('.testimonial-container');
      const $dots = $('.circle-dot');
      const totalCards = $('.testimonial-card').length;
      const cardWidth = 380;

      function showCard(index) {
          currentIndex = index;
          updateCardPosition();
          updateDots();
      }
  
      function updateCardPosition() {
          $cards.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
      }
  
      function updateDots() {
          $dots.removeClass('dot-active');
          $dots.eq(currentIndex % $dots.length).addClass('dot-active');
      }
  
      function nextCard() {
          currentIndex = (currentIndex + 1) % totalCards;
          updateCardPosition();
          updateDots();
      }
      $dots.on('click', function() {
          showCard($(this).index());
      });
      updateDots();
      setInterval(nextCard, 2000);
  });
  document.addEventListener('DOMContentLoaded',function(){
    let down = document.querySelector('.down')
    window.addEventListener("scroll",function(){
        if (window.scrollY > 200) { // Show icon after scrolling down 200px
            down.style.display = "block";
        }
        else{
            down.style.display = "none";
        }
    })
    down.addEventListener('click',function(){
        window.scroll({top:0 , behavior:"smooth"})
    })  
})
document.addEventListener('DOMContentLoaded',function(){
var btn = document.getElementById("search-btn")
var overlay = document.querySelector('.overlay');
var cut = document.querySelector('.cut')
var home = document.querySelector('.home-page')
console.log(btn)
btn.addEventListener('click',function(){
    overlay.style.display = "flex";
    document.body.style.overflow = "hidden";
})
cut.addEventListener('click',function(){
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
})
})