import React from "react";

const HomeSection = (showTime, showPlace) => {
  showTime = true;
  showPlace = true;
  
  return (
    <section
      id="home"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/4_12.jpg')" }}
    >
      <div
        className="text-center text-white p-4 bg-transparent h-2/3 md:h-auto"
        style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)' }}
      >
        <h1 className="text-7xl font-great-vibes mb-12">Wonpyo & Yerim</h1>
        <p className="text-xl font-gugi mb-10 md:mb-12">| WE ARE GETTING MARRIED |</p>
        { showTime && (<p className="text-lg font-noto-serif mb-2">
          <strong className="text-2xl">2025. 03. 15. SAT <br/> PM 12:00</strong>
        </p>) }
        { showPlace && <p className="text-base font-noto-serif">
          서울 강남구 트라디노이
        </p> }
      </div>
    </section>
  );
};

export default HomeSection;
