import { useEffect } from "react";

// Monitors the scroll position and dynamically updates the "active" class
// on navigation links to match the currently visible section
const ScrollWatcher = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const handleScroll = () => {
      sections.forEach((section) => {
        const scrollPosition = window.scrollY;
        const sectionTopPosition = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        // Determines whether the scroll position is within the currently visible section
        // If true, removes the "active" class from all navigation links
        if (
          scrollPosition >= sectionTopPosition &&
          scrollPosition < sectionTopPosition + sectionHeight
        ) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          // Selects the first nav link whose href attribute contains the current section ID
          // If true, applies the "active" class to the nav link if a match is found
          const activeLink = document.querySelector(`nav a[href*="${id}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // EventListener is cleaned up on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default ScrollWatcher;
