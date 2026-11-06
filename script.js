const SITE = {
  name: "Rehana Art Studio",

  // Replace with the WhatsApp number, including country code.
  // Use digits only, without +, spaces, or dashes.
  whatsapp: "+92 3096332073",

  // Replace with the artist's Instagram profile.
  instagramUrl: "https://www.instagram.com/rehanaartist_/",

  // Replace with the artist's email address.
  email: "rehanaartist1@gmail.com",

  // Add the mailing-list signup URL here.
  // For example, a Beehiiv publication signup page.
  newsletterUrl: ""
};


/* ============================================================
   PAINTINGS
   Add, remove, or edit paintings in this list.

   status: "available" or "sold"
   price: enter a price, or leave as "" to show "Enquire for price"
   description: a short description shown in the painting popup
============================================================ */

const PAINTINGS = [
  {
    title: "No Destination",
    image: "no-destination.jpeg",
    medium: "Oil on canvas",
    size: "12 × 12 inches",
    price: "200 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "A Familiar Road",
    image: "a-familiar-road.jpeg",
    medium: "Oil on canvas",
    size: "12 × 12 inches",
    price: "200 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "Quiet Radiance",
    image: "quiet-radiance.jpeg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "270 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "Night Silence",
    image: "night-silence.jpeg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "270 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "After the Long Day",
    image: "after-the-long-day.jpg",
    medium: "Oil on canvas",
    size: "18 × 24 inches",
    price: "400 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "Midnight Glow",
    image: "midnight-glow.jpeg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "270 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "After Midnight",
    image: "after-midnight.jpeg",
    medium: "Oil on canvas",
    size: "18 × 24 inches",
    price: "470 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "In The Quiet",
    image: "in-the-quiet.jpeg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "320 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "A Light Left On",
    image: "a-light-left-on.jpeg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "Breathing Walls",
    image: "breathing-walls.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "A Light Left On",
    image: "a-light-left-on.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "Quiet Home",
    image: "quiet-home.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "Soft Silence",
    image: "soft-silence.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "A Light Left On",
    image: "a-light-left-on.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "Silent Ember",
    image: "silent-ember.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "The Quiet Night",
    image: "the-quiet-night.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "270 USD (Shipping included)",
    status: "Available",
    description: ""
  },
  {
    title: "Blue Ember Night",
    image: "blue-ember-night.jpg",
    medium: "Oil on canvas",
    size: "14 × 14 inches",
    price: "270 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "Veiled Journey",
    image: "veiled-journey.jpg",
    medium: "Oil on canvas",
    size: "18 × 24 inches",
    price: "550 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "Passing Through Silence",
    image: "passing-through-silence.jpg",
    medium: "Oil on canvas",
    size: "10 × 10 inches",
    price: "140 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "Under the Glow",
    image: "under-the-glow.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "Midnight Transit",
    image: "midnight-transit.jpg",
    medium: "Oil on canvas",
    size: "7 × 10 inches",
    price: "150 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "Fded Streets",
    image: "faded-streets.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "Silent Evening",
    image: "silent-evening.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "Far From Here",
    image: "far-from-here.jpg",
    medium: "Oil on canvas",
    size: "10 × 10 inches",
    price: "120 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "Frozen Glow",
    image: "frozen-glow.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "270 USD (Shipping included)",
    status: "available",
    description: ""
  },
  {
    title: "Blue Hour",
    image: "blue-hour.jpg",
    medium: "Oil on canvas",
    size: "12 × 18 inches",
    price: "300 USD (Shipping included)",
    status: "sold",
    description: ""
  },
  {
    title: "Hushed Winter",
    image: "hushed-winter.jpg",
    medium: "Oil on canvas",
    size: "10 × 10 inches",
    price: "150 USD (Shipping included)",
    status: "sold",
    description: ""
  },
];


/* ============================================================
   HELPERS
============================================================ */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  [...parent.querySelectorAll(selector)];

function isPlaceholder(value) {
  return !value || value.includes("REPLACE_WITH");
}

function getWhatsAppUrl(message = "") {
  if (isPlaceholder(SITE.whatsapp)) return "#";

  const number = SITE.whatsapp.replace(/\D/g, "");
  if (!number) return "#";

  const text = encodeURIComponent(message);
  return `https://wa.me/${number}${text ? `?text=${text}` : ""}`;
}

function getEmailUrl(subject = "") {
  if (isPlaceholder(SITE.email)) return "#";

  const email = SITE.email.trim();
  if (!email || !email.includes("@")) return "#";

  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

function getInstagramUrl() {
  const url = SITE.instagramUrl.trim();

  if (
    !url ||
    url.includes("REPLACE_WITH") ||
    !/^https:\/\/(www\.)?instagram\.com\//i.test(url)
  ) {
    return "#";
  }

  return url;
}

function formatPrice(price) {
  if (price === null || price === undefined || price === "") {
    return "Enquire for price";
  }

  if (typeof price === "number") {
    return `$${price.toLocaleString("en-US")}`;
  }

  return String(price);
}

function getPaintingStatus(painting) {
  return painting.status === "sold" ? "Sold" : "Available";
}

function getEnquiryMessage(painting) {
  const price = formatPrice(painting.price);

  if (painting.status === "sold") {
    return `Hello Rehana! I came across "${painting.title}" on your website and really liked it.

Painting size: ${painting.size}
Listed price: ${price}

I understand this painting has sold, but I'd love to enquire about having it recreated as a commission. Could you please share more details?

Thank you!`;
  }

  return `Hello Rehana! I'm interested in "${painting.title}" from your website.

Painting size: ${painting.size}
Listed price: ${price}

Could you please share more details about how I can purchase it?

Thank you!`;
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;

  return element;
}


/* ============================================================
   PAINTING IMAGE FALLBACK
   Shows a styled placeholder if an image filename is missing.
============================================================ */

function createPaintingImage(imageName, title) {
  const wrap = createElement("div", "painting-image-wrap");

  const img = document.createElement("img");
  img.className = "painting-image";
  img.src = imageName;
  img.alt = title;
  img.loading = "lazy";

  const fallback = createElement("div", "painting-image-fallback");
  fallback.hidden = true;

  const monogram = createElement("span", "", "R.");
  const fallbackTitle = createElement("p", "", title);
  const fallbackNote = createElement(
    "small",
    "",
    `Add ${imageName} to your repository`
  );

  fallback.append(monogram, fallbackTitle, fallbackNote);

  img.addEventListener("error", () => {
    img.style.display = "none";
    fallback.hidden = false;
  });

  wrap.append(img, fallback);

  return wrap;
}


/* ============================================================
   PAINTING GALLERY
============================================================ */

function createEnquiryLink(label, href, className, external = false) {
  const link = createElement("a", className, label);
  link.href = href;

  if (external) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  if (href === "#") {
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  }

  return link;
}

function createPaintingCard(painting, index) {
  const card = createElement("article", "painting-card");
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute(
    "aria-label",
    `View details for ${painting.title}`
  );

  const imageWrap = createPaintingImage(
    painting.image,
    painting.title
  );

  const badge = createElement(
    "span",
    `painting-badge${painting.status === "sold" ? " sold" : ""}`,
    painting.status === "sold" ? "Sold" : "Original painting"
  );

  const quickView = createElement("div", "painting-quick-view");
  quickView.append(
    createElement("span", "", "View painting"),
    createElement("span", "", "↗")
  );

  imageWrap.append(badge, quickView);

  const info = createElement("div", "painting-info");
  const infoTop = createElement("div", "painting-info-top");

  const title = createElement("h3", "painting-title", painting.title);
  const price = createElement(
    "span",
    "painting-price",
    formatPrice(painting.price)
  );

  infoTop.append(title, price);

  const medium = createElement(
    "p",
    "painting-medium",
    `${painting.medium} · ${painting.size}`
  );

  const enquiries = createElement("div", "painting-card-enquiries");

  const message = getEnquiryMessage(painting);

  const whatsappLink = createEnquiryLink(
    "WhatsApp enquiry",
    getWhatsAppUrl(message),
    "",
    true
  );

  const emailSubject = painting.status === "sold"
    ? `Commission enquiry: ${painting.title}`
    : `Painting enquiry: ${painting.title}`;

  const emailLink = createEnquiryLink(
    "Email enquiry",
    getEmailUrl(emailSubject),
    ""
  );

  enquiries.append(whatsappLink, emailLink);
  info.append(infoTop, medium, enquiries);
  card.append(imageWrap, info);

  const openCard = event => {
    if (event.target.closest(".painting-card-enquiries a")) return;
    openPaintingModal(index);
  };

  card.addEventListener("click", openCard);

  card.addEventListener("keydown", event => {
    if (
      event.target !== card ||
      (event.key !== "Enter" && event.key !== " ")
    ) {
      return;
    }

    event.preventDefault();
    openPaintingModal(index);
  });

  return card;
}

function renderGallery() {
  const gallery = $("#galleryGrid");
  if (!gallery) return;

  gallery.replaceChildren();

  PAINTINGS.forEach((painting, index) => {
    gallery.append(createPaintingCard(painting, index));
  });
}


/* ============================================================
   PAINTING DETAIL MODAL
============================================================ */

const modal = $("#paintingModal");
const modalImage = $("#modalImage");
const modalImageFallback = $("#modalImageFallback");
const modalClose = $("#modalClose");

let lastFocusedElement = null;

function openPaintingModal(index) {
  const painting = PAINTINGS[index];
  if (!painting || !modal) return;

  lastFocusedElement = document.activeElement;

  modalImage.style.display = "block";
  modalImageFallback.classList.remove("is-visible");

  modalImage.src = painting.image;
  modalImage.alt = painting.title;

  modalImage.onerror = () => {
    modalImage.style.display = "none";
    modalImageFallback.classList.add("is-visible");
  };

  $("#modalEyebrow").textContent =
    painting.status === "sold"
      ? "A PIECE FROM THE COLLECTION"
      : "AN ORIGINAL PAINTING";

  $("#modalTitle").textContent = painting.title;
  $("#modalMedium").textContent = painting.medium;
  $("#modalDescription").textContent = painting.description;
  $("#modalSize").textContent = painting.size;
  $("#modalPrice").textContent = formatPrice(painting.price);

  const status = $("#modalStatus");

  if (painting.status === "sold") {
    status.textContent = "Sold · Open for commission";
  } else {
    status.textContent = "Available · Original artwork";
  }

  const message = getEnquiryMessage(painting);

  const whatsappButton = $("#modalWhatsapp");
  const emailButton = $("#modalEmail");
  const instagramButton = $("#modalInstagram");

  if (whatsappButton) {
    whatsappButton.href = getWhatsAppUrl(message);
    if (whatsappButton.href.endsWith("#")) {
      whatsappButton.addEventListener("click", event => event.preventDefault());
    }
  }

  if (emailButton) {
    const subject = painting.status === "sold"
      ? `Commission enquiry: ${painting.title}`
      : `Painting enquiry: ${painting.title}`;

    emailButton.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    if (emailButton.href.endsWith("#")) {
      emailButton.addEventListener("click", event => event.preventDefault());
    }
  }

  if (instagramButton) {
    instagramButton.href = getInstagramUrl();
    if (instagramButton.href.endsWith("#")) {
      instagramButton.addEventListener("click", event => event.preventDefault());
    }
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modalClose.focus();
}

function closePaintingModal() {
  if (!modal || !modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

modalClose?.addEventListener("click", closePaintingModal);
$("#modalBackdrop")?.addEventListener("click", closePaintingModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closePaintingModal();
    closeMobileMenu();
  }
});


/* ============================================================
   MOBILE NAVIGATION
   Opens and closes reliably on phones.
============================================================ */

const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

function openMobileMenu() {
  if (!menuToggle || !mainNav) return;

  mainNav.classList.add("is-open");
  menuToggle.classList.add("active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation menu");
  document.body.classList.add("menu-open");
}

function closeMobileMenu() {
  if (!menuToggle || !mainNav) return;

  mainNav.classList.remove("is-open");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", event => {
  event.stopPropagation();

  const isOpen = mainNav?.classList.contains("is-open");

  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

$$("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});

document.addEventListener("click", event => {
  if (
    mainNav?.classList.contains("is-open") &&
    !mainNav.contains(event.target) &&
    !menuToggle?.contains(event.target)
  ) {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    closeMobileMenu();
  }
});


/* ============================================================
   MAILING LIST
   Set SITE.newsletterUrl above to the real signup page.
============================================================ */

function setupMailingList() {
  const mailingLink = $("#mailingListLink");
  if (!mailingLink) return;

  const url = SITE.newsletterUrl.trim();

  if (
    url &&
    /^https?:\/\//i.test(url) &&
    !url.includes("REPLACE_WITH")
  ) {
    mailingLink.href = url;
    mailingLink.target = "_blank";
    mailingLink.rel = "noopener noreferrer";

    mailingLink.addEventListener("click", () => {
      // The browser opens the configured signup page.
    });

    return;
  }

  mailingLink.href = "#mailing-list";

  mailingLink.addEventListener("click", event => {
    event.preventDefault();

    alert(
      "The mailing-list signup page has not been connected yet. Add the signup URL to SITE.newsletterUrl in script.js to activate it."
    );
  });
}


/* ============================================================
   CONTACT LINKS
============================================================ */

function setupContactLinks() {
  const whatsapp = $("#whatsappLink");
  const instagram = $("#instagramLink");
  const email = $("#emailLink");

  if (whatsapp) {
    whatsapp.href = getWhatsAppUrl(
      "Hello Rehana! I visited your art studio website and would love to enquire about your paintings."
    );

    if (whatsapp.href.endsWith("#")) {
      whatsapp.addEventListener("click", event => event.preventDefault());
    }
  }

  if (instagram) {
    instagram.href = getInstagramUrl();

    if (instagram.href.endsWith("#")) {
      instagram.addEventListener("click", event => event.preventDefault());
    }
  }

  if (email) {
    email.href = getEmailUrl("Enquiry from Rehana Art Studio website");

    if (email.href.endsWith("#")) {
      email.addEventListener("click", event => event.preventDefault());
    }
  }
}


/* ============================================================
   INITIALISE
============================================================ */

function initialiseSite() {
  renderGallery();
  setupMailingList();
  setupContactLinks();

  const year = $("#currentYear");
  if (year) year.textContent = new Date().getFullYear();
}


initialiseSite();
