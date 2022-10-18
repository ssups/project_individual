function Card() {
  this.attack = Math.floor(Math.random() * 30) + 1;
  this.def = Math.floor(Math.random() * 30) + 1;
  this.average = (this.attack + this.def) / 2;
  this.rarity =
    this.average >= 25 ? "UltraRare" : this.average < 25 && this.average >= 15 ? "Rare" : "Normal";
}

module.exports = Card;
