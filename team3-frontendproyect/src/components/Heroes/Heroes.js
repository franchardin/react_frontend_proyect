import "./Heroes.css";
import batmanicon from "../../assets/images/batmanpng.png";
import ironmanicon from "../../assets/images/ironmanpng.png";
import wolverinicon from "../../assets/images/wolverinpng.png";
import Batmanvideo from "../../assets/video/Batman.mp4";
import Wolverinvideo from "../../assets/video/wolverin.mp4";
import Ironmanvideo from "../../assets/video/Ironman.mp4";
import React, { useState } from "react";

const SelectVideo = () => {
	const [video, setVideo] = useState(false);

	return (
		<div className="heroesContainer">
			<div className="videoContainer">
				<div className="video">
					<div>{video}</div>
					{video ? (
						<video
							src={video}
							alt="video"
							controls
							autoPlay
							className="video"
						/>
					) : null}
				</div>
			</div>
			{/* se puede mejorar armado un array de objetos con nombre de ícono y del video y renderizando con un for */}
			<div className="infoContainer">
				<div className="heroCard card bg-dark">
					<img className="figure" alt="batman" src={batmanicon} />
					<button className="btn btn-primary" onClick={() => setVideo(video !== Batmanvideo ? Batmanvideo : false)}>Ver Trailer</button>
				</div>
				<div className="heroCard card bg-dark">
					<img className="figure" alt="ironman" src={ironmanicon} />
					<button className="btn btn-primary" onClick={() => setVideo(video !== Ironmanvideo ? Ironmanvideo : false)}>Ver Trailer</button>
				</div>

				<div className="heroCard card bg-dark">
					<img className="figure" alt="wolverine" src={wolverinicon} />
					<button className="btn btn-primary" onClick={() => setVideo(video !== Wolverinvideo ? Wolverinvideo : false)}>Ver Trailer</button>
				</div>
			</div>
		</div>
	);
};

export default SelectVideo;