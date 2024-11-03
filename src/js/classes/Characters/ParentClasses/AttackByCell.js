import Character from "./Character";

export default class AttackByCell extends Character {
  constructor(name, type) {
    super(name, type);

    this.isStoned = false;
  }

  set attackFactor(cell) {
    if (cell < 1 || cell > 5) {
      throw new Error("Введите значение от 1 до 5");
    }

    if (!(this instanceof AttackByCell)) {
      throw new Error("attackFactor доступен только магу и демону");
    }
    const factor = [0, 1, 0.9, 0.8, 0.7, 0.6];

    if (!this.stoned) {
      this.attack = this.attack * factor[cell];
    } 
    else {
      this.attack = this.attack * factor[cell] - Math.log2(cell) * 5;
    }
  }

  get attackFactor() {
    return this.attack;
  }

  set stoned(boolian) {
    if (typeof boolian !== "boolean") {
      throw new Error("Метод принимате заничения true или false");
    }
    this.isStoned = boolian;
  }

  get stoned() {
    return this.isStoned;
  }
}

