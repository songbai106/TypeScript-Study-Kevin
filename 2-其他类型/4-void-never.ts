// void表示没有任何类型，和其他类型是平等关系，不能直接赋值:
let a: void; 
let b: number = a; // Error

// 你只能为它赋予null和undefined（在strictNullChecks未指定为true时）。声明一个void类型的变量没有什么大用，我们一般也只有在函数没有返回值时去声明。
// 值得注意的是，方法没有返回值将得到undefined，但是我们需要定义成void类型，而不是undefined类型。否则将报错:
function fun(): undefined { // 这里改为void
    console.log("this is TypeScript");
  };
  fun(); // Error

 
// never类型表示的是那些永不存在的值的类型。 例如 type aaa = string & number
// 值会永不存在的两种情况：
/**
 * 如果一个函数执行时抛出了异常，那么这个函数永远不存在返回值（因为抛出异常会直接中断程序运行，
 * 这使得程序运行不到返回值那一步，即具有不可达的终点，也就永不存在返回了）；
函数中执行无限循环的代码（死循环），使得程序永远无法运行到函数返回值那一步，永不存在返回。

 */
// 异常
function err(msg: string): never { // OK
    throw new Error(msg); 
  }
  
  // 死循环
  function loopForever(): never { // OK
    while (true) {};
  }

// never类型同null和undefined一样，也是任何类型的子类型，也可以赋值给任何类型。
// 但是没有类型是never的子类型或可以赋值给never类型（除了never本身之外），即使any也不可以赋值给never
let ne: never;
let nev: never;
let an: any;

ne = 123; // Error
ne = nev; // OK
ne = an; // Error
ne = (() => { throw new Error("异常"); })(); // OK
ne = (() => { while(true) {} })(); // OK

// 使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码

type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}




export { }