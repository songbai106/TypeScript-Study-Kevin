// 在大多数的情况下使用接口类型和类型别名的效果等价，但是在某些特定的场景下这两者还是存在很大区别。

// Objects / Functions  两者都可以用来描述对象或函数的类型，但是语法不同。
interface interfacePoint {
    x: number;
    y: number;
  }
  
  interface interfaceSetPoint {
    (x: number, y: number): void;
  }
  
  

  type typePoint = {
    x: number;
    y: number;
  };
  
  type typeSetPoint = (x: number, y: number) => void;
  

// Other Types
// 与接口不同，类型别名还可以用于其他类型，如基本类型（原始值）、联合类型、元组。
// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union 联合类型
type PartialPoint = PartialPointX | PartialPointY;

// tuple 元组
type Data = [number, string];

// dom
let div = document.createElement('div');
type B = typeof div;


// 接口可以定义多次,类型别名不可以
// 与类型别名不同，接口可以定义多次，会被自动合并为单个接口。
interface Point { x: number; }
interface Point { y: number; }
const point: Point = { x: 1, y: 2 };

// 扩展
// 两者的扩展方式不同，但并不互斥。接口可以扩展类型别名，同理，类型别名也可以扩展接口。
// 接口的扩展就是继承，通过 extends 来实现。类型别名的扩展就是交叉类型，通过 & 来实现。

// 接口扩展接口
interface PointX1 {
    x: number
}
interface Point1 extends PointX1 {
    y: number
}
let a1: Point1 = {x: 1, y:2}


// 类型别名扩展类型别名
type PointX2 = {
    x: number
}
type Point2 = PointX2 & {
    y: number
}
let a2: Point2 = {x: 1, y:2}

// 接口扩展类型别名
type PointX3 = {
    x: number
}
interface Point3 extends PointX3 {
    y: number
}
let a3: Point3 = {x: 1, y:2}

// 类型别名扩展接口
interface PointX4 {
    x: number
}
type Point4 = PointX4 & {
    y: number
}
let a4: Point4 = {x: 1, y:2}


export { }
