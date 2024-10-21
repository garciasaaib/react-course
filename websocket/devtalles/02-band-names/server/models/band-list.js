const Band = require("./band");

class BandList {
    constructor() {
        this.bands = [
          new Band('Metallica'),
          new Band('Heroes del Silencio'),
          new Band('Bon Jovi'),
          new Band('Eros Ramazzotti'),
        ];
    }

    addBand(band = new Band()) {
        this.bands.push(band);
    }

    removeBand(id) {
        this.bands = this.bands.filter(band => band.id !== id);
        return this.bands;
    }

    getBands() {
        return this.bands;
    }

    voteBand(id) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votes++;
                return band;
            } else {
                return band;
            }
        });
    }

    changeBandName(id, newName) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.name = newName;
                return band;
            } else {
                return band;
            }
        });
    }
}

module.exports = BandList;