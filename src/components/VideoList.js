import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {

        if (video.id.kind === "youtube#channel") {
            return null;
        }
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />;
    });

    return (
        <section className="gallery-block cards-gallery">

            <div > { renderedVideos }</div>
        </section>
    );
};

export default VideoList;
