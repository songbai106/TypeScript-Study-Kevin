/**
 * 字面量不仅可以表示值，还可以表示类型，即所谓的字面量类型
 * 目前，TypeScript 支持 3 种字面量类型：字符串字面量类型、数字字面量类型、布尔字面量类型，
 * 对应的字符串字面量、数字字面量、布尔字面量分别拥有与其值一样的字面量类型，示例：
 */
 {
    let specifiedStr: 'this is string' = 'this is string'; //这里表示一个字符串字面量类型 string 类型的子类型
    let specifiedNum: 1 = 1;
    let specifiedBoolean: true = true;
  }

  {
    let specifiedStr: 'this is string' = 'this is string'; // 黑马
    let str: string = 'any string'; // 马
    specifiedStr = str; // ts(2322) 类型 '"string"' 不能赋值给类型 'this is string'   马 不等于 黑马， 不可赋值
    str = specifiedStr; // ok     黑马 等于 马， 可赋值
  }


//   字符串字面量类型
  let hello: 'hello' = 'hello';
  hello = 'hi'; // ts(2322) Type '"hi"' is not assignable to type '"hello"'
  console.log(hello, typeof(hello))



type Direction = 'up' | 'down';

function move(dir: Direction) {
  // ...
}
move('up'); // ok
move('right'); // ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'

/**
 * 数字字面量类型和布尔字面量类型的使用与字符串字面量类型的使用类似，
 * 我们可以使用字面量组合的联合类型将函数的参数限定为更具体的类型，比如声明如下所示的一个类型 Config：
 */
 interface Config {
    size: 'small' | 'big';
    isEnable:  true | false;
    margin: 0 | 2 | 4;
}








export { }
