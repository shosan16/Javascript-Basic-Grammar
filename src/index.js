// var val = "var変数";

// console.log(val)
// var val = '変数'
// console.log(val)

// let val2 = "変数";
// console.log(val2);
// val2 = "val変数";
// console.log(val2);

// const val3 = "変数";
// console.log(val3);
// val3 = "val変数";
// console.log(val3);

// const val4 = {
//   name: "shota",
//   age: 24,
// };

// val4.name = "yosuke";
// val4.adress = 'saitama'
// console.log(val4)

// const val5 = [];
// val5.name = "yosuke";
// val5[0] = 'mone';
// console.log(val5);
// val5.push("shota");
// console.log(val5);

// const name = "昇太";
// const age = 24;

// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

// const func1 = function (str) {
//   return str;
// };
// console.log(func1('stringです'));

// const func2 = (str) => {
//   return str;
// }
// console.log(func2('string2です'));

// const func3 = (num1, num2) =>{
//   return num1 + num2;
// }

// console.log(func3(1,2));

// myProfile = {
//   name: "shota",
//   age: 24
// };

// intro = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(intro);

// const {name, age} = myProfile;
// intro2 = `名前は${name}です。年齢は${age}です。`
// console.log(intro2);

// myProfile = ["shota",24];
// const [name, age] = myProfile;
// intro3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(intro3);

// const sayHello = (name = 'ゲスト')=> console.log(`こんにちは${name}さん。`)
// sayHello()

// const array = [1, 2, 3, 4, 5];
// console.log(...array);

// const [num1, num2, ...nums] = array;
// console.log(num1);
// console.log(num2);
// console.log(nums);

// const array1 = [10,20]
// const array2 = [30,40]

// const array3 = [...array1, ...array2]
// console.log(array3);
// array3[1] = 100;
// console.log(array3);
// console.log(array1);

// numbers = [1, 2, 3, 4, 5, 6];
// const newNumArray = numbers.map((number) => console.log(number * 2));

// oddNumbers = numbers.filter((num) => {
//   return num % 3 === 0;
// });
// console.log(oddNumbers);

// const names = ['shota', 'mone', 'yosuke'];
// const newNames = names.map((name) => {
//   if (name === 'shota'){
//     return name;
//   }
//   else {
//     return `${name}さん`
//   }
// });
// console.log(newNames);

// names.map((name, index) => {
//   console.log(`${name}さんは${index+1}番目です。`)
// })

const checkSum = (num1, num2)=>{
  return num1 + num2 >100? '100を超えています。': '100未満です。'
}
console.log(checkSum(10,20))