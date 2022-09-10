

//Start navbar
var sections = document.querySelectorAll("section");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  // console.log(id);
  var selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
      
    });
  });
});
var nav=document.querySelector("nav");
var links=document.querySelectorAll("nav .nav-item .nav-link");
var logo=document.querySelector("nav .navbar-brand img ");
console.log(links);
console.log(logo);
window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    if(window.scrollY>=50)
    {
        nav.classList.add("active_nav");
       
        links.forEach((link)=>
            {
                link.classList.add("active_links");

            });
            logo.setAttribute("src", "images/logo-dark.png");


    }
    else
    {
        nav.classList.remove("active_nav");
        links.forEach((link)=>
            {
                link.classList.remove("active_links");

            });
            logo.setAttribute("src", "images/logo-light.png");

        
    }
})
//End navbar

//Start counter
var counter=document.querySelectorAll(".count p");
var Section=document.querySelector(".counter");
let started=false;
window.onscroll=function(){
  if(window.scrollY>=Section.offsetTop)
  {
    if(!started)
    {
      counter.forEach((count=>{
        StartCount(count);
      }))
    }
    started=true;
    
  }
}


function StartCount(el)
{
  let Goal=el.dataset.goal;
  let count=setInterval(()=>{
    el.textContent++;
    if(el.textContent==Goal)
    {
      clearInterval(count);
    }

  },4000/Goal);
}
/*portfolio*/
var Links=document.querySelectorAll(".links a");
var LinksArray=Array.from(Links);
var images=document.querySelectorAll(".images img");
var imagesArray=Array.from(images);
console.log(Links);
console.log(images);
LinksArray.forEach((link)=>{
  link.addEventListener("click", function (e) {
    // console.log(ele);
    LinksArray.forEach((link) => {
      link.classList.remove("Active");
    });
    e.currentTarget.classList.add("Active");
   imagesArray.forEach((img)=>{
    img.style.display="none";
   });
   if(e.currentTarget.dataset.cont=="All")
   {
    
    imagesArray.forEach((img)=>{
      img.style.display="block";
     });
   }
  
   else
   {
    let image=document.querySelectorAll(e.currentTarget.dataset.cont);
    image.forEach((Img)=>{
      Img.style.display="block";
    })
   }
  

});
});
// coding with nick
// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer
    ;
// coding with nick
window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }
// coding with nick
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }
    playSlide(currentSlide);

}
// coding with nick


