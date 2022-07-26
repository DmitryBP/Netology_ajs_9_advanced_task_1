/* 
Легенда
Мощь атаки магов и демонов привела к разбалансировке игрового мира. Поэтому вы ввели для игроков несколько новых правил и возможностей:

Сила урона зависит от расстояния (для Magician, Daemon) - линейно падает,

а именно: на ближайшую клетку 100%, на 5 клетку от себя - 60% (соответственно, на 2-ую клетку - 90%, на 3-ую - 80%, на 4-ую - 70%)

Возможность насылать «дурман» на магов и демонов. 
При это их сила атаки падает уже не только линейно, а по формуле:
attack - log2(x) * 5, где x - это расстояние в клетках. attack рассчитывается с учётом п.1. 
Пример: атака 100 единиц, атакуем 2 клетку от себя, получаем вместе с дурманом: 85 (вместо 90).

Описание

Реализуйте классы Magician и Daemon с get/set stoned. При этом get/set attack должен учитывать логику, описанную в легенде.

Подсказка: используйте класс Math и наследование, чтобы не дублировать код.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.
 */

class Magician {
  constructor(options) {
    this.name = options.name;
    this._attack = options.attack;
    this._stone = false;
  }
  set attack(distance) {
    if (distance === 1 && this._stone === false) {
      this._attack = this._attack;
    } else if (distance === 2 && this._stone === false) {
      this._attack *= 0.9;
    } else if (distance === 3 && this._stone === false) {
      this._attack *= 0.8;
    } else if (distance === 4 && this._stone === false) {
      this._attack *= 0.7;
    } else if (distance === 5 && this._stone === false) {
      this._attack *= 0.6;
    } else if (distance === 1 && this._stone === true) {
      // attack - log2(x) * 5
      this._attack = this._attack - Math.log2(1) * 5;
    } else if (distance === 2 && this._stone === true) {
      this._attack = this._attack * 0.9 - Math.log2(2) * 5;
    } else if (distance === 3 && this._stone === true) {
      this._attack = this._attack * 0.8 - Math.log2(3) * 5;
    } else if (distance === 4 && this._stone === true) {
      this._attack = this._attack * 0.7 - Math.log2(4) * 5;
    } else if (distance === 5 && this._stone === true) {
      this._attack = this._attack * 0.6 - Math.log2(5) * 5;
    } else throw new Error("Ход должен быть от 1 до 5 клеток");
  }

  get attack() {
    return this._attack;
  }

  set stoned(boolian) {
    if (boolian === true) {
      this._stone = true;
    } else if (boolian === false) {
      this._stone === false;
    } else throw new Error("Введите корректное значение true или false");
  }

  get stoned() {
    return this._stone;
  }
}
const mag1 = new Magician({
  name: "pendalf",
  attack: 100,
  stoned: false,
});

console.log(mag1.attack);

console.log((mag1.stoned = true));
console.log(`Атакую на расстоянии ${(mag1.attack = 5)}-х клеток`);
console.log(`Сила атаки составила ${mag1.attack} баллов`);
