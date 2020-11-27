import React from "react";


const Player = (props) => {
  console.log(props)
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        onClick={()=>console.log(props)}
        className="embed-responsive-item"
        src={props.src}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
