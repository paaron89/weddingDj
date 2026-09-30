(function () {
  "use strict";

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Sticky header shadow
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  function setMenu(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setMenu(!menu.classList.contains("open"));
  });

  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });

  // Package buttons pre-select the package in the form
  var packageSelect = document.getElementById("package");
  document.querySelectorAll("[data-package]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      packageSelect.value = btn.dataset.package;
    });
  });

  // Gallery lightbox
  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.innerHTML =
    '<button class="lightbox-close" aria-label="Close">&times;</button>' +
    '<div><div class="lightbox-frame"></div><p class="lightbox-caption"></p></div>';
  document.body.appendChild(lightbox);

  var frame = lightbox.querySelector(".lightbox-frame");
  var caption = lightbox.querySelector(".lightbox-caption");
  var lastFocus = null;

  function openLightbox(item) {
    lastFocus = item;
    frame.style.background = getComputedStyle(item).backgroundImage;
    caption.textContent = item.querySelector("figcaption").textContent;
    lightbox.classList.add("open");
    lightbox.querySelector(".lightbox-close").focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll(".g-item").forEach(function (item) {
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.addEventListener("click", function () { openLightbox(item); });
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(item);
      }
    });
  });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target.closest(".lightbox-close")) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
  });

  // Reveal sections on scroll
  var revealTargets = document.querySelectorAll(".section-head, .card, .package, .quote, .about > *, .g-item");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  // Enquiry form validation
  var form = document.getElementById("enquiry-form");
  var status = form.querySelector(".form-status");
  var dateInput = document.getElementById("date");

  // Wedding date can't be in the past
  var today = new Date();
  dateInput.min = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  function setError(input, message) {
    var field = input.closest(".field");
    var error = field.querySelector(".error");
    field.classList.toggle("invalid", Boolean(message));
    if (message) {
      if (!error) {
        error = document.createElement("span");
        error.className = "error";
        field.appendChild(error);
      }
      error.textContent = message;
    } else if (error) {
      error.remove();
    }
  }

  function validate() {
    var valid = true;
    var names = form.names;
    var email = form.email;
    var date = form.date;

    if (!names.value.trim()) {
      setError(names, "Please tell me your names.");
      valid = false;
    } else {
      setError(names, "");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      setError(email, "Please enter a valid email address.");
      valid = false;
    } else {
      setError(email, "");
    }

    if (!date.value) {
      setError(date, "Please choose your wedding date.");
      valid = false;
    } else if (date.value < date.min) {
      setError(date, "That date has already passed.");
      valid = false;
    } else {
      setError(date, "");
    }

    return valid;
  }

  form.addEventListener("input", function (e) {
    if (e.target.closest(".field.invalid")) validate();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) {
      status.textContent = "";
      var firstInvalid = form.querySelector(".field.invalid input");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Sample site: no backend. Hook this up to a form service or API later.
    var names = form.names.value.trim();
    var date = new Date(form.date.value + "T00:00:00").toLocaleDateString(undefined, {
      day: "numeric", month: "long", year: "numeric"
    });
    status.textContent = "Thanks, " + names + "! I'll check " + date + " and get back to you within 24 hours.";
    form.reset();
  });
})();
