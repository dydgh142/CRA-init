import React from "react";
import "./style.css";
import { FullPage, Slide } from "react-full-page/lib";
import First from "../../components/Main/First";
import Second from "../../components/Main/Second";
import Third from "./../../components/Main/Third";
import Fourth from "../../components/Main/Fourth";
const Fullpage = () => {
  return (
    <>
      <FullPage>
        <Slide>
          <First />
        </Slide>
        <Slide>
          <Second />
        </Slide>
        <Slide>
          <Third />
        </Slide>
        <Slide>
          <Fourth />
        </Slide>
      </FullPage>
    </>
  );
};

export default Fullpage;
