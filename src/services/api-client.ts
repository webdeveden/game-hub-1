import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "af1e8e5a730b4a88bcb953e96c02832e",
  },
});
