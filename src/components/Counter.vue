<template>
  <h2>{{ customTitle }}</h2>
  <p>{{ counter }} <sup>{{ pow }}</sup> = {{ squareCounter }}</p>

  <div>
    <button class="btn btn-primary" @click="increase">+1</button>
    <button class="btn btn-secondary" @click="decrease">-1</button>
  </div>

</template>

<script>
export default {
  props: {
    title: String,
    start: {
      type: Number,
      required: true,
      validator( value ) {
        return value >= 0
      }
    },
    raise: {
      type: Number,
      default: 2,
      //required: true
      validator( value ) {
        return value >= 2
      }
    }
  },
  data() {
    return {
      counter: this.start,
      pow: this.raise
    }
  },
  methods: {
    getSquareValue() {
      return Math.pow(this.counter, 2)
    },
    increase() {
      this.counter += 1
    },
    decrease() {
      this.counter -= 1
    }
  },
  computed: {
    squareCounter() {
      return Math.pow(this.counter, this.raise)
    },
    customTitle() {
      // return this.title || 'Counter'
      return this.title ? this.title : 'Counter'
    }
  }
}
</script>

<style>
button {
  background-color: #64BB87;
  border-radius: 5px;
  border: 1px solid white;
  color: white; 
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>
