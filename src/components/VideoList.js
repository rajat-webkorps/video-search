import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect,handleRemove }) => {
    const videoListObject = { ids: [] };
    const renderedVideos = videos.filter(video => video !== null && video.id.videoId !== undefined).map((video) => {

        if (video.id.kind === "youtube#channel") {
            return null;
        }
        videoListObject.ids.push(video.id.videoId);
        return <VideoItem key={`${video.id.videoId}-${video.snippet.title}`} video={video} handleVideoSelect={handleVideoSelect} handleRemove={handleRemove} />;
    });
    return (
        <section className="gallery-block cards-gallery">

            <div > {renderedVideos}</div>
        </section>
    );
};

export default VideoList;
