/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects_container", {
    
    loop: true,
    spaceBetween:24,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
    },

    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
      },
  });
  


/*=============== Submit button animation and Email JS ===============*/

const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactProject = document.getElementById('contact-project'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    // Add and remove color
    contactMessage.classList.remove('color-blue');
    contactMessage.classList.add('color-red');

    // Show message
    contactMessage.textContent = 'Write all the input field 📩';

    // Reset button text and remove animation class
    btnText.innerHTML = "Submit";
    btn.classList.remove("active");
  } else {
    // serviceID - templateID - #form -publicKey
    emailjs.sendForm('service_f7e4kfk', 'template_trk3wdk', '#contact-form', 'LAxcr6Ci_nfkkEWpL')
      .then(() => {
        // Show message and add color 
        contactMessage.textContent = 'Message sent ✅';

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);

        // Reset button text and remove animation class
        btnText.innerHTML = "Submit";
        btn.classList.remove("active");

        // Clear input fields
        contactName.value = '';
        contactEmail.value = '';
        contactProject.value = '';
      })
      .catch((error) => {
        alert('OOPS! SOMETHING HAS FAILED....', error);

        // Reset button text and remove animation class
        btnText.innerHTML = "Submit";
        btn.classList.remove("active");
      });
      
    // Update button text to indicate sending
    btnText.innerHTML = "Sending..."; 
    btn.classList.add("active");
  }
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href="#' + sectionId + '"]');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            // Add active class to menu item if section is in view
            sectionsClass.classList.add('active-link');
        } else {
            // Remove active class if section is not in view
            sectionsClass.classList.remove('active-link');
        }
    });
}

// Initial call to ensure proper activation when page loads
scrollActive();

// Listen for scroll events
window.addEventListener('scroll', scrollActive);



/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== Resume download ===============*/ 

document.getElementById('downloadButton').addEventListener('click', function() {
  // Replace 'saksham-resume.pdf' with the actual path to your resume PDF file
  var fileUrl = '/assets/img/Saksham-version.pdf';

  // Creating a temporary anchor element
  var a = document.createElement('a');
  a.href = fileUrl;

  // Setting the file name
  a.download = 'Saksham-Resume.pdf';

  // Appending the anchor to the body and triggering the click event
  document.body.appendChild(a);
  a.click();

  // Removing the anchor from the body
  document.body.removeChild(a);
});



/*=============== DARK LIGHT THEME ===============*/ 

function myFunction() {
  var element = document.body;
  var themeButton = document.getElementById('theme-button');
  var iconThemeMoon = 'ri-moon-line';
  var iconThemeSun = 'ri-sun-line';

  // Toggle dark theme
  element.classList.toggle("dark-theme");

  // Toggle moon and sun icons based on the current theme
  if (element.classList.contains("dark-theme")) {
    themeButton.classList.remove(iconThemeMoon);
    themeButton.classList.add(iconThemeSun);
  } else {
    themeButton.classList.remove(iconThemeSun);
    themeButton.classList.add(iconThemeMoon);
  }
}

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true /* Animation repeat */
});

sr.reveal('.home_data, .projects_container, .footer_container')
sr.reveal('.home_info div', {Delay: 600, origin: 'bottom', interval:100})
sr.reveal('.skills_content:nth-child(1), .contact_content:nth-child(1)', {origin: 'left'})
sr.reveal('.skills_content:nth-child(2), .contact_content:nth-child(2)', {origin: 'right'})
sr.reveal('.qualification_content, .services_card', {interval: 100})


