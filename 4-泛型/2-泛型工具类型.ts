/**为了方便开发者 TypeScript 内置了一些常用的工具类型，
 * 比如 Partial、Required、Readonly、Record 和 ReturnType 等。
 * 
*/

// 1.typeof 的主要用途是在类型上下文中获取变量或者属性的类型
interface Person {
    name: string;
    age: number;
  }
  const sem: Person = { name: "semlinker", age: 30 };
  type Sem = typeof sem; // type Sem = Person
 console.log(typeof sem) // Object

// 通过 typeof 操作符获取 sem 变量的类型并赋值给 Sem 类型变量，之后我们就可以使用 Sem 类型：
const lolo: Sem = { name: "lolo", age: 5 }


const Message = {
    name: "jimmy",
    age: 18,
    address: {
      province: '四川',
      city: '成都'   
    }
}
type message = typeof Message;
/*
 type message = {
    name: string;
    age: number;
    address: {
        province: string;
        city: string;
    };
}
*/
// 此外，typeof 操作符除了可以获取对象的结构类型之外，它也可以用来获取函数对象的类型，比如：
function toArray(x: number): Array<number> {
    return [x];
  }
type Func = typeof toArray; // -> (x: number) => number[]


// 2.keyof 该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。  键
interface Person {
  name: string;
  age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof { [x: string]: Person };  // string | number


//  3.in 用来遍历枚举类型：
type Keys = "a" | "b" | "c"

type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any, c: any }


// 4.infer
// 在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用
type ReturnType<T> = T extends (
  ...args: any[]
) => infer R ? R : any;
// infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用。


// 5.extends
// 定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
loggingIdentity(2);
loggingIdentity('csafaf')





export { }
