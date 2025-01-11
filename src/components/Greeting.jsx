function Greeting() {
  return (
    <div className="bg-transparent max-w-[1200px] text-center">
      <h2 className="mt-10 mb-14 md:m-14 text-3xl md:text-4xl font-noto-serif">초대합니다</h2>
      <div className="my-12 text-lg md:text-xl font-bold font-nanum-myeongjo text-gray-500">
        <p className="mb-8">
          서로에게 알맞은 온도로 따뜻하던 두 사람이
        </p>
        <p className="mb-8">
          부부로서 첫걸음을 내딛는 설렘의 순간에 
        </p>
        <p className="mb-8">
          소중한 분들을 초대합니다.
        </p>
      </div>
    </div>
  );
}

export default Greeting;
