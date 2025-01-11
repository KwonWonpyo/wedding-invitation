import React, { useState, useRef, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll to sections
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="font-gugi text-opacity-50 text-black bg-gray-100 sticky top-0 w-full z-50 shadow-md">
      {/* Desktop Header */}
      <div className="hidden md:flex max-w-[1200px] justify-end items-center p-4 mx-auto">
        <nav className="flex space-x-6">
          <button onClick={() => handleScroll("home")} className="hover:text-pink-400">
            Home
          </button>
          <button onClick={() => handleScroll("gallery")} className="hover:text-pink-400">
            GALLERY
          </button>
          <button onClick={() => handleScroll("directions")} className="hover:text-pink-400">
            MAP
          </button>
          <button onClick={() => handleScroll("guestbook")} className="hover:text-pink-400">
            REPLY
          </button>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden justify-between items-center p-4">
        <h1 className="text-sm font-great-vibes">Wonpyo & Yerim</h1>
        <button
          className="text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav 
          ref={menuRef}
          className="md:hidden flex flex-col bg-gray-100 p-4 space-y-2 shadow-lg"
        >
          <button onClick={() => handleScroll("bride-and-groom")} className="hover:text-pink-400">
            신랑 & 신부
          </button>
          <button onClick={() => handleScroll("gallery")} className="hover:text-pink-400">
            갤러리
          </button>
          <button onClick={() => handleScroll("directions")} className="hover:text-pink-400">
            오시는길
          </button>
          <button onClick={() => handleScroll("guestbook")} className="hover:text-pink-400">
            참석하기
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
