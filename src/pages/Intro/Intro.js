import React from "react";
import "./sns.css";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { BsGithub } from "react-icons/bs";
import { SiTistory } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <section className=" bg-base pt-10 pb-24">
        <div className="w-[70%] mx-auto text-left mt-10 relative">
          <h2 className="yoonhoH3">조윤호의 이력서</h2>
          <div className="text-textbase text-lg mb-5 pb-2 border-b-2 border-textbase">다양한 협업 경험을 통해 팀워크를 중요시하며, 함께 성장하는 것을 추구하는 조윤호 입니다.</div>
          <div className="flex ">
            <div className="w-1/3">
              <img src="img/profile.jpg" className="opacity-80" alt="프로필" />
            </div>
            <div className="relative w-2/3 ml-[2vw]">
              <div className="text-2xl mb-4 font-bold text-textbase">Front-End Developer</div>
              <ul className="font-semibold text-textbase pb-3 border-b-2 border-textbase">
                <li className="mb-2">🔥 겸손한 자세에서 항상 배우고 도전하겠습니다.</li>
                <li className="mb-2">🌈 소통을 중요시 생각하며, 문제를 풀어가는 과정에서 즐거움을 느낍니다.</li>
              </ul>
            </div>
            <ul className="absolute -bottom-20  w-full justify-center wrapper">
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
          <div className="border-b-2 border-gray-400 mb-5 pb-3">
            <div className="font-bold text-xl my-2">2020 - 2021 KBO 포스트시즌 (야구장) </div>
            <div className="text-gray-500 mb-2 font-semibold">2020.11 ~ (24일 단기) 2021.11 ~ (18일 단기)</div>
            <li>관람객들의 입장 통제 및 발열 검사, 소지품검사 등.</li>
            <li>선수 동선 관리, 바리케이트 설치 및 관객 통제</li>
            <li>관객들의 안전을 위해 많은 인원들과 협력하고 소통.</li>
            <li>신속한 보고 및 처리능력의 향상</li>
          </div>
          <div className="border-b-2 border-gray-400 mb-5 pb-3">
            <div className="font-bold text-xl my-2">CASAMIA (리빙브랜드) </div>
            <div className="text-gray-500 mb-2 font-semibold"> 2020.07 ~ 2021.10 (1년 4개월)</div>
            <li>입고관리, 진열, 청소, 판매, 가구조립등 업무 수행</li>
            <li>체계적이지 않던 입고, 물류관리를 정형화된 입고 및 물류 관리방식으로 개선함으로 처리 시간과 정확도를 향상시킴.</li>
          </div>
        </div>
      </section>

      <section className="text-left py-12">
        <div className="w-[70%] mx-auto">
          <h3 className="yoonhoH3 border-b-2 border-textbase">Projects</h3>
          <div className="flex border-b-2 border-gray-400 mb-5 pb-3">
            <div className="w-1/3 mr-4 ">
              <img src="img/udon.png" alt="우동집" className="mb-4" />
              <a href="https://github.com/kindergarten-udon/udon-house" target="_blank" className="textbutton">
                우동집
              </a>
              <div className="font-semibold my-2">멋쟁이사자처럼 최종 프로젝트</div>
              <div className="text-textbase">2023.03.09 ~ 2023.03.29 (3주)</div>
            </div>
            <div className="w-2/3">
              <li className="mb-1">DailyScrum 활용, 팀원들과 단기목표 설정 및 진행사항 보고등 회의록을 정리하고 Wiki에 최신화를 통해 현재 프로젝트의 진행사항을 쉽게 확인할 수 있도록 함</li>
              <li className="mb-1">figma를 이용해 웹페이지의 디자인을 도맡아 진행. (참고사이트는 아이들나라 이며 새로운 페이지인 경우는 새로 기획하고 기존페이지는 각색을 통해 프로젝트를 진행) </li>
              <li className="mb-1">웹 접근성 체크리스트 작성을 통해 마우스, 키보드 동시접근 가능</li>
              <li className="mb-1">마이페이지 기능중 회원만의 게시글, 즐겨찾기 기능을 구현하기 위해 현재 로그인되어 있는 정보의 유저아이디와 게시글의 createId를 비교후 랜더링</li>
              <li className="mb-1">
                게시판의 인기 게시물 순위 변화, 사용자의 게시글 작성등 실시간 랜더링을 위한{" "}
                <a
                  href="https://strap.tistory.com/68"
                  target="_blank"
                  className="font-semibold text-textbase border-b-[1px] border-gray-400
                "
                >
                  onSnapshot
                </a>
                코드작성
              </li>
              <div className="my-3">
                <span className="red mx-1">HTML</span>
                <span className="red mx-1">React</span>
                <span className="red mx-1">tailwind</span>
                <span className="red mx-1">JavaScript</span>
                <span className="red mx-1">Figma</span>
              </div>
              <a href="https://udon-house.netlify.app/" target="_blank" className="text-gray-500 font-semibold border-b-[1px] border-gray-400">
                🔗Result
              </a>
            </div>
          </div>
          <div className="flex border-b-2 border-gray-400 mb-5 pb-3">
            <div className="w-1/3 mr-4 ">
              <img src="img/taing.png" alt="우동집" className="mb-4" />
              <a href="https://github.com/likelion-js-project4/taing" target="_blank" className="textbutton">
                TAING
              </a>
              <div className="font-semibold my-2">멋쟁이사자처럼 중간 프로젝트</div>
              <div className="text-textbase">2023.01.27 ~ 2023.02.09 (2주)</div>
            </div>
            <div className="w-2/3">
              <li className="mb-1">
                DailyScrum 활용통해 팀원들과 단기목표 설정, 진행사항 보고 및{" "}
                <a href="https://github.com/likelion-js-project4/taing/wiki" target="_blank" className="font-semibold text-textbase border-b-[1px] border-gray-400">
                  wiki
                </a>
                활용
              </li>
              <li className="mb-1">웹 접근성 체크리스트 작성을 통해 마우스, 키보드 동시접근 가능</li>
              <li className="mb-1">사용자 입력란 기준 충족시 버튼 활성화 및 접근가능</li>
              <li className="mb-1">LightHouse를 통해 성능,SEO등 20점 향상</li>

              <div className="my-3">
                <span className="red mx-1">HTML</span>
                <span className="red mx-1">CSS</span>
                <span className="red mx-1">JavaScript</span>
                <span className="red mx-1">Figma</span>
              </div>
            </div>
          </div>

          <div className="flex border-b-2 border-gray-400 mb-5 pb-3">
            <div className="w-1/3 mr-4 ">
              <img src="img/fitsum.png" alt="핏썸" className="mb-4" />
              <a href="https://github.com/fitnesssumm" target="_blank" className="textbutton">
                FitSum
              </a>
              <div className="font-semibold my-2">운동을 통한 캐릭터 육성 어플 </div>
              <div className="text-textbase">2022.05 ~ 2022.11 (30주)</div>
              <div className="text-textbase">안양대학교 ‘2022 CapStonDesgin’ 수상작</div>
            </div>
            <div className="w-2/3">
              <li className="mb-1">figma 를 이용해 Application UI 디자인</li>
              <li className="mb-1">
                <a href="https://www.tensorflow.org/lite/examples/pose_estimation/overview?hl=ko" target="_blank" className="font-semibold text-textbase border-b-[1px] border-gray-400">
                  Tensorflow-PoseNet
                </a>
                을 이용하여 사용자의 자세를 인식
              </li>
              <li className="mb-1">
                <a href="https://github.com/dydgh142/Fitsum_Android/blob/main/fitsum/posenet/RepetitionCounter.kt" target="_blank" className="font-semibold text-textbase border-b-[1px] border-gray-400">
                  관절 포인트의 움직임
                </a>
                을 이용하여 운동횟수 카운트
              </li>
              <li className="mb-1">Dto와 RetrofitAPI 를 이용해 비동기적 으로 데이터 처리를 처리하고, 서버측에서 자동으로 파싱하게되어 빠른 통신과 좋은 가독성을 갖게 함</li>
              <li className="mb-1">JWTToken을 이용하여 자동로그인, 로그인상태 유지 등 구현</li>
              <li className="mb-1">캐릭터의 성별, 아이템 구매에 따른 이미지 변경기능으로 사용자의 재미를 더함</li>

              <div className="my-3">
                <span className="red mx-1">JAVA</span>
                <span className="red mx-1">Kotlin</span>
                <span className="red mx-1">XML</span>
                <span className="red mx-1">RetrofitAPI</span>
                <span className="red mx-1">JWTToken</span>
                <span className="red mx-1">Figma</span>
              </div>
            </div>
          </div>

          <div className="flex border-b-2 border-gray-400 mb-5 pb-3">
            <div className="w-1/3 mr-4 ">
              <img src="img/bermuda.png" alt="버뮤다" className="mb-4" />
              <a href="https://github.com/dydgh142/BERMUDA_Android" target="_blank" className="textbutton">
                BERMUDA
              </a>
              <div className="font-semibold my-2">음악일기 버뮤다</div>
              <div className="text-textbase">2022.07 ~ 2022.09 (12주)</div>
              <div className="text-textbase">한국관광공사와 카카오 주관 ‘2022 관광데이터 활용 공모전’ 수상작</div>
            </div>
            <div className="w-2/3">
              <li className="mb-1">figma를 이용하여 Application UI 디자인</li>
              <li className="mb-1">Android Stuido를 사용하여 UI 개발 및 통신 구현 진행 </li>
              <li className="mb-1">Dto와 RetrofitAPI 를 이용해 비동기적 으로 데이터를 처리하고, 서버측에서 자동으로 파싱하게되어 빠른 통신과 좋은 가독성을 갖게 함</li>
              <li className="mb-1">JWT Token을 이용하여 자동로그인, 로그인상태 유지 등 구현</li>
              <li className="mb-1">지역별관광 데이터를 이용해 축제정보, 관광지 정보등을 표시</li>

              <div className="my-3">
                <span className="red mx-1">JAVA</span>
                <span className="red mx-1">Kotlin</span>
                <span className="red mx-1">XML</span>
                <span className="red mx-1">RetrofitAPI</span>
                <span className="red mx-1">JWTToken</span>
                <span className="red mx-1">Figma</span>
              </div>
            </div>
          </div>
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
          <div className="border-b-2 border-gray-400 mb-5 pb-3">
            <div className="text-xl text-textbase mt-5 mb-2 font-bold">🏃‍♀️ Activities</div>
            <li>
              <span className="red">2022.11 - 2023.03</span> 🦁멋쟁이사자처럼 프론트엔드 스쿨 4기 <span className="red">수료</span>
            </li>
            <li>
              <span className="red">2017.03 - 2018.02</span> 안양대학교 이공대학 학생회 ‘AURA’
            </li>
          </div>
          <div className="border-b-2 border-gray-400 mb-5 pb-3">
            <div className="text-xl text-textbase mt-5 mb-2 font-bold">🏆 Awards</div>
            <li>
              <span className="red">2022</span> 한국관광공사와 카카오 주관 ‘2022 관광데이터 활용 공모전’ <span className="underline">장려상 수상</span>
            </li>
            <li>
              <span className="red">2022</span> 안양대학교 ‘CapSton Desgin’ <span className="underline">장려상 수상</span>
            </li>
          </div>
          <div className="border-b-2 border-gray-400 mb-5 pb-3">
            <div className="text-xl text-textbase mt-5 mb-2 font-bold">📚 Certificate </div>
            <li>
              정보처리기사 <span className="red">2022.11.25</span>
            </li>
            <li>
              전산회계 2급 <span className="red">2022.04.27</span>
            </li>
            <li>
              리눅스마스터 2급 <span className="red">2021.10.01</span>
            </li>
            <li>
              네트워크관리사 2급 <span className="red">2021.07.21</span>
            </li>
          </div>
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
    </div>
  );
};

export default Intro;
