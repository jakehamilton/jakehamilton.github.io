<template>
  <div id="app">
    <fullscreen-stars :follow="mouse" class="stars"></fullscreen-stars>
    <div class="page">
      <side-nav :routes="routes" class="nav"></side-nav>
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import SideNav from 'components/Side-Nav'
  import FullscreenStars from 'components/Fullscreen-Stars'

  export default {
    data () {
      return {
        mouse: { x: -999, y: -999 },
        routes: {
          projects: [
            { path: '/blink', name: 'blink' }
          ],
          info: [
            { path: '/resume', name: 'resume' },
            { path: '/contact', name: 'contact' }
          ]
        }
      }
    },
    attached () {
      window.addEventListener('mousemove', event => {
        this.mouse.x = event.pageX
        this.mouse.y = event.pageY
      }, true)
    },
    components: {
      SideNav,
      FullscreenStars
    }
  }
</script>

<style lang="stylus">
  *
  *:before
  *:after
    box-sizing border-box

  html
  body
    width 100%
    height 100%

  body
    margin 0
    font-size 16px
    font-family Source Sans Pro, Helvetica, Arial, Sans-Serif

  #app
    position relative
    width 100%
    height 100%
    overflow hidden

  .stars
    position absolute
    top 0
    left 0
    width 100%
    height 100%

  .page
    display flex
    width 100%
    height 100%

  .nav
    height 100%
    flex-grow 0
    flex-shrink 0

  .view
    flex-grow 1
    overflow auto
</style>
