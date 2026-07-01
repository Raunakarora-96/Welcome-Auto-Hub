// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}


// ===========================
// HERO IMAGE SLIDER
// ===========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if(slides.length > 0){

    setInterval(nextSlide, 4000);

}


// ===========================
// PRODUCT ENQUIRY POPUP
// ===========================

const popup = document.getElementById("popup");

const enquireButtons =
document.querySelectorAll(".enquire-btn");

const closePopup =
document.querySelector(".close-popup");

enquireButtons.forEach(button => {

    button.addEventListener("click", () => {

        popup.style.display = "flex";

    });

});

if(closePopup){

    closePopup.addEventListener("click", () => {

        popup.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.style.display = "none";

    }

});


// ===========================
// POPUP FORM
// ===========================

const popupForm =
document.getElementById("popupForm");

if(popupForm){

    popupForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you! Your enquiry has been submitted. We will contact you shortly."
        );

        popupForm.reset();

        popup.style.display = "none";

    });

}


// ===========================
// COUNTER ANIMATION
// ===========================

const counters =
document.querySelectorAll(".counter");

const speed = 100;

function startCounter(counter){

    const target =
    +counter.getAttribute("data-target");

    let count = 0;

    const updateCounter = () => {

        const increment =
        Math.ceil(target / speed);

        count += increment;

        if(count >= target){

            counter.innerText = target;
        }
        else{

            counter.innerText = count;

            setTimeout(updateCounter, 20);

        }

    };

    updateCounter();

}

const counterSection =
document.querySelector(".stats");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if(counterSection){

        const sectionTop =
        counterSection.offsetTop - 400;

        if(window.scrollY > sectionTop &&
        !counterStarted){

            counters.forEach(counter => {

                startCounter(counter);

            });

            counterStarted = true;

        }

    }

});


// ===========================
// HEADER SHADOW ON SCROLL
// ===========================

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 4px 20px rgba(0,0,0,0.3)";

        header.style.background =
        "#111";

    }
    else{

        header.style.boxShadow =
        "none";

    }

});


// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

const revealElements =
document.querySelectorAll(
".category-card, .product-card, .stat-box"
);

function reveal(){

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const elementTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ===========================
// PRODUCT CARD ANIMATION
// ===========================

const productCards =
document.querySelectorAll(".product-card");

productCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});


// ===========================
// CATEGORY CARD ANIMATION
// ===========================

const categoryCards =
document.querySelectorAll(".category-card");

categoryCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";

    });

});


// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===========================
// CONTACT FORM VALIDATION
// ===========================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
        contactForm.querySelector(
        'input[type="text"]');

        const email =
        contactForm.querySelector(
        'input[type="email"]');

        if(name.value.trim() === ""){

            alert("Please enter your name");

            return;
        }

        if(email.value.trim() === ""){

            alert("Please enter your email");

            return;
        }

        alert(
        "Message Sent Successfully!"
        );

        contactForm.reset();

    });

};


// ===========================
// PRELOADER SUPPORT
// ===========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ===========================
// CONSOLE MESSAGE
// ===========================

console.log(
"Welcome Auto Hub Website Loaded Successfully"
);