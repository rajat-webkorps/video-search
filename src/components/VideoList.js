import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.filter(video => video !== null && video.id.videoId!==undefined).map((video) => {
        
        if (video.id.kind === "youtube#channel") {
            return null;
        }
        return <VideoItem key={`${video.id.videoId}-${video.snippet.title}`} video={video} handleVideoSelect={handleVideoSelect} />;
    });
    
    // =====================Video List==========================
        const videoListObject ={ids:[]};
        renderedVideos.forEach((video) => {
            if (video !== null && video.props.video.id.videoId!==undefined) {
                videoListObject.ids.push(video.props.video.id.videoId);
            }
        })
    // =====================Video List End==========================

    return (
        <section className="gallery-block cards-gallery">

            <div > { renderedVideos }</div>
        </section>
    );
};

export default VideoList;
