import axios from "axios";
const KEY = "AIzaSyCWUwk24jHu6oB0WFTEpo2TfJuiPsNRuQA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});