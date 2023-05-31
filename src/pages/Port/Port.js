import React from "react";

const Port = () => {
  return (
    <div className="pt-12 text-left">
      <section className="bg-orange-100">
        <h2 className="w-[70%] mx-auto text-3xl text-textbase font-semibold py-5">💻Projects</h2>
      </section>
      <section className="w-[70%] mx-auto py-8 pb-14 border-b-2 border-gray-200">
        <h3 className="text-2xl text-textbase font-semibold mb-2">
          멋쟁이사자처럼 최종프로젝트{" "}
          <a href="https://github.com/kindergarten-udon/udon-house" target="_blank" className="textbutton">
            ‘우동집’
          </a>
        </h3>
        <div className="text-gray-500 mb-6">참여인원: 총 5명</div>
        <div className="font-bold text-2xl text-textbase mb-2">Description</div>
        <div className="border-l-[3px] pl-4 border-textbase mb-5">2023.03.09 - 2023.03.27 (3주)</div>
        <div className="font-bold text-xl text-textbase mb-2">Summary</div>
        <div className="mb-5">📌 React, tailwind, Recoil 등을 이용한 기획 프로젝트</div>
        <div className="my-3">
          <div className="font-semibold mb-2">팀 활동</div>
          <li className="my-1">DailyScrum이용, 스프린트를 나누어 단기적 목표 설정 및 개발 현황 보고를 통해 팀원끼리 진행사항 숙지</li>
          <li className="my-1">웹 접근성 체크리스트 작성을 통해 마우스, 키보드 동시접근 가능</li>
        </div>
        <div className="my-3 mb-10">
          <div className="font-semibold mb-2">YoonHo’s role</div>
          <li className="my-1">DailyScrum 활용, 팀원들과 단기목표 설정 및 진행사항 보고등 회의록을 정리하고 Wiki에 최신화를 통해 현재 프로젝트의 진행사항을 쉽게 확인할 수 있도록 함</li>
          <li className="my-1">figma를 이용해 웹페이지의 디자인을 도맡아 진행. (참고사이트는 아이들나라 이며 새로운 페이지인 경우는 새로 기획하고 기존페이지는 각색을 통해 프로젝트를 진행)</li>
          <li className="my-1">마이페이지의 회원만의 게시글, 즐겨찾기를 갖고오기 위해 현재 로그인되어 있는 정보의 유저아이디와 게시글의 createId를 비교후 랜더링</li>
          <li className="my-1">
            게시판의 인기 게시물 순위 변화, 사용자의 게시글 작성등 실시간 랜더링을 위한{" "}
            <a href="https://strap.tistory.com/68" target="_blank" className="textbutton">
              onSnapshot
            </a>
            코드작성
          </li>
        </div>
        <a href="https://github.com/kindergarten-udon/udon-house" target="_blank" className="textbutton text-lg">
          프로젝트 우동집의 GitHub
        </a>
      </section>
      <section className="w-[70%] mx-auto py-8 pb-14 border-b-2 border-gray-200">
        <h3 className="text-2xl text-textbase font-semibold mb-2">
          멋쟁이사자처럼 중간프로젝트{" "}
          <a href="https://github.com/likelion-js-project4/taing" target="_blank" className="textbutton">
            ‘TAING’
          </a>
        </h3>
        <div className="text-gray-500 mb-6">참여인원: 총 5명</div>
        <div className="font-bold text-2xl text-textbase mb-2">Description</div>
        <div className="border-l-[3px] pl-4 border-textbase mb-5">2023.01.27 - 2023.02.09 (2주)</div>
        <div className="font-bold text-xl text-textbase mb-2">Summary</div>
        <div className="mb-5">📌 vanliaJS를 이용한 반응협 웹 프로젝트</div>
        <div className="my-3">
          <div className="font-semibold mb-2">팀 활동</div>
          <li className="my-1">DailyScrum이용, 스프린트를 나누어 단기적 목표 설정 및 개발 현황 보고를 통해 팀원끼리 진행사항 숙지</li>
          <li className="my-1">웹 접근성 체크리스트 작성을 통해 마우스, 키보드 동시접근 가능</li>
        </div>
        <div className="my-3 mb-10">
          <div className="font-semibold mb-2">YoonHo’s role</div>
          <li className="my-1">wiki를 매일 오전 DailyScrum 회의가 끝난후 최신화 함으로써 프로젝트의 팀 활동 과정과 진행사항 등을 쉽게 파악할 수 있게함</li>
          <li className="my-1">로그인, 회원가입등 기준 충족시 버튼 활성화 및 접근가능</li>
          <li className="my-1">LightHouse를 통해 성능, SEO등 20점 향상</li>
        </div>
        <a href="https://github.com/likelion-js-project4/taing" target="_blank" className="textbutton text-lg">
          프로젝트 타잉의 GitHub
        </a>
      </section>
    </div>
  );
};

export default Port;
