

paceOptions = {
    ajax: true,  //Checks AJAX requests
    document: true //Document is ready
}
Pace.on('done', () => {

    gsap.timeline()
    .add('p')
    .to('.pace', {
        transform: 'scale(10, 1)',
        duration: 4 
    }, "+=.2")
    .to('.pace', {
        duration: 1, 
        height: "100%"
    }, "-=2.5")
    .to('.loading__text', {
        delay: .2, 
        duration: 3, 
        opacity: 0, 
        yPercent: -400, 
        ease: "BezierEasing(0.19,1,0.22,1)"
    }, 'p')
    .to('.title', {
        duration: 2, 
        delay: .3, 
        y: -10, 
        opacity: 1,
        ease: Expo.easeInOut
    }, '-=2.5')
    .to('.title', {
        duration: 2, 
        delay: .3, 
        y: -10, 
        opacity: 1,
        ease: Expo.easeInOut
    }, '-=2.5')
    .call(() => {
        document.querySelector('.pace').style.display = 'none';
        document.querySelector("#preloader").style.display = 'none';
        document.querySelector(".title").style.display = 'none';
    });
})


gsap.from("nav", {duration: 0.5, delay: 5.5, x: "-1000px", ease: "power2.out", opacity: 0})
gsap.from(".container .content", {duration: 2, delay: 5.5, x: "-1000px", ease: "power2.out"})
gsap.from(".container .content .icons", {duration: 4, delay: 5.5, x: "-100px", ease: "power2.out", stagger: 0.8})
gsap.from(".container .content .icons img", {duration: 0.9, delay: 5.5, y: "1000px", ease: "power2.out", stagger: 0.2})
gsap.from(".container img", {duration: 1, delay: 5.1, x: "100%", ease: "power2.out"})

gsap.registerPlugin(ScrollTrigger);



gsap.from(".about-me h1", {
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-me h1",
        toggleActions: 'play pause reverse reserve',
   
    },
    opacity: 0,
    ease: "power2.out"
})
gsap.from(".about-me img", {
    x: -700,
    duration: 0.5,
    scrollTrigger: ".about-me img",
    ease: "power2.out"
})
gsap.from(".about-me .info-about-me", {
    x: -700,
    duration: 0.5,
    scrollTrigger: ".about-me .info-about-me",
    ease: "power2.out"
})
gsap.from(".about-me .info-about-me .contain-sticky h2", {
    x: 700,
    duration: 1,
    scrollTrigger: ".about-me .info-about-me",
    ease: "power2.out"
})









gsap.from(".services h1", {
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".services h1",
        toggleActions: 'play pause reverse reserve',
    },
    opacity: 0,
    ease: "power2.out"
})
gsap.from(".services .conser1", {
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".services .conser1",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    ease: "power2.out"
})
gsap.from(".services .serskill1 h3", {
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".services .serskill1",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out"
})
gsap.from(".services .conser2", {
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".services .conser2",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    ease: "power2.out"
})
gsap.from(".services .serskill2 h3", {
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".services .serskill2",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out"
})

gsap.from(".projects h1", {
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".projects h1",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out"
})
gsap.from(".projects .projects-content .proj1", {
    x: -700,
    duration: 2,
    scrollTrigger: {
        trigger: ".projects .projects-content .proj1",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out"
})
gsap.from(".projects .projects-content .proj2", {
    x: -700,
    y: 100,
    duration: 2,
    scrollTrigger: {
        trigger: ".projects .projects-content .proj2",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out"
})
gsap.from(".projects .projects-content .proj3", {
    x: 700,
    y: -100,
    duration: 2,
    scrollTrigger: {
        trigger: ".projects .projects-content .proj3",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out"
})
gsap.from(".projects .projects-content .proj4", {
    x: -700,
    y: -100,
    duration: 2,
    scrollTrigger: {
        trigger: ".projects .projects-content .proj4",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out"
})
gsap.from(".projects .projects-content .proj5", {
    x: 700,
    y: -100,
    duration: 2,
    scrollTrigger: {
        trigger: ".projects .projects-content .proj5",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out"
})



gsap.from(".contact-me h1", {
    x: -700,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-me h1",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
})
gsap.from(".contact-me .content-contact", {
    x: -700,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-me .content-contact",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    delay: 1
})
gsap.from(".contact-me .content-contact h2", {
    x: -700,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-me .content-contact h2",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    delay: 1,
    marker: true
})
gsap.from(".contact-me .content-contact input", {
    x: -700,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-me .content-contact h2",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    delay: 1,
    marker: true
})
gsap.from(".contact-me .content-contact button", {
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-me .content-contact button",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    delay: 1,
    marker: true
})
gsap.from(".contact-me .details", {
    x: 700,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-me .details",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    delay: 1,
    marker: true
})
gsap.from(".contact-me .details ul li", {
    x: -700,
    duration: 1,
    scrollTrigger: {
        trigger: ".contact-me .details",
        toggleActions: 'play pause reverse reserve'
    },
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    delay: 1,
    marker: true
})