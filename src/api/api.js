import axios from "axios";

function fetchAllList() {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=e0a9e6005331417d9a5d0eeb95ce6753`
  );
}
export { fetchAllList };
