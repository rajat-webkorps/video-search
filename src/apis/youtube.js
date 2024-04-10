import axios from "axios";
const KEY = "AIzaSyBuGVP0AhI09Y1ddi4IPbtRJjuk5y9NoXA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 11,
    key: KEY,
  },
});