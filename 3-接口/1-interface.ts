// 什么是接口
/**
 *  在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
    TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
 */
// 接口一般首字母大写  多一些/少一些属性不被允许  赋值的时候，变量的形状必须和接口的形状保持一致。
    interface Person {
        name: string;
        age: number;
    }
    
    let tom: Person = {
        name: 'Tom',
        age: 25
    };

    // 有可选属性  可选属性的含义是该属性可以不存在。 这时仍然不允许添加未定义的属性：
    interface Person2 {
        name: string;
        age?: number;
    }
    
    let tom2: Person2 = {
        name: 'Tom'
    }

    // 任意属性
    interface Person3 {
        name: string;
        age?: number;
        [propName: string]: any; // 使用 [propName: string] 定义了任意属性取 string 类型的值。
    }
    
    let tom3: Person3 = {
        name: 'Tom',
        gender: 'male'
    };

    // 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：例如上面的any改为string, 那么age为number就会报错


    // 只读属性
    // 我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
    interface Person4 {
        readonly id: number;
        name: string;
        age?: number;
        [propName: string]: any;
    }
    
    let tom4: Person4 = {
        id: 89757,
        name: 'Tom',
        gender: 'male'
    };
    
    tom4.id = 9527;   // 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

// TypeScript 还提供了 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改。

    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    ro[0] = 12; // error!
    ro.push(5); // error!
    ro.length = 100; // error!
    a = ro; // error!


export { }
