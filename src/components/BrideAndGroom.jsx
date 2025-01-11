function BrideAndGroom() {

  return(
    <div className="bg-transparent max-w-[1200px] text-center">
      <h2 className="mt-8 mb-8 md:m-14 text-2xl md:text-4xl font-noto-serif">신랑 & 신부</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
        {/* 신부 이미지 */}
        <div className="flex flex-col items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/photos/1_3.jpg`}
            alt="Bride"
            className="w-[540px] h-auto object-cover shadow-md"
          />
          <p className="mt-4 text-2xl font-thin font-nanum-human text-gray-500">오예림</p>
        </div>

        {/* 신랑 이미지 */}
        <div className="flex flex-col items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/photos/3_3.jpg`}
            alt="Groom"
            className="w-[540px] h-auto object-cover shadow-md"
          />
          <p className="mt-4 text-2xl font-thin font-nanum-human text-gray-500">권원표</p>
        </div>
      </div>
  </div>
  );

}

export default BrideAndGroom;