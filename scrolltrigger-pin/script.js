var tl = gsap.timeline();

tl.to("#page2 img",{
    width: "100%",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
})

tl.from("#page2 h1",{
    fontSize: "50px",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "top -100%",
        scrub: 2,
    }
})