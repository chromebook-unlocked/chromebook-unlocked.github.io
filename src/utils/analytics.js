/**
 * Google Analytics 4 tag, emitted as the first element in <head> of every page.
 */
const { GA_MEASUREMENT_ID } = require("./constants");

function generateGoogleTag() {
  return `<!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${GA_MEASUREMENT_ID}');
  </script>`;
}

module.exports = { generateGoogleTag };
