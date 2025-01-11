function Form() {
  return (
    <div className="bg-transparent max-w-80 md:max-w-[1200px] text-center">
      <h2 className="mb-10 mt-5 md:m-14 text-3xl md:text-4xl font-noto-serif">참석하기</h2>
      <div>
        <p className="mb-8 text-sm md:text-xl font-bold font-nanum-human text-gray-500">
          원활한 자리 배정을 위해 <br /> 참석 여부를 알려주세요.
        </p>
        <a
          href="https://forms.gle/rYhbp5uZBnmHxjuE8"
        >
          <button
            type="button"
            className="rounded-lg bg-white px-5 py-2.5 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100"
          >
            참석 여부 알리기
          </button>
        </a>
      </div>
    </div>
  );
}

export default Form;
