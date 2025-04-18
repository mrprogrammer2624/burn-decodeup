document.addEventListener("DOMContentLoaded", function () {
  let isActive = false;

  const toggleButton = document.querySelector(".hamburger");
  const navLinks = document.querySelectorAll(".navListLink");
  const backdrop = document.querySelector(".offcanvas-backdrop");

  function toggleSidebar(forceClose = false) {
    isActive = forceClose ? false : !isActive;

    if (isActive) {
      document.body.classList.add("navBarOpen");
      document.documentElement.setAttribute("data-sidebar-show", "true");
      backdrop.classList.add("show");
    } else {
      document.body.classList.remove("navBarOpen");
      document.documentElement.setAttribute("data-sidebar-show", "false");
      backdrop.classList.remove("show");
    }
  }

  toggleButton.addEventListener("click", () => toggleSidebar());

  //  Close on link click & add active class
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Remove 'active' from all, then add to clicked one
      navLinks.forEach((l) => l.classList.remove("active"));
      e.currentTarget.classList.add("active");

      // Close sidebar on mobile
      if (isActive) toggleSidebar(true);
    });
  });

  //  Close when clicking outside the menu
  backdrop.addEventListener("click", () => {
    if (isActive) toggleSidebar(true);
  });

  //  ESC key closes menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isActive) {
      toggleSidebar(true);
    }
  });

  getStartedBtn?.addEventListener("click", () => {
    alert("Getting Started!");
  });

  learnMoreBtn?.addEventListener("click", () => {
    alert("Learn More...");
  });
});
