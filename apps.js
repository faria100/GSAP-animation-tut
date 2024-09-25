const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

// Use gsap.timeline() instead of TimelineLite()
const tl = gsap.timeline({ paused: true, reversed: true });

tl.to(".cover", 1, {
    width: "60%",
    ease: "power2.out"
})
.to("nav", 1, {
    height: "100%",
    ease: "power2.out"
}, "-=0.5")
.fromTo('.nav-open', 0.5, {
    opacity: 0,
    x: 50,
    ease: "power2.out"
}, {
    opacity: 1,
    x: 0,
    onComplete: function() {
        navOpen.style.pointerEvents = "auto";
        console.log('done');
    }
});

// Toggle the animation when the button is clicked
navButton.addEventListener("click", (e) => {
    if (tl.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(tl);
});

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();  // Call play() or reverse()
}
