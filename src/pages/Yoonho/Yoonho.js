import React from "react";

const Yoonho = () => {
  return (
    <div>
      <section className="relative h-[80vh]">
        <img src="img/cat.jpg" className="opacity-50 w-[100vw] h-[100%] object-cover" alt="고양이 배경" />
        <h2 className="absolute top-[50%] left-[50%] -translate-x-[50%] text-[#4a4a4a] text-2xl">Welcome my home :)</h2>
      </section>

      {/* <div className="profileImg w-[0%]">
            <img src="img/profile.jpg" className="opacity-50" alt="프로필" />
          </div> */}
      <section className="w-[70%] ml-auto mr-auto mt-8 mb-10 text-left">
        <h3 className="yoonhoH3">Introduction</h3>
        <p>
          <strong>소속감</strong>을 갖고 팀에서 일하는 것을 좋아합니다. 여러 사람들과 협력하여 문제를 해결할 때 배우는 것이 많기 때문에 자만하지 않고 배우려는 자세로 항상 적극적인 자세로 임하고 있습니다.
          <br />
          <br />
          <strong>넓은 시야를 가진 개발자</strong>가 되겠습니다. 주어진 상황 속에서 새로운 아이디어를 제안하고 실행하는 것을 즐기며, 상황에 맞게 적절한 방법을 선택하여 일을 처리합니다. 짧은 시간 안에 개발을 진행해야 했을 땐 계속해서 팀원들과 새로운
          방법을 의논해 개발을 마친 경험이 있습니다.
          <br />
          <br />
          새로운 기술을 도입하여 프로젝트를 진행하며 다양한 시행착오를 겪어왔습니다. 이러한 경험들 덕분에 이제는 새로운 기술도입에 대한
          <strong>두려움</strong>이 많이 줄었으며, 프로젝트를 진행할 때 더 좋은 방법을 찾아 적용하는 습관이 생겼습니다.
        </p>
      </section>

      <section className=" ml-auto mr-auto bg-base">
        <h3 className="yoonhoH3 w-[70%]">Work Experience</h3>
      </section>

      <footer className="w-full mt-10 mb-7">
        <h3 className="yoonhoH3 my-7">경력사항 및 자격증</h3>
        <ul className="text-lg text-[#4a4a4a] ">
          <li className="my-4">2022.06-2022.07 한국관광공사 / 2022 관광데이터 활용 공모전 교육 프로그램 이수</li>
          <li className="my-4">2022.10-2022.10 한국관광공사 / 2022 관광데이터 활용 공모전 / 장려상 수상</li>
          <li className="my-4">2022.03-2022.11 안양대학교 / 2022 졸업전시회 / 장려상 수상</li>
          <li className="my-4">21.07.13 / 네트워크관리사 2급 / 한국정보통신자격협회</li>
          <li className="my-4">21.10.01 / 리눅스마스터 2급 / 한국정보통신진흥협회</li>
          <li className="my-4">22.04.27 / 전산회계 2급 / 한국세무사회</li>
          <li className="my-4">22.11.25 / 정보처리기사 / 한국산업인력 공단</li>
        </ul>
      </footer>
      <>.</>
    </div>
  );
};

export default Yoonho;
