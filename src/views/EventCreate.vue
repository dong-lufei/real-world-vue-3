<template>
  <h1>创建一个活动</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>请选择一个分类：</label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >{{ option }}</option>
      </select>

      <h3>名字 and 描述你的活动</h3>

      <label>标题</label>
      <input v-model="event.title" type="text" placeholder="Title" />

      <label>描述</label>
      <input v-model="event.description" type="text" placeholder="Description" />

      <h3>活动地点?</h3>

      <label>位置</label>
      <input v-model="event.location" type="text" placeholder="Location" />

      <h3>活动时间?</h3>
      <label>日期</label>
      <input v-model="event.date" type="text" placeholder="Date" />

      <label>时间</label>
      <input v-model="event.time" type="text" placeholder="Time" />
      <p>
        <button type="submit">提交</button>
      </p>
    </form>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        organizer: '' // 不要在这直接写this.$store.state.user
      }
    }
  },
  methods: {
    onSubmit () {
      const event = {
        ...this.event,
        id: uuidv4().replaceAll("-", ''),
        organizer: this.$store.state.user
      }

      this.$store.dispatch('createEvent', event).then(() => {
        setTimeout(() => {
          // 创建成功后跳转到它的详情页
          this.$router.push({
            name: 'EventDetails',
            params: {
              id: event.id
            }
          })
        }, 500)
      }).catch(err => {
        this.$router.push({
          name: 'ErrorDisplay',
          params: {
            error: err.code
          }
        })
      })
    }
  }
}
</script>
<style scoped>
label {
  display: block;
}
</style>