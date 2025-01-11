function Information({ isVIP }) {
  if (isVIP) {
    return (
      <div className="bg-transparent max-w-80 text-center">
        <h2 className="mb-10 mt-5 md:m-14 text-3xl md:text-4xl font-noto-serif">웨딩 안내</h2>
        <div>
          <p className="mb-8 text-xl font-bold font-nanum-human text-gray-500">
            저희 두 사람의 결혼식은 <br /> 하우스웨딩으로 진행됩니다.
          </p>
          <ul className="text-lg mb-6 leading-7 p-0 font-thin font-nanum-myeongjo text-gray-500">
            <li className="relative mb-4">식권을 따로 드리지 않고 <br /> 식사는 본식 이후에 <br /> 앉은 자리에서 드실 수 있습니다</li>
            <li className="relative mb-4">주변에 ATM이나 은행이 없습니다 <br /> 현금은 준비하지 않으셔도 됩니다</li>
            <li className="relative mb-4">화환을 놓을 장소가 없습니다 <br /> 화환 대신 축하메시지를 <br /> 카톡으로 보내주세요</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-transparent max-w-80 text-center">
        <h2 className="mb-10 mt-5 md:m-14 text-3xl md:text-4xl font-noto-serif">웨딩 안내</h2>
        <div>
          <p className="mb-8 text-xl font-bold font-nanum-human text-gray-500">
            저희 두 사람의 결혼식은 <br /> 스몰웨딩으로 진행됩니다.
          </p>
          <ul className="text-lg mb-6 leading-7 p-0 font-thin font-nanum-myeongjo text-gray-500">
            <li className="relative mb-4">장소가 협소한 관계로 부득이하게 <br /> 가까운 친지분들만 모여 <br /> 조촐하게 진행하려 합니다.</li>
            <li className="relative mb-4">귀한 분을 모시지 못하는 점 <br /> 고개숙여 양해를 구합니다.</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Information;
