// Scroll button code
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Function to check if the user has scrolled down a certain percentage of the page
  function checkScrollPosition() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrollPercentage =
      (window.scrollY / (scrollHeight - clientHeight)) * 100;

    if (scrollPercentage > 95) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  // Show/hide the button based on scroll position
  window.addEventListener("scroll", checkScrollPosition);

  // Scroll to the top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Initially check the scroll position to determine button visibility
  checkScrollPosition();
});
