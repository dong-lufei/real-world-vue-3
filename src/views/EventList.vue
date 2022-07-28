<template>
  <h1>公益活动</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ 代表 /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'HomeView',
  // 注册局部组件EventCard
  components: {
    EventCard
  },
  computed: {
    events () {
      return this.$store.state.events
    }
  },
  created () {
    this.$store.dispatch('fetchEvents').catch(err => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: {
          error: err.code
        }
      })
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