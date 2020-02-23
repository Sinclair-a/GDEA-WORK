<template>
  <div>
  <h1 class="title">{{message}}</h1>
  <h2>{{message}}</h2>
  <button　v-on:click="btnclick">按钮</button>
  <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'

export default {
  data() {
    return {
      message: 'Vue have been installed',
    }
  },
  methods: {
    btnclick() {
      console.log(this.message);
    }
  },
  components: {
    Cpn,
  }
}
</script>

<style>
  .title {
    color:aqua;
  }
</style>