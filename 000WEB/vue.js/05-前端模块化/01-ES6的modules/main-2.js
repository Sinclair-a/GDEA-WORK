import { boyName, boyAge, sum, person } from "./main-1.js"
import { girlAge, girlName, yueLao as merry, yueLao } from "./secondary.js";

if(boyAge == girlAge) {
  console.log(boyName + '和' + girlName + '一样,到了谈恋爱的年纪');
}
console.log(sum(boyAge, girlAge))

merry();
yueLao();

const per = new person;
per.run();

