function Card() {
  this.attack = Math.floor(Math.random() * 45) + 1;
  this.def = Math.floor(Math.random() * 45) + 1;
  this.average = (this.attack + this.def) / 2;
  this.rarity =
    this.average >= 40 ? "UltraRare" : this.average < 40 && this.average >= 20 ? "Rare" : "Normal";
}

module.exports = Card;
