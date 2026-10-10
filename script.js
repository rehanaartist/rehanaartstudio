
/* ==========================================================
   REHANA ART STUDIO
   Website settings and painting collection
========================================================== */

const SITE = {
  name: "Rehana Art Studio",

  // Enter the WhatsApp number with country code and digits only.
  // Example format: "923001234567"
  whatsapp: "REPLACE_WITH_WHATSAPP_NUMBER",

  // Enter her Instagram profile URL.
  instagramUrl: "https://www.instagram.com/REPLACE_WITH_USERNAME/",

  // Enter her email address.
  email: "REPLACE_WITH_EMAIL_ADDRESS",

  // Optional: add her mailing-list signup URL.
  // Leave as "" until the signup page is ready.
  newsletterUrl: ""
};


/* ==========================================================
   PAINTING COLLECTION

   image: exact filename uploaded to the repository root
   status: "available" or "sold"
   price: displayed price, e.g. "$250" or "Enquire for price"
   size: canvas dimensions
   medium: painting medium
   description: short artwork description

   Add new paintings by copying one object and editing it.
========================================================== */

const paintings = [
  {
    image: "quiet-evening.JPG",
    title: "A Quiet Evening",
    status: "available",
    price: "Enquire for price",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description:
      "A quiet scene shaped by fading light, gentle shadows, and the feeling of a day slowly coming to an end."
  },
  {
    image: "the-old-house.JPG",
    title: "The Old House",
    status: "available",
    price: "Enquire for price",
    size: "12 × 16 inches",
    medium: "Oil on canvas",
    description:
      "An old house held in the stillness of its surroundings, inviting the viewer to imagine the lives and memories within."
  },
  {
    image: "after-the-rain.JPG",
    title: "After the Rain",
    status: "available",
    price: "Enquire for price",
    size: "16 × 20 inches",
    medium: "Oil on canvas",
    description:
      "A contemplative landscape where softened colours and lingering atmosphere evoke the quiet that follows rainfall."
  },
  {
    image: "the-last-light.JPG",
    title: "The Last Light",
    status: "available",
    price: "Enquire for price",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description:
      "The last warmth of daylight rests on a familiar scene, capturing the fleeting beauty of a moment almost gone."
  },
  {
    image: "a-distant-place.JPG",
    title: "A Distant Place",
    status: "sold",
    price: "Sold",
    size: "12 × 18 inches",
    medium: "Oil on canvas",
    description:
      "A remembered place suspended between familiarity and distance. This original painting has found its home, but similar work may be commissioned."
  },
  {
    image: "winter-window.JPG",
    title: "Winter Window",
    status: "available",
    price: "Enquire for price",
    size: "10 × 12 inches",
    medium: "Oil on canvas",
    description:
      "A study in atmosphere, warmth, and the quiet contrast between a sheltered interior and the world beyond."
  }
];


/* ==========================================================
   HELPERS
========================================================== */

const $ = (selector, root = document) => root.querySelector(selector);

const normaliseStatus = (status) =>
  String(status || "available").trim().toLowerCase() === "sold"
    ? "sold"
    : "available";

const isConfigured = (value, placeholder) =>
  Boolean(value) &&
  value.trim() !== "" &&
  !value.includes(placeholder);

const formatPrice = (price) => {
  const value = String(price || "").trim();
  return value || "Enquire for price";
};

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}

function whatsappAvailable() {
  return isConfigured(
    SITE.whatsapp,
    "REPLACE_WITH_WHATSAPP_NUMBER"
  );
}

function instagramAvailable() {
  return isConfigured(
    SITE.instagramUrl,
    "REPLACE_WITH_USERNAME"
  );
}

function emailAvailable() {
  return isConfigured(
    SITE.email,
    "REPLACE_WITH_EMAIL_ADDRESS"
  );
}

function makeWhatsAppURL(message) {
  if (!whatsappAvailable()) return "";

  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

function makeEmailURL(subject, message) {
  if (!emailAvailable()) return "";

  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

function getEnquiryMessage(painting) {
  const availability =
    normaliseStatus(painting.status) === "sold"
      ? "a similar painting or commission"
      : "this painting";

  return (
    `Hello Rehana! I'm interested in ${availability}: ` +
    `"${painting.title}" (${painting.size}). ` +
    "Could you please share more details? Thank you!"
  );
}

function getImageURL(filename) {
  // Filenames are used as uploaded. Keep them relative to the repository root.
  return String(filename || "").trim();
}


/* ==========================================================
   CONTACT LINKS
========================================================== */

function setupContactLinks() {
  const whatsappLink = $("#contactWhatsApp");
  const instagramLink = $("#contactInstagram");
  const emailLink = $("#contactEmail");
  const newsletterLink = $("#newsletterLink");

  if (whatsappAvailable()) {
    whatsappLink.href = makeWhatsAppURL(
      "Hello Rehana! I'd love to enquire about your paintings."
    );
  } else {
    whatsappLink.href = "#gallery";
    whatsappLink.addEventListener("click", (event) => {
      if (!whatsappAvailable()) {
        event.preventDefault();
        alert("Please add Rehana's WhatsApp number in script.js first.");
      }
    });
  }

  if (instagramAvailable()) {
    instagramLink.href = SITE.instagramUrl;
  } else {
    instagramLink.href = "#gallery";
    instagramLink.addEventListener("click", (event) => {
      if (!instagramAvailable()) {
        event.preventDefault();
        alert("Please add Rehana's Instagram URL in script.js first.");
      }
    });
  }

  if (emailAvailable()) {
    emailLink.href = makeEmailURL(
      "Painting enquiry — Rehana Art Studio",
      "Hello Rehana,\n\nI'd love to know more about your artwork.\n\nThank you!"
    );
  } else {
    emailLink.href = "#gallery";
    emailLink.addEventListener("click", (event) => {
      if (!emailAvailable()) {
        event.preventDefault();
        alert("Please add Rehana's email address in script.js first.");
      }
    });
  }

  if (SITE.newsletterUrl.trim()) {
    newsletterLink.href = SITE.newsletterUrl;
    newsletterLink.target = "_blank";
    newsletterLink.rel = "noopener noreferrer";
  } else {
    newsletterLink.href = "#contact";
    newsletterLink.addEventListener("click", (event) => {
      if (!SITE.newsletterUrl.trim()) {
        event.preventDefault();
        document.querySelector("#contact").scrollIntoView({
          behavior: "smooth"
        });
        alert("The mailing-list signup link has not been added yet.");
      }
    });
  }
}


/* ==========================================================
   PAINTING ENQUIRY LINKS
========================================================== */

function makePaintingEnquiryLinks(painting) {
  const message = getEnquiryMessage(painting);
  const encodedTitle = encodeURIComponent(painting.title);
  const whatsappURL = makeWhatsAppURL(message);

  const emailURL = makeEmailURL(
    `Enquiry about ${painting.title}`,
    message
  );

  const whatsappButton = whatsappURL
    ? `<a href="${escapeHTML(whatsappURL)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire about ${escapeHTML(painting.title)} on WhatsApp">WhatsApp</a>`
    : `<a href="#contact"
          data-missing-contact="whatsapp"
          aria-label="WhatsApp details not configured">WhatsApp</a>`;

  const instagramButton = instagramAvailable()
    ? `<a href="${escapeHTML(SITE.instagramUrl)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram about ${escapeHTML(painting.title)}">Instagram</a>`
    : `<a href="#contact"
          data-missing-contact="instagram">Instagram</a>`;

  const emailButton = emailURL
    ? `<a href="${escapeHTML(emailURL)}"
          aria-label="Email an enquiry about ${escapeHTML(painting.title)}">Email</a>`
    : `<a href="#contact"
          data-missing-contact="email">Email</a>`;

  return `
    <div class="painting-links">
      ${whatsappButton}
      ${instagramButton}
      ${emailButton}
    </div>
  `;
}


/* ==========================================================
   GALLERY
========================================================== */

const paintingGrid = $("#paintingGrid");
const galleryCount = $("#galleryCount");

function renderGallery() {
  if (!paintings.length) {
    paintingGrid.innerHTML = `
      <p class="empty-gallery">
        The collection is being prepared. Please visit again soon.
      </p>
    `;

    galleryCount.textContent = "New paintings coming soon";
    return;
  }

  galleryCount.textContent =
    `${paintings.length} original painting${paintings.length === 1 ? "" : "s"}`;

  paintingGrid.innerHTML = paintings.map((painting, index) => {
    const status = normaliseStatus(painting.status);
    const image = getImageURL(painting.image);

    return `
      <article class="painting-card">
        <div
          class="painting-image"
          data-painting-index="${index}"
          role="button"
          tabindex="0"
          aria-label="View details for ${escapeHTML(painting.title)}"
        >
          <img
            src="${escapeHTML(image)}"
            alt="${escapeHTML(painting.title)}, an original oil painting by Rehana"
            loading="lazy"
          >

          <div class="painting-placeholder">
            <span>${escapeHTML(painting.title)}</span>
            <small>UPLOAD PAINTING IMAGE</small>
          </div>

          <span class="painting-status ${status}">
            ${status === "sold" ? "Sold" : "Available"}
          </span>

          <span class="view-art">View artwork ↗</span>
        </div>

        <div class="painting-info">
          <p class="painting-category">ORIGINAL OIL PAINTING</p>
          <h3 class="painting-title">${escapeHTML(painting.title)}</h3>

          <div class="painting-meta">
            <span>${escapeHTML(painting.size)}</span>
            <span class="painting-price">
              ${escapeHTML(status === "sold" ? "Sold" : formatPrice(painting.price))}
            </span>
          </div>

          ${makePaintingEnquiryLinks(painting)}
        </div>
      </article>
    `;
  }).join("");

  // Display a graceful placeholder when an image has not been uploaded
  paintingGrid.querySelectorAll(".painting-image img").forEach((img) => {
    img.addEventListener("error", () => {
      img.closest(".painting-image")?.classList.add("image-missing");
      img.style.display = "none";
    }, { once: true });
  });
}


/* ==========================================================
   PAINTING DETAIL MODAL
========================================================== */

const modal = $("#paintingModal");
const modalPanel = $(".modal-panel", modal);
const modalImage = $("#modalImage");
const modalImageWrap = $(".modal-image-wrap", modal);
const modalTitle = $("#modalTitle");
const modalStatus = $("#modalStatus");
const modalMedium = $("#modalMedium");
const modalSize = $("#modalSize");
const modalDescription = $("#modalDescription");
const modalPrice = $("#modalPrice");
const modalActions = $("#modalActions");
const modalClose = $("#modalClose");

let lastFocusedElement = null;

function openPaintingModal(index, trigger) {
  const painting = paintings[index];

  if (!painting) return;

  lastFocusedElement = trigger || document.activeElement;

  const status = normaliseStatus(painting.status);
  const image = getImageURL(painting.image);

  modalImage.src = image;
  modalImage.alt = painting.title;

  modalImageWrap.classList.remove("image-missing");
  modalImage.style.display = "block";

  modalImage.onerror = () => {
    modalImage.style.display = "none";
    modalImageWrap.classList.add("image-missing");
  };

  modalTitle.textContent = painting.title;
  modalStatus.textContent = status === "sold" ? "Sold · Open for commission" : "Available";
  modalMedium.textContent = painting.medium || "Oil on canvas";
  modalSize.textContent = painting.size || "Size available on request";
  modalDescription.textContent = painting.description || "";
  modalPrice.textContent = status === "sold"
    ? "Sold"
    : formatPrice(painting.price);

  const message = getEnquiryMessage(painting);
  const whatsappURL = makeWhatsAppURL(message);
  const emailURL = makeEmailURL(
    `Enquiry about ${painting.title}`,
    message
  );

  const buttons = [];

  if (whatsappURL) {
    buttons.push(`
      <a class="button button-gold"
         href="${escapeHTML(whatsappURL)}"
         target="_blank"
         rel="noopener noreferrer">
        ${status === "sold" ? "Discuss a commission" : "Enquire on WhatsApp"}
        <span>↗</span>
      </a>
    `);
  }

  if (emailURL) {
    buttons.push(`
      <a class="button modal-secondary"
         href="${escapeHTML(emailURL)}">
        Email enquiry <span>↗</span>
      </a>
    `);
  }

  if (!buttons.length) {
    buttons.push(`
      <a class="button button-gold" href="#contact" data-close-modal>
        Contact the artist <span>↗</span>
      </a>
    `);
  }

  modalActions.innerHTML = buttons.join("");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modalPanel.focus();
}

function closePaintingModal() {
  if (!modal.classList.contains("is-open")) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

paintingGrid.addEventListener("click", (event) => {
  const missingContact = event.target.closest("[data-missing-contact]");

  if (missingContact) {
    event.preventDefault();

    const type = missingContact.dataset.missingContact;
    const message = {
      whatsapp: "Please add Rehana's WhatsApp number in script.js.",
      instagram: "Please add Rehana's Instagram URL in script.js.",
      email: "Please add Rehana's email address in script.js."
    };

    alert(message[type] || "Please configure this contact link.");
    return;
  }

  const card = event.target.closest("[data-painting-index]");

  if (!card) return;

  openPaintingModal(Number(card.dataset.paintingIndex), card);
});

paintingGrid.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-painting-index]");

  if (!card) return;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openPaintingModal(Number(card.dataset.paintingIndex), card);
  }
});

modalClose.addEventListener("click", closePaintingModal);

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closePaintingModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePaintingModal();
  }

  // Keep keyboard focus within the open modal.
  if (event.key === "Tab" && modal.classList.contains("is-open")) {
    const focusable = modalPanel.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex="0"]'
    );

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});


/* ==========================================================
   MOBILE NAVIGATION
========================================================== */

const menuToggle = $("#menuToggle");
const mainNav = $("#mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});


/* ==========================================================
   FOOTER & STARTUP
========================================================== */

$("#currentYear").textContent = new Date().getFullYear();

setupContactLinks();
renderGallery();
