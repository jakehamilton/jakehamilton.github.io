<template>
  <div class="dial">
    <svg :width="size * 2" :height="size * 2" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle
          :r="size / 2"
          :cy="size"
          :cx="size"
          :stroke="color"
          :stroke-width="strokeWidth"
          :style="{ strokeDashoffset: dashOffset + 'px', strokeDasharray: initialDashOffset + 'px' }"
          fill="transparent"
          class="animate"
        ></circle>
      </g>
    </svg>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lastTime: false,
        dashOffset: 3.14 * this.size,
        initialDashOffset: 3.14 * this.size
      }
    },
    props: {
      size: {
        type: Number,
        default: 40,
        required: false
      },
      strokeWidth: {
        type: Number,
        default: 15,
        required: false
      },
      color: {
        type: String,
        default: '#000000',
        required: false
      },
      duration: {
        type: Number,
        default: 4,
        required: false
      },
      percent: {
        type: Number,
        default: 75,
        required: false
      }
    },
    ready () {
      let circumference = Math.PI * this.size
      let percent = ((100 - this.percent) / 100) * circumference

      // JS Callback Stack
      setTimeout(() => (this.dashOffset = percent), 0)
    }
  }
</script>

<style lang="stylus" scoped>
  svg
    transform rotate(-90deg)

  .animate
    transition all 0.75s ease-in-out
</style>
