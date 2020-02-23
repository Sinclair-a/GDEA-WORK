var boyName = "小明";
var boyAge = 18;

function sum(num1, num2) {
  return num1 + num2
}

var flag = true;
if (flag) {
  console.log(sum(18, 18))
}

// //导出
export {
  boyName,
  boyAge,
  sum
}

export class person {
  run() {
    console.log('在奔跑');
  }
}