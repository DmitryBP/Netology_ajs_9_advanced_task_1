import Character from "./Character";

export default class AttackByCell extends Character {
  constructor(name, type) {
    super(name, type);

    this.isStoned = false;
    this.baseAttack = this.attack;
  }

  set stoned(value) {
    if (typeof value !== "boolean") {
      throw new Error("Метод принимате заничения true или false");
    }
    this.isStoned = value;
  }

  get stoned() {
    return this.isStoned;
  }

  set attackOnDistance(cell) {
    if (cell < 1 || cell > 5) {
      throw new Error("Введите значение от 1 до 5");
    }

    const factor = [1, 0.9, 0.8, 0.7, 0.6];

    this.resultAttack = this.baseAttack * factor[cell - 1];

    if (this.stoned) {
      this.resultAttack -= Math.log2(cell) * 5;
      this.resultAttack = Math.max(0, this.resultAttack)
    }
  }

  get attackOnDistance() {
    return this.resultAttack;
  }
}
