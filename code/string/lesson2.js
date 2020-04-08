//leetcode 696
export default (str)=>{
  // 2.声明一个数组
  let arr=[];
  let match=(str)=>{
    // 3 没有g 单词匹配  0或1 重复的 
    //^从左边开始匹配  $从右边开始匹配
    let j=str.match(/^(0+|1+)/)[0];
    // 4  不同则为1 相同则为0
    let o=(j[0]^1).toString().repeat(j.length);
    //  5 去写匹配满足这个得正则
    let reg=new RegExp(`^(${j}${o})`);
    // 6 判断字符串 是否有满足的正则
    if(reg.test(str)){
    console.log('str',str,RegExp.$1);
    //满足正则的第一个子匹配
      return RegExp.$1
    }else{
      return ''
    }

   
    return j
  }
  for (let index = 0; index < str.length-1; index++) {
    //1.找到每次遍历的模板 
    const state =match(str.slice(index))
   // 7  =>1 如此循环
   if (state) {
     arr.push(state);
   }
   
  }
  console.log(arr,"arr");
  
  return arr;

}
// lesson('00110011')