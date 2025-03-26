/* Script for navigation */
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'white';
    link.style.transition = 'color 0.3s';
    link.querySelector('before').style.opacity = '100';
    link.querySelector('before').style.transition = 'opacity 0.3s';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = 'gray';
    link.querySelector('before').style.opacity = '0';
  });
});

/* Script for cookie_consent */
const cookieConsent = document.getElementById('cookie-consent');
const acceptCookies = () => {
  cookieConsent.style.opacity = '0';
  setTimeout(() => {
    cookieConsent.style.display = 'none';
  }, 300);
};
window.addEventListener('DOMContentLoaded', () => {
  cookieConsent.classList.add('animate-fadeInUp');
});
  { transform: 'translateY(20px)', opacity: '0' },
  { transform: 'translateY(0)', opacity: '1' }
];
const fadeInUpOptions = {
};
const fadeInUpAnimation = cookieConsent.animate(fadeInUpKeyframes, fadeInUpOptions);

