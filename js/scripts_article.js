/* Script for cookie_consent */
document.addEventListener('DOMContentLoaded', () => {
  const cookieConsent = document.getElementById('cookie-consent');
  const acceptButton = cookieConsent.querySelector('button');
  acceptButton.addEventListener('click', () => {
    acceptCookies();
    cookieConsent.classList.add('hidden');
  });
});
function acceptCookies() {
}

