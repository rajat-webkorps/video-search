import React from "react";

const VideoDetail = ({ video, onClose, duration,viewCount }) => {
  if (!video) {
    return null;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <button className="close-btn" onClick={onClose}>Close</button>
      <img className="ui image card-img-top" src={video.snippet.thumbnails.medium.url} alt="" />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">Duration : { duration}</p>
        <p className="card-text">View Count : {viewCount}</p>
        <p className="card-text">Channel Name : {video.snippet.channelTitle}</p>
        {/* <a href={video} className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  );
};

export default VideoDetail;
