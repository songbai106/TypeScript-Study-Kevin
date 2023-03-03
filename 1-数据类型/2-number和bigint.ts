/**
 * 虽然number和bigint都表示数字，但是这两个类型不兼容。
 * number [ -2^53 ~ 2^53 ] 即[-9007199254740992,9007199254740992]
 * bigint  10^268435456
 */
 let big: bigint =  100n;
 let num: number = 6;
 let b: bigint = 9007199254740992n
 b = b + 1n
 console.log(b) // 9007199254740993

 big = num;
 num = big;


//  let max = BigInt(10)
//  let exp = 1;
//  while (true) {
//      console.log(`BigInt of 10^${exp} `);
//      max = max * max;
//      exp *= 2;
//  }






 
 export { };
