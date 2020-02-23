;var moduleA = (function() {
  var obj = {};
  var name = "小明";
  var age = 18; 
  
  function sum(num1,num2) {
    return num1 + num2
  }
  
  var flag = true;
  if(flag) {
    console.log(sum(18,18))
  }

  obj.name = name;
  obj.sum = sum;
  obj.age = age;
  
  return obj;
})()