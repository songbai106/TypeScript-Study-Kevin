// 函数声明
function sum(x: number, y: number): number {
    return x + y;
}


// 函数表达式
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
let mySum: (x: number, y: number) => string = function (x: number, y: number): string {
    return x + y + '';
};

let fn: Function = function (x: number) {
    return 1 + x
}

// 接口定义函数类型
// 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
interface SearchFunc{
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc;
  mySearch = function(source, subString) {
      return source.search(subString) !== -1;
  }

// 注意，输入多余的（或者少于要求的）参数，是不被允许的：

// 可选参数  参数默认值
function buildName(firstName: string, lastName?: string, defaultParams:string = 'default') {
    if (lastName) {
        return firstName + ' ' + lastName + ' ' + defaultParams;
    } else {
        return firstName + ' ' + defaultParams;
    }
}
let tomcat = buildName('Tom', 'Cat'); // Tom Cat default
let tom = buildName('Tom'); // Tom default
// console.log(tomcat, tom);


// 剩余参数
// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3, 'x'); //将后面的所有元素 全部push到了a里面  a: [1, 2, 3, 'x']



// 函数重载
/**
 * 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。 
 * 方法就是为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。
 */
type Types = number | string  // 
function add(a:number,b:number):number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a:Types, b:Types) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add('Semlinker', ' Kakuqo');
result.split(' ');

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse('123xxxyyy'))


export { }
