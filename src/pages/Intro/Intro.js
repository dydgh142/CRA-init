import React from "react";
import "./sns.css";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { BsGithub } from "react-icons/bs";
import { SiTistory } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { GrMail } from "react-icons/gr";

const Intro = () => {
  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  return (
    <div className="h-full ">
      <section className="relative h-[80vh]">
        <img src="img/cat.jpg" className="opacity-50 w-[100vw] h-[100%] object-cover" alt="고양이 배경" />
        <p className="absolute top-[50%] left-[50%] -translate-x-[50%] text-[#4a4a4a] text-2xl">Welcome my home :)</p>
      </section>

      <section className=" bg-base py-12">
        <div className="w-[70%] mx-auto text-left">
          <h2 className="yoonhoH3">조윤호의 이력서</h2>
          <div className="text-textbase text-lg mb-5 pb-2 border-b-2 border-textbase">다양한 협업 경험을 통해 팀워크를 중요시하며, 함께 성장하는 것을 추구하는 조윤호 입니다.</div>
          <div className="flex">
            <div className="w-1/3">
              <img src="img/profile.jpg" className="opacity-80" alt="프로필" />
            </div>
            <div className="relative w-2/3 ml-[2vw]">
              <div className="text-2xl mb-4 font-bold text-textbase">Front-End Developer</div>
              <ul className="font-semibold text-textbase pb-3 border-b-2 border-textbase">
                <li className="mb-2">🔥 겸손한 자세에서 항상 배우고 도전하겠습니다.</li>
                <li className="mb-2">🌈 소통을 중요시 생각하며, 문제를 풀어가는 과정에서 즐거움을 느낍니다.</li>
              </ul>
              <ul className="absolute -bottom-5 wrapper mt-4">
                <a href="https://github.com/dydgh142" target="_blank">
                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <BsGithub />
                  </li>
                </a>
                <a href="https://strap.tistory.com/" target="_blank">
                  <li className="icon tistory mx-10">
                    <span className="tooltip">Tistory</span>
                    <SiTistory />
                  </li>
                </a>
                <a href="https://www.instagram.com/strap_m_/" target="_blank">
                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <FiInstagram />
                  </li>
                </a>
                <CopyToClipboard text="dydgh142@naver.com" onCopy={() => alert("클립보드에 복사되었습니다.")}>
                  <li className="icon email">
                    <span className="tooltip">Email</span>
                    <button>
                      <GrMail />
                    </button>
                  </li>
                </CopyToClipboard>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[70%] ml-auto mr-auto py-12 text-left">
        <h3 className="yoonhoH3 border-b-2 border-textbase">Introduction</h3>
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

      <section className="  bg-base py-12 text-left">
        <div className="w-[70%] mx-auto">
          <h3 className="yoonhoH3  border-b-2 border-textbase mx-auto text-left mb-5">Work Experience</h3>
          <div className="border-b-2 border-gray-400 pb-3 mb-5">
            <div className="font-bold text-xl my-2">엘 플로레스 (꽃집)</div>
            <div className="text-gray-500 mb-2 font-semibold">2021.11 ~ 현재 (1년 7개월 ~)</div>
            <li>생화 손질 및 예식장 기구 관리, 화기청소 등.</li>
            <li>빠르게 변화하는 업무 상황에 대처하며, 적시에 맞게 판단하고 일의 우선순위를 파악해 처리하는 능력을 향상시킴.</li>
            <li>변동사항이 많아 관리하기 힘들었던 알바생들의 스케줄을 미리 조사하고 일정에 맞게 조정해 원활한 업무 진행에 도움을 줌.</li>
          </div>
          <div className="border-b-2 border-gray-400 divb-3 mb-5">
            <div className="font-bold text-xl my-2">2020 - 2021 KBO 포스트시즌 (야구장) </div>
            <div className="text-gray-500 mb-2 font-semibold">2020.11 ~ (24일 단기) 2021.11 ~ (18일 단기)</div>
            <li>관람객들의 입장 통제 및 발열 검사, 소지품검사 등.</li>
            <li>선수 동선 관리, 바리케이트 설치 및 관객 통제</li>
            <li>관객들의 안전을 위해 많은 인원들과 협력하고 소통.</li>
            <li>신속한 보고 및 처리능력의 향상</li>
          </div>
          <div className="border-b-2 border-gray-400 divb-3 mb-5">
            <div className="font-bold text-xl my-2">CASAMIA (리빙브랜드) </div>
            <div className="text-gray-500 mb-2 font-semibold"> 2020.07 ~ 2021.10 (1년 4개월)</div>
            <li>입고관리, 진열, 청소, 판매, 가구조립등 업무 수행</li>
            <li>체계적이지 않던 입고, 물류관리를 정형화된 입고 및 물류 관리방식으로 개선함으로 처리 시간과 정확도를 향상시킴.</li>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="yoonhoH3 my-10">Projects</h3>
        </div>
      </section>

      <section className="bg-base py-10 text-left">
        <div className="w-[70%] mx-auto">
          <h3 className="yoonhoH3 border-b-2 border-textbase">Skill</h3>
          <li className="my-2"> Front-End : HTML, CSS, JavaScript, React, tailwind</li>
          <li> Android: Java, Kotlin, RetrofitAPI, JWTToken</li>
        </div>
      </section>

      <section className="text-left my-10">
        <div className="w-[70%] mx-auto">
          <h3 className="yoonhoH3 border-b-2 border-textbase">Other Experience</h3>
          <div className="text-xl text-textbase mt-5 mb-2 font-bold">🏃‍♀️ Activities</div>
          <li>2022.11 - 2023.03 🦁멋쟁이사자처럼 프론트엔드 스쿨 4기 수료</li>
          <li>2017.03 - 2018.02 안양대학교 이공대학 학생회 ‘AURA’</li>
          <div className="text-xl text-textbase mt-5 mb-2 font-bold">🏆 Awards</div>
          <div className="text-xl text-textbase mt-5 mb-2 font-bold">📚 Certificate </div>
        </div>
      </section>

      <footer className="w-full bg-base py-10">
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

export default Intro;
