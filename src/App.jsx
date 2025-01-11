import React, { useEffect } from "react";
import HomeSection from "./components/HomeSection";
import Header from "./components/Header";
import Greeting from "components/Greeting";
import BrideAndGroom from "./components/BrideAndGroom";
import Information from "components/Information";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Form from "components/Form";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "components/Footer";

function App() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen no-scrollbar">
      <HomeSection />
      <Header />
      <main className="flex-1 no-scrollbar">
        {/* Sections */}
        <section id="greeting" className="relative flex flex-col py-28 items-center justify-center">
          {/* 배경처럼 보이도록 이미지 삽입 */}
          <img
            src="/images/background/greeting_1.jpg"
            alt="Background"
            className="m-auto absolute inset-0 w-auto h-full object-fill -z-10"
          />
          <Greeting />
        </section>
        <section id="bride-and-groom" className="w-full py-12 bg-white flex flex-col items-center">
          <div className="border border-b-gray-600 w-4/5 max-w-[1200px] h-1" />
          <BrideAndGroom />
        </section>
        <section id="infomation" className="flex flex-col py-10 bg-[#f9f8f6] items-center justify-center">
          <div className="border border-b-gray-600 w-4/5 max-w-[1200px] h-1" />
          <Information />
          <div className="border border-t-gray-600 w-4/5 max-w-[1200px] h-1" />
        </section>
        <section id="gallery" className="h-screen bg-white flex flex-col items-center justify-center">
          <Gallery />
        </section>
        <section id="directions" className="w-full h-auto bg-[#f9f8f6] flex items-center justify-center">
          <Map />
        </section>
        <section id="guestbook" className="py-12 md:pb-24 bg-[#f9f8f6] flex items-center justify-center">
          <Form />
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
