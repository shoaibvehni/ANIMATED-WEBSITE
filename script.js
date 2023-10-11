var crsr = document.querySelector("#cursor" )

var blur = document.querySelector("#cursor-blur" )
document.addEventListener("mousemove" , function(dets){
 crsr.style.left = dets.x+30 + "px"
 crsr.style.top = dets.y + "px"
 blur.style.left = dets.x -250  + "px"
 blur.style.top = dets.y -250  + "px"

});


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 3,
    height: "105px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers: true,
      start: "top -10%",
      end: "top -11%",
      scrub: true
    }
  });
  
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -30%",
      end: "top -100%",
      scrub: 2
    }
  });


  document.addEventListener("DOMContentLoaded", () => {
    const crsr = document.getElementById("cursor");
  
    const h4all = document.querySelectorAll("#nav h4");
  
    h4all.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        crsr.style.transform = "scale(3)";
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
      });
  
      elem.addEventListener("mouseleave", function () {
        crsr.style.transform = "scale(1)"; // Reset the scale to its original size
        crsr.style.border = "1px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e"; // Fix typo in background color
      });
    });
  });
  
gsap.from("#aboutus img,#aboutusin", {
  y: 90,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#aboutus",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 25%",
    scrub: 1,
  },
});

  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 65%",
      end: "top 70%",
      scrub: 3,
    },
  });











  













