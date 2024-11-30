const Band = require("./band")

class BandList {
  constructor() {
    this.bands = [
      new Band("Metallica"),
      new Band("Queen"),
      new Band("Heroes del Silencio"),
      new Band("Bon Jovi"),
    ]
  }

  addBand(name) {
    const newBand = new Band(name)
    this.bands.push(newBand)
    return this.bands
  }

  removeBand(id) {
    this.bands = this.bands.filter(band => band.id !== id)
    return this.bands
  }

  getBands() {
    return this.bands
  }

  increaseVotes(id) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.votes++
        return band
      } else {
        return band
      }
    })
  }

  decreaseVotes(id) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.votes--
        return band
      } else {
        return band
      }
    })
  }
  changeName(id, newName) {
    this.bands = this.bands.map(band => {
      if (band.id === id) {
        band.name = newName
        return band
      } else {
        return band
      }
    })
  }
}

module.exports = BandList