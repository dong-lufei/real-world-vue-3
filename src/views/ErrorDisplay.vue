<template >
  <div class="wrap">
    <h4>哎呀！有一个错误：</h4>
    <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
<style scoped>
.wrap {
  color: red;
}
</style>