document.addEventListener("DOMContentLoaded", function () {
  let isActive = false;

  const toggleButton = document.querySelector(".hamburger");

  function toggleSidebar() {
    isActive = !isActive;

    if (isActive) {
      document.body.classList.add("navBarOpen");
      document.documentElement.setAttribute("data-sidebar-show", "true");
    } else {
      document.body.classList.remove("navBarOpen");
      document.documentElement.setAttribute("data-sidebar-show", "false");
    }
  }

  toggleButton.addEventListener("click", toggleSidebar);
});
