<template>
  <div class="fullscreen-visualizer">
    <canvas></canvas>
    <div
      class="controls"
      :class="{ playing: state === 'paused', paused: state === 'playing' }"
      @click="toggleState"
    >
      <div class="play" v-show="state === 'paused'" ></div>
      <div class="pause" v-show="state === 'playing'"></div>
    </div>
  </div>
</template>

<script>
  import { line } from 'lib/line'
  import debounce from 'lodash.debounce'

  export default {
    props: {
      padding: {
        type: Number,
        required: false,
        default: 2
      }
    },
    data () {
      return {
        canvasContext: {},
        audioContext: {},
        audioSource: {},
        audioAnalyser: {},
        gainNode: {},
        frequencyData: {},
        bufferLength: 0,
        stoppedTime: 0,
        barWidth: 0,
        canvas: {},
        state: '',
        bars: []
      }
    },
    methods: {
      toggleState () {
        if (this.state === 'playing') {
          this.state = 'paused'
          this.stoppedTime = this.audioSource.currentTime
          this.audioContext.suspend()
        } else {
          this.state = 'playing'
          this.audioContext.resume()
        }
      },
      resize () {
        let { offsetWidth: width, offsetHeight: height } = this.$el
        this.canvas.width = width
        this.canvas.height = height

        this.barWidth = (this.canvas.width / this.bars) - this.padding

        this.canvasContext.fillStyle = 'rgba(0, 0, 0, .35)'
        this.canvasContext.strokeStyle = 'rgba(0, 0, 0, .7)'
        this.canvasContext.lineWidth = 1
      },
      tick () {
        if (this.canvas.width >= 865) {
          this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height)

          this.audioAnalyser.getByteTimeDomainData(this.frequencyData)

          let width = this.canvas.width * 1.0 / this.bufferLength
          let x = 0

          for (let i = 0; i < this.bufferLength; i++) {
            let v = this.frequencyData[i] / 128.0
            let h = v * 23

            if (v !== 0) {
              if (!this.bars[i]) {
                this.bars[i] = 0
              }

              line({ x, y: this.canvas.height }, { x, y: this.canvas.height - this.bars[i] }, this.canvasContext)

              if (h < this.bars[i]) {
                this.bars[i] -= 1
              } else {
                this.bars[i] += 1
              }
            } else {
              this.canvasContext.moveTo(0, this.canvas.height)
            }
            x += width
          }
        }

        window.requestAnimationFrame(::this.tick)
      }
    },
    compiled () {
      this.canvas = this.$el.querySelector('canvas')
      this.canvasContext = this.canvas.getContext('2d')

      window.addEventListener('resize', debounce(this.resize, 150))

      this.audioContext = new window.AudioContext()
      this.audioAnalyser = this.audioContext.createAnalyser()
      this.audioSource = this.audioContext.createBufferSource()
      this.gainNode = this.audioContext.createGain()

      // The old fashioned way because Vue-Resource is silly
      let req = new window.XMLHttpRequest()
      req.open('GET', '/static/song.mp3', true)
      req.responseType = 'arraybuffer'
      req.onload = () => {
        let audioData = req.response
        this.audioContext.decodeAudioData(audioData, buffer => {
          this.audioSource.buffer = buffer
          this.audioSource.connect(this.gainNode)
          this.audioSource.connect(this.audioAnalyser)
          this.gainNode.connect(this.audioContext.destination)

          this.audioAnalyser.fft = 2048
          this.audioAnalyser.maxDecibels = -95
          this.audioAnalyser.smoothingTimeConstant = 1
          this.bufferLength = this.audioAnalyser.frequencyBinCount
          this.frequencyData = new Uint8Array(this.bufferLength)
          this.audioAnalyser.getByteTimeDomainData(this.frequencyData)

          this.gainNode.gain.value = 0.1
          this.gainNode.gain.exponentialRampToValueAtTime(0.25, 35)

          this.audioSource.loop = true
          this.audioSource.start()

          this.state = 'playing'
          this.tick()
        })
      }

      req.send()
    },
    attached () {
      this.resize()
    }
  }
</script>

<style lang="stylus" scoped>
  .fullscreen-visualizer
    pointer-events none
    canvas
      z-index -100

  .controls
    position absolute
    display flex
    align-items center
    justify-content center
    z-index 100
    bottom 4px
    right 4px
    background white
    box-shadow 0 2px 3px rgba(0, 0, 0, .35)
    pointer-events all

    &.playing
      padding 16px 10px

    &.paused
      padding 14px 22px

    .play
      width 0
      height 0
      border-style solid
      border-width 8px 16px
      border-color transparent transparent transparent black
      transform translateX(25%)

    .pause
      $width = 6px
      $height = 20px
      position relative
      width 8px // gap
      height $height

      &:before
      &:after
        content ''
        display block
        position absolute
        width $width
        height $height
        top 0
        left 0
        background black

      &:before
        transform translateX(-100%)

      &:after
        transform translateX(100%)
</style>
