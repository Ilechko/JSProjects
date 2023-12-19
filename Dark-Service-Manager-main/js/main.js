window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "15px 5% 15px 5%";
    document.getElementById("header").style.background = "rgba(29,233,182, 0.9)";
    document.getElementById("header").style.backdropFilter = "blur(8px)";
  } else {
    document.getElementById("header").style.padding = "50px 5% 0px 5%";
    document.getElementById("header").style.background = "none";
    document.getElementById("header").style.backdropFilter = "none";
  }
}



$(document).ready(function(){
    window.scrollTo(0, 0);
  });
  
  

