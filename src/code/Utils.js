
function formatDate(date) {
  const parsedDate = new Date(date);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return parsedDate.toLocaleDateString(navigatorLanguage(), options);
}

function navigatorLanguage() {
  // eslint-disable-next-line
  return navigator.languages && navigator.languages[0] || // Chrome / Firefox
         navigator.language ||   // All browsers
         navigator.userLanguage; // IE <= 10
}

function isMainPage(mainPathname="/") {
  return window.location.pathname === mainPathname;
}

export { formatDate, navigatorLanguage, isMainPage };
