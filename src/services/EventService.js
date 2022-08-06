import axios from "axios"

const apiClient = axios.create({
  // 本地用json-server工具监听
  // baseURL: "http://localhost:3000",

  // 线上用my-json-server监听， 但修改数据不会持久化
  baseURL: "https://my-json-server.typicode.com/git136975643/real-world-vue-3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getEvents() {
    return apiClient.get("/events")
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  },
  postEvent(event) {
    return apiClient.post("/events", event)
  }
}
