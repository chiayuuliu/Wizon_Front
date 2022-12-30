import axios from "axios";

export default axios.create({
  // 測試環境API
  baseURL: "https://wizonapi.minilive.xyz",
});
