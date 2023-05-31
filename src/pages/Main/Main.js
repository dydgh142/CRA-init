import React from "react";

const Main = () => {
  return (
    <div>
      <section className="relative h-[80vh]">
        <img src="img/cat.jpg" className="opacity-50 w-[100vw] h-[100%] object-cover" alt="고양이 배경" />
        <p className="absolute top-[50%] left-[50%] -translate-x-[50%] text-[#4a4a4a] text-2xl">Welcome my home :)</p>
      </section>
    </div>
  );
};

export default Main;
