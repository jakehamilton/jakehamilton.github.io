<template>
  <div class="fullscreen-stars">
    <canvas></canvas>
  </div>
</template>

<script>
  import Dot from 'lib/dot'
  import { line } from 'lib/line'
  import debounce from 'lodash.debounce'
  import { between } from 'lib/util'

  export default {
    props: {
      follow: {
        type: Object,
        required: true
      },
      numOfDots: {
        type: Number,
        default: 150,
        required: false
      }
    },
    data () {
      return {
        ctx: {},
        dots: [],
        canvas: {}
      }
    },
    methods: {
      resize () {
        let { offsetWidth: width, offsetHeight: height } = this.$el
        this.canvas.width = width
        this.canvas.height = height

        this.ctx.fillStyle = 'rgba(0, 0, 0, .35)'
        this.ctx.strokeStyle = 'rgba(0, 0, 0, .35)'
        this.ctx.lineWidth = 0.15
      },
      tick () {
        if (this.canvas.width > 865) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

          for (let dot of this.dots) {
            dot.move(this.canvas)
            dot.draw(this.ctx)

            if (dot.near(this.follow)) {
              for (let _dot of this.dots) {
                if (_dot === dot) continue
                if (dot.near(_dot.pos)) line(dot.pos, _dot.pos, this.ctx)
              }
            }
          }
        }
        window.requestAnimationFrame(::this.tick)
      }
    },
    compiled () {
      this.canvas = this.$el.querySelector('canvas')
      this.ctx = this.canvas.getContext('2d')

      window.addEventListener('resize', debounce(this.resize, 150))
    },
    attached () {
      this.resize()
      this.dots = new Array(this.numOfDots)
        .fill({})
        .map(x => new Dot({ x: between(0, this.canvas.width), y: between(0, this.canvas.height), s: between(0.075, 0.6) }))
      this.tick()
    }
  }
</script>

<style lang="stylus" scoped>
  .fullscreen-stars
    z-index -1
</style>
