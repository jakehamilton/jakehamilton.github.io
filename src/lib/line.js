export const line = (start = { x: 0, y: 0 }, end = { x: 0, y: 0 }, context) => {
  context.beginPath()
  context.moveTo(start.x, start.y)
  context.lineTo(end.x, end.y)
  context.stroke()
  context.closePath()
}
