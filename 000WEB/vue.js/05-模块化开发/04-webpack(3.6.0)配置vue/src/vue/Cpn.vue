<template>
  <div class="ptitle">
    <h3>我是Cpn组件的标题，哈哈哈</h3>
    <p>我是Cpn组件的内容，呵呵呵</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '我的名字叫Cpn',
    }
  },
}
</script>

<style scoped>
  .ptitle {
    color:darkorange;
  }
</style>