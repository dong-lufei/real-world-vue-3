<template>
  <h4>哎呀！有一个错误：</h4>
  <p>{{ error }}</p>
</template>

<script>
export default {
  props: ['error']
}
</script>