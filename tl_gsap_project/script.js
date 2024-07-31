document.addEventListener("DOMContentLoaded", function() {
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body");

    body.addEventListener("mousemove", function(e) {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
        });
    });
});

