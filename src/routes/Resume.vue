<template>
  <div class="resume">
    <div class="categories">
      <div class="category">
        <a v-link="{ path: '/resume', exact: true }"}>about</a>
      </div>
      <div class="category">
        <a v-link="{ path: '/resume/theater', exact: true }">theater</a>
      </div>
      <div class="category">
        <a v-link="{ path: '/resume/webdev', exact: true }">web dev</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="stylus" scoped>
  .resume
    width 100%
    max-width 975px
    margin 0 auto
    transform translateX(-107px / 2) // Exact size of the side-nav

    @media screen and (max-width 865px)
      transform translateX(0)
      padding-left 16px
      padding-right 16px

  .categories
    display flex
    padding-top 4px

    .category
      display flex
      flex-grow 1
      flex-shrink 0
      align-items center
      justify-content center
      height 64px

      a
        display block
        padding 4px 8px
        color #000
        text-decoration none
        background transparent
        transition background .1s ease-in-out,
                   color .1s ease-in-out

        &:before
          content '>'
          color transparent
        &:after
          content '<'
          color transparent

        &:hover
          color #fff
          background #000

        &.v-link-active
          &:before
          &:after
            color #000

          &:hover
            &:before
            &:after
              color #fff
</style>
