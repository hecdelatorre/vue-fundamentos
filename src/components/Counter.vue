<template>
  <h2>Counter</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
</template>

<script>
export default {
  data() {
    return {
      counter: 5
    }
  },
  methods: {
    getSquareValue() {
      return Math.pow(this.counter, 2)
    }
  },
  computed: {
    squareCounter() {
      return Math.pow(this.counter, 2)
    }    
  }
}
</script>

<style>

</style>
