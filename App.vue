<template>
  <div id="app">

    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'v-footer':Footer
  },
  /* mounted(){
    axios({url:'/data/a.json'}).then(
      res=>console.log(res.data)
    )
  } */
}
</script>

<style>
/* 全局样式 */
a{ text-decoration:none; }
li{ list-style:none; }

  </style>
