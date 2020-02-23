;var moduleB = (function() {
  var obj = {};
  var name = "小红";
  var age = 18;

  var flag = false;
  if(!flag) {
    console.log(name + '已经' + age + '岁了')
  }

  obj.name = name;
  obj.age = age;
  return obj;
})()