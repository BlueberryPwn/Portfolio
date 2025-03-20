import { useEffect } from "react";

// Watches the scroll position and adjusts the
// current active link depending on the visible section
const ScrollWatcher = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        // Checks if the user has scrolled past the section's top
        // and if the user hasn't scrolled past the section's bottom
        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });

          // Finds the link whose href attribute contains
          // the current section's id and matches the
          // link with the matching section
          const activeLink = document.querySelector(
            `header nav a[href*="${id}"]`
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // EventListener cleaned up on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default ScrollWatcher;
