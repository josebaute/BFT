// Cookie Consent Manager
(function () {
  const COOKIE_NAME = "bftech_cookie_consent";
  const COOKIE_EXPIRY = 365; // days

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function showBanner() {
    const banner = document.getElementById("cookie-banner");
    if (banner) {
      banner.style.display = "flex";
    }
  }

  function hideBanner() {
    const banner = document.getElementById("cookie-banner");
    if (banner) {
      banner.style.display = "none";
    }
  }

  function loadAnalytics() {
    // Load Google Analytics if consent given
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-EH3F5LSJBX";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-EH3F5LSJBX");
  }

  function acceptCookies() {
    setCookie(COOKIE_NAME, "accepted", COOKIE_EXPIRY);
    hideBanner();
    loadAnalytics();
  }

  function rejectCookies() {
    setCookie(COOKIE_NAME, "rejected", COOKIE_EXPIRY);
    hideBanner();
  }

  // Check consent on page load
  document.addEventListener("DOMContentLoaded", function () {
    const consent = getCookie(COOKIE_NAME);

    if (consent === null) {
      // No consent yet, show banner
      showBanner();
    } else if (consent === "accepted") {
      // Consent already given, load analytics
      loadAnalytics();
    }

    // Attach event listeners
    const acceptBtn = document.getElementById("cookie-accept");
    const rejectBtn = document.getElementById("cookie-reject");
    const settingsBtn = document.getElementById("cookie-settings");

    if (acceptBtn) {
      acceptBtn.addEventListener("click", acceptCookies);
    }
    if (rejectBtn) {
      rejectBtn.addEventListener("click", rejectCookies);
    }
    if (settingsBtn) {
      settingsBtn.addEventListener("click", function () {
        window.location.href = "/politica-privacidad.html#cookies";
      });
    }
  });
})();
