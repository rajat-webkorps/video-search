import React, { useState } from "react";
import youtube from "./apis/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]); // Array for videos
  const [selectedVideo, setSelectedVideo] = useState(null); // Selected video object
  const [videoDetails, setVideoDetails] = useState({
    duration: "",
    viewCount: "",
  }); // Duration and viewCount details

  const handleSubmit = async (termFromSearchBar) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: termFromSearchBar,
        },
      });
      console.log("This is term", termFromSearchBar);
      if (response.data.items.length === 0) {
        throw new Error("No videos found");
      }
      console.log(response.data.items[0].id.kind);
      setVideos(response.data.items);
      setSelectedVideo(null);

      const vidId = response.data.items[0].id.videoId;
      const details = await youtube.get("/videos", {
        params: {
          id: vidId,
          part: "contentDetails,statistics",
        },
      });

      // const thumb = response.data.items[0].snippet.thumbnails.default.url;
      // const title = response.data.items[0].snippet.title;
      // const chanlNam = response.data.items[0].snippet.channelTitle;
      const duration = details.data.items[0].contentDetails.duration;
      const viewCount = details.data.items[0].statistics.viewCount;

      setVideoDetails({ duration, viewCount });

      // console.log("Thumbnail, Title, Duration, View count, and Channel Name.");
      // console.log(
      //   `Thumbnail= ${thumb}, Title= ${title}, Duration= ${duration}, View count= ${viewCount}, and Channel Name= ${chanlNam}`
      // );

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  const handleClose = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="App">
      <div className="ui container" style={{ marginTop: "1em" }}>
        <div className="wrapper center">
          <div className="logo">
            <img
              src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
              height="150"
              alt="Logo"
            />
          </div>
          <h4>Tool to search within Video in 2 simple steps:</h4>
          <br />
          <div className="pageButton">
            <button type="button" className="btn btn-success btn-circle btn-lg">
              1
            </button>
            <h2 style={{ marginTop: "5px", color: "green" }}>----------</h2>
            <button type="button" className="btn btn-success btn-circle btn-lg">
              2
            </button>
          </div><br/>
          <div className="search">
            <b>Select the video link or video channel from youtube.</b>
            (You can select up to 10 videos or 1 channel in this demo version)
          </div>
          <SearchBar handleFormSubmit={handleSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail
                  video={selectedVideo}
                  onClose={handleClose}
                  duration={videoDetails.duration}
                  viewCount={videoDetails.viewCount}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ten wide column">
                <VideoList
                  handleVideoSelect={handleVideoSelect}
                  videos={videos}
                />
              </div>
      </div>
    </div>
  );
}

export default App;

