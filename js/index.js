const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//MIDDLE IMAGE
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//SELECT HEADER NAV A
let navA = document.querySelectorAll('header nav a');

//A TAGS
navA[0].textContent = siteContent.nav['nav-item-1'];
navA[1].textContent = siteContent.nav['nav-item-2'];
navA[2].textContent = siteContent.nav['nav-item-3'];
navA[3].textContent = siteContent.nav['nav-item-4'];
navA[4].textContent = siteContent.nav['nav-item-5'];
navA[5].textContent = siteContent.nav['nav-item-6'];

//STYLE EACH A TAG GREEN
navA.forEach(a => a.style.color = "green");

const firstA = document.createElement('a');
firstA.textContent = "First";

const lastA = document.createElement('a');
lastA.textContent = "Last";

//Select Header Nav
const nav = document.querySelector('header nav');
//ADD "First" to beginning of a tags
nav.prepend(firstA);
//ADD "Last" to end of the a tags
nav.appendChild(lastA);

const ctaH1 = document.querySelector('.cta h1');

//STACK H1
siteContent.cta.h1.split(" ")
  .map( word => {
    const span = document.createElement('span');
    span.textContent = word;
    return span;
})
.forEach(elem => ctaH1.appendChild(elem));

//DISPLAY BLOCK H1
document.querySelectorAll('.cta h1 span')
  .forEach(span => span.style.display = 'block');

//BUTTON
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent.cta.button;

//CTA IMAGE
const ctaimg = document.querySelector('.cta img');
ctaimg.setAttribute('src', siteContent.cta['img-src']);

//TOP HEADER 4
const topH4 = document.querySelectorAll('.top-content .text-content h4');
    topH4[0].textContent = siteContent['main-content']['features-h4'];

    topH4[1].textContent = siteContent['main-content']['about-h4'];

//TOP PARAGRAPH
const topP = document.querySelectorAll('.top-content .text-content p');
    topP[0].textContent = siteContent['main-content']['features-content'];

    topP[1].textContent = siteContent['main-content']['about-content'];

//BOTTOM HEADER 4
const bottomH4 = document.querySelectorAll('.bottom-content .text-content h4');
    bottomH4[0].textContent = siteContent['main-content']['services-h4'];

    bottomH4[1].textContent = siteContent['main-content']['product-h4'];

    bottomH4[2].textContent = siteContent['main-content']['vision-h4'];

//BOTTOM PARAGRAPH
const bottomP = document.querySelectorAll('.bottom-content .text-content p');
    bottomP[0].textContent = siteContent['main-content']['services-content'];

    bottomP[1].textContent = siteContent['main-content']['product-content'];

    bottomP[2].textContent = siteContent['main-content']['vision-content'];


//CONTACT HEADER 4
const contactH4 = document.querySelectorAll('.contact h4');

    contactH4[0].textContent = siteContent['contact']['contact-h4'];
//CONTACT PARAGRAPH
const contactP = document.querySelectorAll('.contact p');

    contactP[0].textContent = siteContent['contact']['address'];

    contactP[1].textContent = siteContent['contact']['phone'];

    contactP[2].textContent = siteContent['contact']['email'];

//FOOTER
const footer = document.querySelector('footer p');

    footer.textContent = siteContent['footer']['copyright'];









