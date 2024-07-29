let cursor = document.querySelector(".cursor")

let body = document.querySelector(".body")
let scalingItems = document.querySelectorAll("nav a,.hero_heading a")



body.addEventListener("mousemove", function(e){
    gsap.to(cursor,{
        x: e.x,
        y: e.y,
        duration: 0.5,
    })
})
body.addEventListener("mouseenter", function(e){
    gsap.to(cursor,{
        scale: 1,
        duration: 0.3
    })
})
body.addEventListener("mouseleave", function(e){
    gsap.to(cursor,{
        scale: 0,
        duration: 0.3
    })
})

scalingItems.forEach(function(eachItem){
    console.log(eachItem)
   
    eachItem.addEventListener("mouseenter", function(e){
        gsap.to(cursor,{
            scale: 2.5,
            duration: 0.3,
            mixBlendMode: "difference",
            zIndex: 100,
            ease: "bounch.out"
        })
    })
    eachItem.addEventListener("mouseleave", function(e){
        gsap.to(cursor,{
            scale: 1,
            duration: 0.3,
            mixBlendMode: "normal",
            zIndex: 0,
        })
    })
})


