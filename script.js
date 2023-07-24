// lazy loading start

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

    // else{
    //   entry.target.classList.remove('show');
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// lazy loading end

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});



 function CambosTabs(val){
  if(val==='samosa-cambos'){
        document.querySelector(".samosa-combos-tab-content").style.display="block";
        document.querySelector(".idly-vada-combos-tab-content").style.display = "none";
        document.querySelector(".rice-combos-tab-content").style.display = "none";
        document.querySelector(".snack-combos-tab-content").style.display = "none";

        document.querySelector(".samosa-combos-tab-p").style.color="#eb0029";
        document.querySelector(".idly-vada-combos-tab-p").style.color = "black";
        document.querySelector(".rice-combos-tab-p").style.color = "black";
        document.querySelector(".snack-combos-tab-p").style.color = "black";
  }
  else if(val==='idly-vada-combos'){
        
        document.querySelector(".idly-vada-combos-tab-content").style.display = "block";
        document.querySelector(".samosa-combos-tab-content").style.display="none";
        document.querySelector(".rice-combos-tab-content").style.display = "none";
        document.querySelector(".snack-combos-tab-content").style.display = "none";

        document.querySelector(".idly-vada-combos-tab-p").style.color="#eb0029";
        document.querySelector(".samosa-combos-tab-p").style.color = "black";
        document.querySelector(".rice-combos-tab-p").style.color = "black";
        document.querySelector(".snack-combos-tab-p").style.color = "black";
   }
   else if(val==='rice-combos'){
        document.querySelector(".rice-combos-tab-content").style.display = "block";
        document.querySelector(".samosa-combos-tab-content").style.display="none";
        document.querySelector(".idly-vada-combos-tab-content").style.display = "none";
        document.querySelector(".snack-combos-tab-content").style.display = "none";

        document.querySelector(".rice-combos-tab-p").style.color="#eb0029";
        document.querySelector(".idly-vada-combos-tab-p").style.color = "black";
        document.querySelector(".samosa-combos-tab-p").style.color = "black";
        document.querySelector(".snack-combos-tab-p").style.color = "black";
   }
   else if(val==='snack-combos'){
        document.querySelector(".snack-combos-tab-content").style.display = "block";
        document.querySelector(".samosa-combos-tab-content").style.display="none";
        document.querySelector(".idly-vada-combos-tab-content").style.display = "none";
        document.querySelector(".rice-combos-tab-content").style.display = "none";

        document.querySelector(".snack-combos-tab-p").style.color="#eb0029";
        document.querySelector(".idly-vada-combos-tab-p").style.color = "black";
        document.querySelector(".rice-combos-tab-p").style.color = "black";
        document.querySelector(".samosa-combos-tab-p").style.color = "black";
   }
 }



