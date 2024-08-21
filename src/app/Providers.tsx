"use client";

import { Provider } from "react-redux";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import store from "@/redux/store";
import AOS from "aos";
import GLightbox from "glightbox";
import { useEffect } from "react";
import Preloader from "@/components/common/Preloader";
import ScrollTopButton from "@/components/common/ScrollTopButton";
import NavMenuScrollSpy from "@/components/common/NavMenuScrollSpy";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Initialize GLightbox
    const glightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => {
      // Cleanup function to refresh AOS
      AOS.refreshHard();
      // Clean up GLightbox if necessary
      if (glightbox && typeof glightbox.destroy === "function") {
        glightbox.destroy();
      }
    };
  }, []);

  return (
    <Provider store={store}>
      <Preloader />
      <ScrollTopButton />
      <NavMenuScrollSpy />
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </Provider>
  );
}
