// $(function() {
//     let header = $('.header');
     
//     $(window).scroll(function() {
//       if($(this).scrollTop() > 1) {
//        header.addClass('header_fixed');
//       } else {
//        header.removeClass('header_fixed');
//       }
//     });
//    });

//    var hiddenElement = document.getElementById("ab_us");
//    var btn = document.querySelector('.ab_href');
   
//    function handleButtonClick() {
//       hiddenElement.scrollIntoView({block: "center", inline:"nearest", behavior: "smooth"});
//    }
   

//    navigator.connection.downlink;

$(document).ready(function(){
    $('.burger-menu').click(function(event){
      $('.burger-menu , .header-menu').toggleClass('active');
      $('body').toggleClass('lock');
    })
  })
  $('.menu-list').click(function(event) {
    $('.burger-menu , .header-menu').removeClass('active');
    $('body').removeClass('lock');
  })