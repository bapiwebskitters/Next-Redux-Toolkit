"use client";
import { useDebounce } from "@/hooks/useDebounce";
import React, { useEffect } from "react";

const NavMenuScrollSpy: React.FC = () => {
  const handleScrollSpy = useDebounce(() => {
    document
      .querySelectorAll<HTMLAnchorElement>(".navmenu a")
      .forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash) as HTMLElement;
        if (!section) return;
        const position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll<HTMLAnchorElement>(".navmenu a.active")
            .forEach((link) => link.classList.remove("active"));
          navmenulink.classList.add("active");
        } else {
          navmenulink.classList.remove("active");
        }
      });
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSpy);
    window.addEventListener("load", handleScrollSpy);
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
      window.removeEventListener("load", handleScrollSpy);
    };
  }, [handleScrollSpy]);

  return null;
};

export default NavMenuScrollSpy;
