"use client";

import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTopButton = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setHasScrolled(scrollTop > 0);
      setShowScrollUp(scrollTop > 20);
      setShowScrollDown(scrollTop + windowHeight < documentHeight - 20);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 left-4 flex flex-col space-y-2 z-50">
      {hasScrolled && (
        <>
          <div
            className={`transition-opacity duration-500 ${showScrollUp ? "opacity-100" : "opacity-0"
              }`}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full border-2 shadow-lg transition-transform hover:scale-110"
            >
              <ChevronUp className="h-6 w-6" />
            </Button>
          </div>
          <div
            className={`transition-opacity duration-500 ${showScrollDown ? "opacity-100" : "opacity-0"
              }`}
          >
            <Button
              onClick={scrollToBottom}
              size="icon"
              className="rounded-full border-2 shadow-lg transition-transform hover:scale-110"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ScrollToTopButton;

