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
//Nav links
let nav=document.querySelectorAll('nav a');
nav.forEach((element,i)=>{
   element.textContent=siteContent["nav"]["nav-item-"+(i+1)];
   element.style.color="green";
});

//New Nav Items
let navbar=document.querySelector('nav');
console.log(navbar);
let newNav1=document.createElement('a');
let newNav2=document.createElement('a');
newNav1.textContent="Whatever";
newNav2.textContent="You Want";
navbar.prepend(newNav1);
navbar.append(newNav2);


// console.log(nav);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Cta Section
let cta=document.querySelector('.cta-text h1');
let ctaMsg=siteContent["cta"]["h1"];
let pos=ctaMsg.indexOf("Is");
ctaMsg=ctaMsg.substring(0,pos)+"<BR>"+ctaMsg.substring(pos+2,3)+"<BR>"+ctaMsg.substring(pos+2);
cta.innerHTML=ctaMsg;

let button=document.querySelector('.cta-text button');
button.textContent=siteContent["cta"]["button"];

let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"])

//Main Content

let main=document.querySelectorAll('.text-content');

// for (i=0;i<main.length;i++){
//   console.log(main[i]);
// }

main[0].childNodes[1].textContent= siteContent["main-content"]["features-h4"];
main[0].childNodes[3].textContent= siteContent["main-content"]["features-content"];

main[1].childNodes[1].textContent= siteContent["main-content"]["about-h4"];
main[1].childNodes[3].textContent= siteContent["main-content"]["about-content"];

main[2].childNodes[1].textContent= siteContent["main-content"]["services-h4"];
main[2].childNodes[3].textContent= siteContent["main-content"]["services-content"];

main[3].childNodes[1].textContent= siteContent["main-content"]["product-h4"];
main[3].childNodes[3].textContent= siteContent["main-content"]["product-content"];

main[4].childNodes[1].textContent= siteContent["main-content"]["vision-h4"];
main[4].childNodes[3].textContent= siteContent["main-content"]["vision-content"];

//Middle image
let middleLogo = document.getElementById("middle-img");
middleLogo.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Contact Section
let contact=document.querySelector('.contact');
contact.childNodes[1].textContent=siteContent["contact"]["contact-h4"];
let addressArray = siteContent['contact']['address'].split(' ');
addressArray.splice(4, 0, '\r\n');
contact.childNodes[3].innerText=addressArray.join(' ');
contact.childNodes[5].textContent=siteContent["contact"]["phone"];
contact.childNodes[7].textContent=siteContent["contact"]["email"];

//Footer
let footer=document.querySelector('footer');
footer.textContent=siteContent["footer"]["copyright"];


// console.log(contact.childNodes[]);

//Button Listener
let alertButton=document.querySelector('button');
alertButton.addEventListener('click',event=>{
  // alert("You clicked a button!");
  let area=document.querySelector('.cta-text');
  area.style.backgroundColor="red";

  setTimeout(function(){
    area.style.backgroundColor="white";
    }
  , 3000);
})


