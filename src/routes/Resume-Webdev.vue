<template>
  <div class="web-dev">
    <h1 class="title">Web Development</h1>
    <div class="skills">
      <div class="skill">
        <dial class="dial" :percent="85"></dial>
        <div class="name">Jade</div>
      </div>
      <div class="skill">
        <dial class="dial" :percent="92"></dial>
        <div class="name">Stylus</div>
      </div>
      <div class="skill">
        <dial class="dial" :percent="99"></dial>
        <div class="name">JavaScript</div>
      </div>
      <div class="skill">
        <dial class="dial" :percent="80"></dial>
        <div class="name">Vue + Vuex</div>
      </div>
      <div class="skill">
        <dial class="dial" :percent="68"></dial>
        <div class="name">Node</div>
      </div>
    </div>
    <p class="brief">
      Having always been fascinated by the web, at the age of 14 I decided to
      look deeper into how exactly it all works. In my wisdom, I decided the best
      place to find answers to my miryad of questions was YouTube. This search led
      me to an introductory video on "HTML: The language of the web". I was hooked.
    </p>
    <p class="brief">
      Now, at the
      time I had no clue how anything worked and struggled to create even the
      most simplistic page. However, this only made me crave more. For
      the next 5 years, I would study web development. Growing from a novice to
      a perfectly capable developer. In these years, I've grown affectionate
      towards JavaScript. Node is my go-to for server needs and Vue is my go-to
      front-end framework. I love them all and simply can't get enough of JS, so
      I am always pushing myself to learn more about the language and its many
      features.
    </p>
    <div class="links">
      <h1>Tools</h1>
      <h4>things i use</h4>
      <div class="tools">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
        <span title="favorite">&#10084; Jade</span>
        <span>EJS</span>
        <span title="favorite">&#10084; Stylus</span>
        <span>SASS / SCSS</span>
        <span>LESS</span>
        <span title="favorite">&#10084; Vue</span>
        <span>Vuex</span>
        <span>React</span>
        <span>JSX</span>
        <span>Gulp</span>
        <span title="favorite">&#10084; Webpack</span>
        <span title="favorite">&#10084; Atom</span>
        <span title="favorite">&#10084; Node</span>
        <span>Express</span>
        <span>Socket.io</span>
        <span>MongoDB</span>
        <span>MySQL</span>
        <span>Windows</span>
        <span title="favorite">&#10084; Ubuntu</span>
      </div>
    </div>
    <div class="links">
      <h1>Previous Work</h1>
      <h4>show and tell</h4>
      <h2><a href="https://github.com/jakehamilton" target="_blank">github</a></h2>
      <h2><a href="http://beyondthefringeoc.com" target="_blank">beyond_the_fringeoc</a></h2>
    </div>
  </div>
</template>

<script>
  import Dial from 'components/Dial'

  export default {
    components: { Dial }
  }
</script>

<style lang="stylus" scoped>
  .web-dev
    padding-top 16px

    h1
      font-size 1.6em
      text-align center
      margin-top 0
      margin-bottom 0

      &.title
        margin-bottom 1em

    h4
      font-size 0.8em
      text-align center
      margin-top 0
      margin-bottom 1em
      font-weight lighter

  .skills
    display flex
    align-items center
    justify-content center
    flex-wrap wrap

    .skill
      display flex
      align-items center
      flex-direction column
      margin 0 16px


  .brief
    width 100%
    max-width 600px
    margin 16px auto
    text-align center

  .links
    width 100%
    max-width 600px
    margin 3em auto

    h2
      font-size 1.25em
      margin-top 1em
      margin-bottom 0

      &:first-of-type
        margin-top 0


      a
        color #000
        padding 4px 8px
        background transparent
        text-decoration none
        transition background .1s ease-in-out,
                   color .1s ease-in-out

        &:before
          content '+ '

        &:hover
          color #fff
          background #000

  .tools
    display flex
    justify-content center
    flex-wrap wrap

    span
      display inline-block
      padding 8px 16px
      background #000
      color #fff
      margin 4px
      line-height 1em
      cursor default
</style>
