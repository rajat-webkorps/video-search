import React from "react";
import '../style/video.css';

const VideoItem = ({video,handleVideoSelect}) =>{
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
                <h4 className="ui header">{video.snippet.channelTitle}</h4>
            </div>
            
        </div>
    )
}
export default VideoItem;