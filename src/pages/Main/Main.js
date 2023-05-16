import React, { useRef, useEffect } from "react";
import "./style.css";
import "./dogbtn.css";

const Main = () => {
  // 시,분,초를 나타내는 요소를 가져오기
  const hourHandRef = useRef(null);
  const minuteHandRef = useRef(null);
  const secondHandRef = useRef(null);

  // 랜더링될때 최초로 실행하지만 인터벌을 이용하여 1초마다 함수 반복실행
  useEffect(() => {
    const intervalId = setInterval(() => {
      clock();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // 1초마다 반복되는 함수
  function clock() {
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12) + 1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    if (hourHandRef.current) {
      hourHandRef.current.style.transform = `rotate(${hour}deg)`;
    }

    if (minuteHandRef.current) {
      minuteHandRef.current.style.transform = `rotate(${minute}deg)`;
    }

    if (secondHandRef.current) {
      secondHandRef.current.style.transform = `rotate(${second}deg)`;
    }
  }

  return (
    <>
      <div className="toggle-wrapper">
        <div className="toggle dog-rollover">
          <input id="doggo" type="checkbox" />
          <label className="toggle-item" htmlFor="doggo">
            <div className="dog">
              <div className="ear"></div>
              <div className="ear right"></div>
              <div className="face">
                <div className="eyes"></div>
                <div className="mouth"></div>
              </div>
            </div>
          </label>
        </div>
      </div>
      <section className="clock">
        <div className="hands">
          <div className="hour" ref={hourHandRef}></div>
          <div className="minute" ref={minuteHandRef}></div>
          <div className="second" ref={secondHandRef}></div>
        </div>
      </section>
    </>
  );
};

export default Main;
