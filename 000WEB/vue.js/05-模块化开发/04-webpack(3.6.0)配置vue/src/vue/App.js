export default {
  template: `
  <div>
  <h1>{{message}}</h1>
  <button　v-on:click="btnclick">按钮</button>
  </div>
  `,
  data() {
    return {
      message: 'Vue have been installed',
    }
  },
  methods: {
    btnclick() {
      console.log(this.message);
    }
  }
}