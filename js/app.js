$(function(){
    let section1sqr = $("#section1sqr");
    let section2rect = $("#section2rect");
    let section3circle = $("#section3circle");
    console.log(section1sqr);
    console.log(section2rect);
    console.log(section3circle);
    // jQuery methods go here...
gsap.to(section1sqr, {x: 200, duration: 10})
  });