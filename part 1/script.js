// var tl = gsap.timeline();

// // Move box1 to the right
// tl.to(".box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
// });

// // Move box1 back to the original position using tl.from
// tl.from(".box2", {
//     x:1000,
//     duration: 2,
//     delay: 1,
// });



gsap.to(".box1, .box2",{
    x: 1000,
    duration: 1,
    delay:1,
    rotate: 360,
    stagger: 1,
    repeat: -1,
    yoyo: true
    

})