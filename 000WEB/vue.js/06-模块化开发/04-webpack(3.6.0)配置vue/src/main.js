import { add } from "../src/js/mathUtils";

add(24,64);

// require ('./css/backGroung.css')
//依赖css
import css from "./css/backGroung.css";

//依赖less
import less from "./css/nomal.less";

//使用vue开发
import Vue from 'vue'

//从js文件导入组件
//import App from '../src/js/app.js'
//从vue文件导入组件
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  }
})