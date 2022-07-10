const flowers = [
  "🌼",
  "🌸",
  "🏵️",
  "🌹",
  "🌺",
  "🌻",
  "🌷",
]

const randomFlower = () => flowers[Math.floor(Math.random() * flowers.length)]

module.exports = randomFlower
