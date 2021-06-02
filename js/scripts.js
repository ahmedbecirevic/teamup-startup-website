/*!
* Start Bootstrap - Grayscale v7.0.0 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

$("#submit-email-button").click(function(event){
    event.preventDefault();
  });

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


function sendEmail() {
    let email = document.getElementById("submit-email").value
    let alert = document.getElementById("email-sent-alert")
    Email.send({
      Host: "smtp.gmail.com",
      Username: "ahmed.becirevic@stu.ibu.edu.ba",
      Password: "/",
      To: "adi.lagumdzija@stu.ibu.edu.ba",
      From: "ahmed.becirevic@stu.ibu.edu.ba",
      Subject: "New person subscribed!",
      Body: "New person has submitet their email: " + email,
    })
      .then(function (message) {
        alert.style.display = "block"
        setTimeout(function() {
            $('#email-sent-alert').fadeOut(1500);
        }, 4000);
      });
  }