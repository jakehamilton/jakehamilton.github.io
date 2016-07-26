<template>
  <div class="theater">
    <h1 class="title">Theater</h1>
    <div class="skills">
      <div class="skill">
        <dial class="dial" :percent="93"></dial>
        <div class="name">Sound Mixing</div>
      </div>
      <div class="skill">
        <dial class="dial" :percent="82"></dial>
        <div class="name">Sound Design</div>
      </div>
      <div class="skill">
        <dial class="dial" :percent="72"></dial>
        <div class="name">Lighting Design</div>
      </div>
      <div class="skill">
        <dial class="dial" :percent="100"></dial>
        <div class="name">Cable Management</div>
      </div>
      <div class="skill">
        <dial class="dial" :percent="70"></dial>
        <div class="name">Set Construction</div>
      </div>
    </div>
    <p class="brief">
      Theater has a special place in my heart. Originally supposed to be a
      one-time-thing to gather credits for graduation, I ended up participating
      in Laguna Hills High School's (LHHS) drama program all four years of my schooling.
      I fell in love with the world of live theater and saw first-hand just how
      magical it can be. I love that I get to create a whole world for the
      audience to experience.
    </p>
    <p class="brief">
      After two years at LHHS, I took on the role of sound lead. After doing so,
      I became the first cappie eligible sound tech at LHHS because I performed
      all of the equalization, mic'ing, demic'ing, mixing, and sound design myself
      without the help of a non-student member. As such, I was pushed to my limit
      with every show only to exceed it. With each performance under my belt, the
      quality of my work improves and is apparent to the audience (who can enjoy
      the show without a worry).
    </p>
    <div class="links">
      <h1>Accolades</h1>
      <h4>more to come</h4>
      <div class="accolades">
        <span class="accolade">
          <span class="year">2015</span>
          <span class="name">Cappie - Best Sound In A Musical</span>
        </span>
      </div>
    </div>
    <div class="links">
      <h1>Previous Work</h1>
      <h4>where i've been</h4>
      <h2><a href="http://www.creativekidsplayhouse.com/" target="_blank">laguna_hills_high_school - Sound Lead (4 years)</a></h2>
      <h2><a href="http://siteline2.vendini.com/site/lhhsdrama.com" target="_blank">creative_kids_playhouse - Sounds & Lights (2 years)</a></h2>
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
  .theater
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

  .accolades
    display flex
    justify-content center
    flex-wrap wrap

    .accolade
      display inline-block
      background #000
      color #fff
      margin 4px

      .year
        display inline-block
        padding 8px 16px
        background lighten(#000, 18%)

      .name
        display inline-block
        padding 8px 16px
        background #000
</style>
