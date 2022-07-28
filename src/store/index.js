import { createStore } from "vuex"
import EventService from "@/services/EventService"

export default createStore({
  state() {
    return {
      user: "dlf",
      events: [],
      event: {}
    }
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then((res) => {
          commit("ADD_EVENT", event)
        })
        .catch((err) => {
          console.log("进入postEvent接口捕获", err)
          throw err
        })
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then((res) => {
          commit("SET_EVENTS", res.data)
        })
        .catch((err) => {
          console.log("进入getEvents接口捕获", err)
          throw err
        })
    },
    fetchEvent({ commit, state }, id) {
      // 如果存在
      const existingEvent = state.events.find((item) => item.id === id)
      if (existingEvent) {
        commit("SET_EVENT", existingEvent)
      } else {
        return EventService.getEvent(id)
          .then((res) => {
            commit("SET_EVENT", res.data)
          })
          .catch((err) => {
            console.log("进入getEvent接口捕获", err)
            throw err
          })
      }
    }
  },
  modules: {}
})
