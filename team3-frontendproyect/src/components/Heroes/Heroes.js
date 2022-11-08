import "./Heroes.css";
import billboard from "../../assets/images/batman begins2.jpg";
import batmanicon from "../../assets/images/batmanpng.png";
import ironmanicon from "../../assets/images/ironmanpng.png";
import deadpoolicon from "../../assets/images/deadpoolpng.png";
import wolverinicon from "../../assets/images/wolverinpng.png";
import doctorstrangeicon from "../../assets/images/doctorstrangepng.png";
import Batmanvideo from "../../assets/video/Batman.mp4";
import Deadpoolvideo from "../../assets/video/Deadpool.mp4";
import Wolverinvideo from "../../assets/video/wolverin.mp4";
import Ironmanvideo from "../../assets/video/Ironman.mp4";
import React, { useState } from "react";

const Show = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div>
      <div className="containerVideo">
        <div className="info1">
          <img className="figure" src={batmanicon} />

          <button onClick={() => setShow(!show)}>Video</button>
        </div>

        <div className="video">
        {show ? (
          <video
            src={Batmanvideo}
            alt=""
            width={850}
            controls
            autoPlay
            className="video"
          />
        ) : null}
        </div>
      </div>


      <div className="containerVideo">
      <div className="info2">
        <img className="figure" src={ironmanicon} />

        <button onClick={() => setShow2(!show2)}>Video</button>
      </div>

      <div className="video">
        {show2 ? (
          <video
            src={Ironmanvideo}
            alt=""
            width={850}
            controls
            autoPlay
            className="video"
          />
        ) : null}
      </div>
      </div>

      <div className="containerVideo">

      <div className="info3">
        <img className="figure" src={wolverinicon} />

        <button onClick={() => setShow3(!show3)}>Video</button>
      </div>

      <div className="video">
        {show3 ? (
          <video
            src={Wolverinvideo}
            alt=""
            width={850}
            controls
            autoPlay
            className="video"
          />
        ) : null}
      </div>
      </div>
    </div>
  );
};

export default Show;
