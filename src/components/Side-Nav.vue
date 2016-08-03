<template>
  <div class="side-nav">
    <h1>Projects</h1>
    <a
      v-for="project of routes.projects"
      v-link="{ path: '/project' + project.path }"
    >{{ project.name }}</a>
    <h1>Info</h1>
    <a
      v-for="part of routes.info"
      v-link="{ path: part.path }"
    >{{ part.name }}</a>
    <div class="home-wrapper">
      <a v-link="{ path: '/' }">home</a>
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
    }
  }
</script>

<style lang="stylus" scoped>
  .side-nav
    display flex
    flex-direction column
    align-items flex-start
    padding 24px
    width 107px + (24px * 2)

    @media screen and (max-width 865px)
      display none

    h1
      margin-top 16px
      margin-bottom 0
      font-size 1.2em

      &:first-child
        margin-top 0

    a
      padding 4px 8px
      margin-top 4px
      color #000
      background transparent
      text-decoration none
      transition background .1s ease-in-out,
                 color .1s ease-in-out

      &:before
        content '+ '

      &:hover
        color #fff
        background #000

    .home-wrapper
      display flex
      align-items flex-end
      flex-grow 1

      a
        &:before
          content '+ '
</style>
