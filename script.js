const yearNode = document.querySelector("#year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const body = document.body;
const whatsappNumber = (body.dataset.whatsappNumber || "").replace(/[^\d]/g, "");

const updateWhatsappLinks = (root = document) => {
  root.querySelectorAll(".js-whatsapp-link").forEach((link) => {
    const message =
      link.dataset.message ||
      "Hallo Zovia Thuiszorg, ik wil graag meer informatie over jullie zorg.";

    if (whatsappNumber) {
      link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    } else {
      link.href = "https://wa.me/";
    }
  });
};

const ensureMobileQuickbar = () => {
  if (document.querySelector(".mobile-quickbar")) {
    return;
  }

  const quickbar = document.createElement("div");
  quickbar.className = "mobile-quickbar";

  const mailLink = document.createElement("a");
  mailLink.href = "mailto:info@zoviathuiszorg.nl";
  mailLink.textContent = "E-mail";

  const whatsappLink = document.createElement("a");
  whatsappLink.className = "mobile-quickbar__wa js-whatsapp-link";
  whatsappLink.dataset.message =
    "Hallo Zovia Thuiszorg, ik wil graag direct contact opnemen.";
  whatsappLink.href = "#";
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener noreferrer";
  whatsappLink.textContent = "WhatsApp";

  quickbar.append(mailLink, whatsappLink);
  document.body.appendChild(quickbar);
};

ensureMobileQuickbar();
updateWhatsappLinks();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navWrap = document.querySelector(".nav-wrap");

if (menuToggle && nav) {
  const closeMenu = () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!navWrap) {
      return;
    }
    if (!navWrap.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const normalizePageName = (pathLike) => {
  const value = pathLike.split("/").pop();
  return value ? decodeURIComponent(value) : "index.html";
};

const currentFile = normalizePageName(window.location.pathname);
const pageClass = `page-${currentFile.replace(".html", "").replace(/[^a-z0-9-]/gi, "-")}`;
body.classList.add(pageClass);

if (nav) {
  nav.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const linkFile = normalizePageName(new URL(href, window.location.href).pathname);

    if (linkFile === currentFile) {
      link.classList.add("is-current");
      link.setAttribute("aria-current", "page");
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const brandLogo = document.querySelector(".brand-logo");
const brandFallback = document.querySelector(".brand-fallback");

if (brandLogo && brandFallback) {
  const showFallback = () => {
    brandLogo.style.display = "none";
    brandFallback.classList.add("is-visible");
  };

  const handleLoad = () => {
    if (!brandLogo.naturalWidth) {
      showFallback();
    }
  };

  brandLogo.addEventListener("error", showFallback);
  brandLogo.addEventListener("load", handleLoad);

  if (brandLogo.complete) {
    handleLoad();
  }
}
