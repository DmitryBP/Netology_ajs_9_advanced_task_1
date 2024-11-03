/* eslint-disable no-unused-vars */

import Bowman from "./classes/Characters/Bowman";
import Character from "./classes/Characters/ParentClasses/Character";
import Daemon from "./classes/Characters/Daemon";
import Magician from "./classes/Characters/Magician";
import Phonecontrol from "./classes/Phonecontrol";
import Settings from "./classes/Settings";
import Swordsman from "./classes/Characters/Swordsman";
import Team from "./classes/Team";
import Undead from "./classes/Characters/Undead";
import Validator from "./classes/Validator";
import Zombie from "./classes/Characters/Zombie";

const someMag = new Magician('Pendalf')
someMag.attackFactor = 5;
console.log(someMag.attackFactor);

const someBowman = new Bowman('dima');
console.log(someBowman.attackFactor=5);
console.log(someBowman.attackFactor);
console.log(someBowman);