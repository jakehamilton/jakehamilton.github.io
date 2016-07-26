<template>
  <div class="messages">
    <div class="message" v-for="message of messages">
      <pre>
        {{{ message.text }}}
      </pre>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      messages: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="stylus">
  .message a
    color #000
    text-decoration underline
</style>
