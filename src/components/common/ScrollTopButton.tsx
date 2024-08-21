"use client";
import { useState, useEffect } from "react";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Handle the scroll behavior and add/remove classes on the body based on scroll position
  const handleScroll = () => {
    const header = document.querySelector("#header");
    const body = document.body;

    if (
      header &&
      (header.classList.contains("scroll-up-sticky") ||
        header.classList.contains("sticky-top") ||
        header.classList.contains("fixed-top"))
    ) {
      if (window.scrollY > 100) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    }
    toggleVisibility();
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const debounce = (func: () => void, delay: number) => {
      let timeout: ReturnType<typeof setTimeout>;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
      };
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    // Add event listeners
    window.addEventListener("scroll", debouncedHandleScroll);
    window.addEventListener("load", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      window.removeEventListener("load", handleScroll);
    };
  });

  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${
        isVisible ? "active" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollTopButton;
