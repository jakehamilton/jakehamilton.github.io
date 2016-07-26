import { between } from 'lib/util'

export default class Dot {
  constructor ({ x = 1, y = 1, r = 1, s = 0.65 }) {
    this.x = x
    this.y = y
    this.r = r
    this.s = s

    this.angle = between(0, 360)
    this.dx = Math.cos(this.angle) * this.s
    this.dy = Math.sin(this.angle) * this.s
  }

  draw (context) {
    context.beginPath()
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    context.closePath()
    context.fill()
  }

  move (canvas) {
    if (this.x < this.r || this.x > canvas.width - this.r) {
      this.x = between(this.r, canvas.width - this.r)
    }
    if (this.y < this.r || this.y > canvas.height - this.r) {
      this.y = between(this.r, canvas.height - this.r)
    }

    if (this.x + this.dx < this.r) this.dx *= -1
    else if (this.x + this.dx > canvas.width - this.r) this.dx *= -1

    if (this.y + this.dy < this.r) this.dy *= -1
    else if (this.y + this.dy > canvas.height - this.r) this.dy *= -1

    this.x += this.dx
    this.y += this.dy
  }

  near ({ x, y }) {
    if (Math.abs(this.x - x) <= 85 &&
        Math.abs(this.y - y) <= 85) {
      return true
    } else {
      return false
    }
  }

  get pos () {
    return { x: this.x, y: this.y }
  }
}
