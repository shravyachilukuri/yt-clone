import axios from "axios";

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    
    params:{
        key: "AIzaSyDcvg5aN7FsEtQoahx15mI8ODPaHt0wAxs"
    }
})

export default request;



