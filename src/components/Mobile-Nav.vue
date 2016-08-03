<template>
  <div class="mobile-nav">
    <div class="nav-header" :class="{ alt: open }">
      <div class="route-name" :class="{ alt: open }">{{ $route.path }}</div>
      <div class="icon-wrapper">
        <div class="icon" :class="{ alt: open }" @click="open = !open"></div>
      </div>
    </div>
    <div class="nav-menu" :class="{ open: open }">
      <div class="home-wrapper">
        <a v-link="{ path: '/' }">home</a>
      </div>
      <h1>Info</h1>
      <a
        v-for="part of routes.info"
        v-link="{ path: part.path }"
      >{{ part.name }}</a>
      <h1>Projects</h1>
      <a
      v-for="project of routes.projects"
      v-link="{ path: '/project' + project.path }"
      >{{ project.name }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      routes: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        open: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mobile-nav
    position fixed
    width 100%
    top 0
    left 0
    pointer-events none
    z-index 100

    @media screen and (min-width 865px)
      display none

  .nav-header
    position absolute
    width 100%
    height 58px
    display flex
    justify-content space-between
    align-items center
    padding-right 16px
    padding-left 16px
    padding-top 16px
    padding-bottom 16px
    z-index 2
    pointer-events all

    &.alt
      background black

      .icon-wrapper
        background transparent
        box-shadow none

    .route-name
      font-weight bold
      font-size 1.1em
      color black
      background white
      padding 8px 16px
      box-shadow 0 2px 3px rgba(0, 0, 0, .25)

      &.alt
        color white
        background transparent
        box-shadow none


    .icon-wrapper
      padding 16px 8px
      background white
      box-shadow 0 2px 3px rgba(0, 0, 0, .25)

    .icon
      $width = 32px
      $height = 4px
      $gap = 8px
      position relative
      height $height
      width $width
      background black

      &.alt
        background white

        &:before
        &:after
          background white

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
        transform translateY(-1 * $gap)

      &:after
        transform translateY($gap)

  .nav-menu
    padding-top 64px
    padding-bottom 16px
    width 100%
    will-change transform
    transition transform 0.3s ease-out
    transform translateY(-100%)
    background black
    color white
    z-index 1
    pointer-events all

    &.open
      transform translateY(0)

    a
      display block
      color white
      text-decoration none
      margin-top 8px
      padding 12px
      padding-left 32px

      &:first-child
        margin-top none

      &:before
        content '+ '

      &:active
        color black
        background white

    h1
      font-size 1.25em
      padding-left 21px
</style>
