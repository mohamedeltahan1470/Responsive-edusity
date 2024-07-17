import "./Videoplayer.css"
import video from '../assets/HD.mp4';
import { useRef } from "react";
const Videoplayer = ({playstate , setPlaystate}) => {

  const player = useRef(null);
  const closePlayer = (e) => {
    if(e.target === player.current){
      setPlaystate(false)
    }
  }
  return (
    <div className={`videoplayer ${playstate? '':'hide'} `} ref={player} onClick={
      closePlayer
    }>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer