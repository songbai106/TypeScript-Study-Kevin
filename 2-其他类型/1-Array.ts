// 「类型 + 方括号」表示法§
let fibonacci: number[] = [1, 1, 2, 3, 5];
let arr:string[] = ["1","2"];

// 数组的项中不允许出现其他的类型：
let fibonacci2: number[] = [1, '1', 2, 3, 5];
fibonacci2.push('8');


// 我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：
let arr2:Array<string> = ["1","2"];
let fibonacci3: Array<number> = [1, 1, 2, 3, 5];


// 接口也可以用来描述数组：  它常用来表示类数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci4: NumberArray = [1, 1, 2, 3, 5];

function sum() {
    let args: number[] = arguments;
}
function sum2() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}


let list: any[] = ['kevin', 25, { website: 'http://kevin.com' }, [1,3, {xxx: 'xxx'}]];



export { };
