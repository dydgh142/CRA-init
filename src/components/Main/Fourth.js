import React from "react";
import { Link } from "react-router-dom";

const Fourth = () => {
  return (
    <div className="pt-[50px]">
      <div className="relative">
        버튼 기준점
        <Link
          to="/test"
          type="button"
          className="absolute left-[50%] translate-x-[-50%] top-[100%] max-sm:w-[200px] max-sm:h-[40px] max-sm:py-3 max-sm:px-0 py-4 px-20 firstTranslate cursor-pointer text-sm lg:text-base bg-orange-300 rounded-xl font-bold"
        >
          소개 페이지로 이동
        </Link>
      </div>
    </div>
  );
};

export default Fourth;
