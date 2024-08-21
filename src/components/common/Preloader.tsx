import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const handleLoad = () => {
      if (preloader) preloader.remove();
    };
    // Check if the document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div id="preloader"></div>;
}
