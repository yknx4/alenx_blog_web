
function formatDate(date) {
  date = new Date(date);
  const options = {
    weekday: 'long', year: 'numeric', month: 'short',
    day: 'numeric',
  };

  return date.toLocaleDateString(navigatorLanguage(), options);
}

function navigatorLanguage() {
  // eslint-disable-next-line
  return navigator.languages && navigator.languages[0] || // Chrome / Firefox
         navigator.language ||   // All browsers
         navigator.userLanguage; // IE <= 10
}

export { formatDate, navigatorLanguage };
