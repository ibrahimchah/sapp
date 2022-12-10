import { YMaps, Map } from "react-yandex-maps";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import React from "react";
import TopBar from "./TopBar";

const Mapp = () => {
  return (
    <>
      <TopBar />
      <LeftBar />
      <RightBar />
      <YMaps>
        <div id='map'>
          <Map
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            style={style}
          />
        </div>
      </YMaps>
    </>
  );
};

export default Mapp;

const style = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};
