<template>
  <!--
  <img alt="Vue logo" src="@/assets/logo.png">
  <Counter v-bind:start="1" v-bind:raise="2"/>
  <Counter :start="2" :raise="3"/>
  -->

  <Indecision/>
</template>

<script>
import Indecision from "./components/Indecision.vue"
// import Counter from "./components/Counter.vue"
export default {
  name: 'App',
  components: {
    // Counter
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
