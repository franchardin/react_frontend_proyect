import "bootstrap/dist/css/bootstrap.css"
import "./Videoplayer.css"

function Videoplayer() {
    return (
        <div className="Videoplayer">
            <video className="Video" alt=""  type="video/mp4" controls />


        </div>
      );
}



export default Videoplayer;