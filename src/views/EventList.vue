<template>
  <h1>善事活动</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ 代表 /src
import EventCard from '@/components/EventCard.vue'
import axios from "axios"

export default {
  name: 'HomeView',
  // 注册局部组件EventCard
  components: {
    EventCard
  },
  data () {
    return {
      events: null
    }
  },
  created () {
    axios.get("https://my-json-server.typicode.com/git136975643/vuecli-sfc/events").then(res => {
      console.log('events', res.data)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>