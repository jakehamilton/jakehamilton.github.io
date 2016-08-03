<template>
  <div class="contact">
    <messages :messages="messages" class="messages"></messages>
    <div class="input">
      <span>></span>
      <input type="text" v-model="command" @keyup.enter="submit">
    </div>
  </div>
</template>

<script>
  import Messages from 'components/Messages'

  export default {
    data () {
      return {
        index: 0,
        command: '',
        messages: [{ text: 'Try typing help...' }],
        commandList: {
          'help': {
            action: 'pushHelp',
            text: `
        These commands are available:

        <a href="mailto:jehamilton122@gmail.com">email</a> jake --title "&lt;title&gt;" --message "&lt;message&gt;"        Send an email to Jake
        echo &lt;msg&gt;                                                Echo a message to the console
        clear                                                     Clears the console`
          },
          'echo': {
            action: 'pushEcho'
          },
          'email': {
            action: 'sendEmail'
          },
          'clear': {
            action: 'clearConsole'
          }
        }
      }
    },
    methods: {
      submit () {
        if (this.command === '') return this.messages.push({ text: 'Try typing help...' })
        let command = this.command.match(/[\S]+/g)[0]
        if (this.commandList[command]) {
          this[this.commandList[command].action]()
          this.command = ''
        } else {
          this.messages.push({ text: `Command "${command}" not found, try typing "help"` })
        }
      },
      pushHelp () {
        this.messages.push({ text: this.commandList.help.text })
      },
      pushEcho () {
        let text = /echo (.+)/gi.exec(this.command)[1]
        this.messages.push({ text })
      },
      sendEmail () {
        if (!(/email jake/gi.test(this.command))) {
          return this.messages.push({ text: `
        example: email jake --title "My Title" --message "My Message"`
          })
        }

        let title = (/--title "(.[^"]+)"/gi.exec(this.command) || ['', ''])[1]
        let message = (/--message "(.[^"]+)"/gi.exec(this.command) || ['', ''])[1]

        window.open(`mailto:jehamilton122@gmail.com?subject=${title}&body=${message}`)
      },
      clearConsole () {
        this.messages = []
      }
    },
    components: { Messages }
  }
</script>

<style lang="stylus" scoped>
  .contact
    display flex
    justify-content flex-end
    flex-direction column
    width 100%
    height 100%

  .input
    display flex
    width 100%
    align-items center
    line-height 1em
    font-size 1em
    z-index 85

    span
      padding-right 8px
      color #000

    input
      line-height 1em
      flex-grow 1
      border none
      font-size 1.15em
      padding 4px
      font-family monospace
      border-top 1px solid darken(#fff, 20%)

      &:focus
        outline none

  .messages
    z-index 85
</style>
