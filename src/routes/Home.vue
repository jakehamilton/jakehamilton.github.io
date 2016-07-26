<template>
  <div class="home">
    <h1>about me</h1>
    <p>
      My name is Jake Hamilton. For the last 5 years I have been honing both
      my Theater Tech and Web Development skills. Every day I'm pushing
      myself to learn and do more. In the theater, I'm studying the sound waves
      and how they interact with the room to provide the best experiences for my
      audiences. During development, it means studying the language (JavaScript),
      keeping up-to-date with important technologies, and trying new things!
    </p>
    <h1>favorites</h1>
    <h2>blink</h2>
    <p>
      Blink is an open source "Netflix-like" user interface for Twitch. As a
      fan of Twitch.tv but not-so-much-a-fan of their user interface, I took it
      upon myself to create a comfortable UI to support the service.
    </p>
  </div>
</template>

<style lang="stylus" scoped>
  .home
    width 100%
    max-width 1020px
    margin 0 auto
    padding 32px

    h1
      font-size 1.4em
      margin-top 2em
      margin-bottom 0

      &:before
        content '> '

      & + p
        padding-left 16px + 2

      &:first-child
        margin-top 0

    h2
      font-size 1.15em
      margin-top 16px
      margin-bottom 0
      padding-left 16px + 2

      & + p
        padding-left 16px + 2

      &:first-of-type
        margin-top 4px

    p
      margin-top 4px
      margin-bottom 0
      line-height 1.3em
</style>
