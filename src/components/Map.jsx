function Map() {

  return(
    <div className="bg-transparent max-w-[1200px] text-center">
      <h2 className="my-8 md:m-14 text-3xl md:text-4xl font-noto-serif">오시는 길</h2>
      <p className="mb-1 text-lg font-bold font-nanum-human text-gray-500">
        트라디노이
      </p>
      <p className="mb-4 font-nanum-human text-gray-500">
        서울 강남구 도곡로99길 16 6층
      </p>
      <div className="flex flex-col items-center">
        <a
          href="https://map.kakao.com/?urlX=514591&urlY=1111778&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
          target="_blank"
          rel="noreferrer"
          className="w-3/4 max-w-[800px]"
        >
          <img
            alt="안내 지도"
            className="w-full h-60 md:h-80"
            src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=514591&MY=1111778&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
            style={{ border: '1px solid #ccc' }}
          />
        </a>
        <div
          className="hide overflow-hidden px-2 py-3 w-3/4 max-w-[800px]"
          style={{
            overflow: 'hidden',
            padding: '7px 11px',
            border: '1px solid #dfdfdf',
            borderColor: 'rgba(0,0,0,.1)',
            borderRadius: '0 0 2px 2px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <strong style={{ float: "left" }}>
            <img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵"/>
          </strong>
          <div style={{ float: 'right', position: 'relative' }}>
            <a
              alt=""
              style={{ fontSize: '12px', textDecoration: 'none', float: 'left', height: '15px', paddingTop: '1px', lineHeight: '15px', color: '#000' }}
              target="_blank"
              href="https://map.kakao.com/?urlX=514591&urlY=1111778&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
              rel="noreferrer"
            >
              지도 크게 보기
            </a>
          </div>
        </div>
      </div>
      <div className="my-3 flex flex-row gap-3 justify-center">
        <a href="https://naver.me/xX75acfs">
          <img alt="naver-map" className="w-12" id="naver-map" src={`${process.env.PUBLIC_URL}/images/map/naver-map.png`} />
        </a>
        <a href="https://place.map.kakao.com/1290739532">
          <img alt="kakao-map" className="w-12" id="kakao-map" src={`${process.env.PUBLIC_URL}/images/map/kakao-map.png`} />
        </a>
        <a href="https://maps.app.goo.gl/27fa7U1gZAXSYSJE8">
          <img alt="google-map" className="w-12" id="google-map" src={`${process.env.PUBLIC_URL}/images/map/google-map.png`} />
        </a>
      </div>
      <div className="mx-auto my-5 flex flex-col justify-center w-72 md:w-3/4 text-left font-nanum-human text-gray-500">
        <p className="mb-1 font-bold font-nanum-human text-gray-500">
          대중교통
        </p>
        <p className="mb-4 font-nanum-human text-gray-500">
          2호선 삼성역 3번 출구에서 도보 720m
        </p>
        <p className="mb-1 font-bold font-nanum-human text-gray-500">
          주차 안내
        </p>
        <p className="mb-4 font-nanum-human text-gray-500">
          대치2동 주민센터에 무료 주차
        </p>
      </div>
  </div>
  );

}

export default Map;