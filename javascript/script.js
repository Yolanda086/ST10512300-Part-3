const contactForm =
document.getElementById("contactForm");

if(contactForm){

}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {

    const hamburger =
        document.getElementById("hamburger");

    const navLinks =
        document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

});

let currentSlide = 0;

const slides =
document.querySelectorAll(".slide");

function showSlide(){

slides.forEach(slide =>
slide.classList.remove("active"));

slides[currentSlide]
.classList.add("active");

currentSlide =
(currentSlide + 1) %
slides.length;
}

if(slides.length > 0){
showSlide();
setInterval(showSlide,4000);
}

// Footer
function subscribeNewsletter(){

const email =
document.getElementById(
"newsletterEmail").value;

if(email===""){
alert("Please enter email");
return;
}

alert("Successfully subscribed!");
}

const scrollBtn =
document.getElementById(
"scrollTopBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){
scrollBtn.style.display="block";
}
else{
scrollBtn.style.display="none";
}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const volunteerForm =
document.getElementById(
"volunteerForm");

if(volunteerForm){

volunteerForm.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Thank you for applying as a volunteer!"
);

});

}

let testimonialIndex = 0;

const testimonials =
document.querySelectorAll(".testimonial");

function rotateTestimonials(){

testimonials.forEach(testimonial =>
testimonial.classList.remove("active-testimonial"));

testimonialIndex++;

if(testimonialIndex >= testimonials.length){
testimonialIndex = 0;
}

testimonials[testimonialIndex]
.classList.add("active-testimonial");

}

if(testimonials.length > 0){

setInterval(
rotateTestimonials,
4000
);

}


// About Page

// Team Member Information

function toggleMember(card){

    const descriptions =
        document.querySelectorAll(".member-description");

    descriptions.forEach(desc => {

        if(desc !== card.querySelector(".member-description")){
            desc.classList.remove("show");
        }

    });

    card.querySelector(".member-description")
        .classList.toggle("show");
}

// Mission and Vision Buttons
function showMission() {
    alert(
        "Our Mission:\nOur mission is to empower our youth living in disadvantaged communities through digital skills training and employement opportunities.To deliver high-quality technology solutions that empower businesses and individuals through innovation and excellence."
    );
}

function showVision() {
    alert(
        "Our Vision:\nTo build a future where every individual has the technical agency and advantage to thrive in digital economy."
    );
}

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });
});

// FAQ Toggle Function

document.addEventListener("DOMContentLoaded", () => {

    const questions =
    document.querySelectorAll(".faq-question");

    questions.forEach(question => {

        question.addEventListener("click", () => {

            const answer =
            question.nextElementSibling;

            answer.classList.toggle("show");

        });

    });

});


// Search Function

function searchFAQ() {

    const input = document.getElementById("searchInput").value.toLowerCase();

    const faqCards = document.querySelectorAll(".faq-card");

    faqCards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}
let selectedAmount = 0;

// Select predefined amount
function selectAmount(amount) {

    selectedAmount = amount;

    document.getElementById("customAmount").value = amount;

}

// Donate function
function donate() {

    const customAmount = document.getElementById("customAmount").value;

    const donationAmount = customAmount || selectedAmount;

    if (donationAmount === "" || donationAmount <= 0) {

        alert("Please enter or select a donation amount.");

        return;
    }

    alert(
        "Thank you for your donation of R" +
        donationAmount +
        " to Fuse Techni NPC!"
    );

}
function selectAmount(amount) {

    selectedAmount = amount;

    document.getElementById("customAmount").value = amount;

    const buttons = document.querySelectorAll(".amounts button");

    buttons.forEach(button => {
        button.classList.remove("selected");
    });

    event.target.classList.add("selected");
}

function toggleDescription(card) {

    const descriptions =
        document.querySelectorAll(".service-description");

    descriptions.forEach(desc => {
        if (desc !== card.querySelector(".service-description")) {
            desc.classList.remove("show");
        }
    });

    card.querySelector(".service-description")
        .classList.toggle("show");
}

function showReason(card){

    const descriptions =
        document.querySelectorAll(".reason-description");

    descriptions.forEach(description => {

        if(description !== card.querySelector(".reason-description")){
            description.classList.remove("show");
        }

    });

    card.querySelector(".reason-description")
        .classList.toggle("show");
}

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


const galleryImages =
document.querySelectorAll(".gallery-img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});

if(closeLightbox){

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

if(lightbox){

    lightbox.addEventListener("click", e => {

        if(e.target === lightbox){

            lightbox.style.display = "none";

        }

    });

}

document.addEventListener("DOMContentLoaded", function(){

    const hamburger =
        document.getElementById("hamburger");

    const navLinks =
        document.getElementById("navLinks");

    if(hamburger && navLinks){

        hamburger.addEventListener("click", function(){

            navLinks.classList.toggle("active");

        });

    }

});