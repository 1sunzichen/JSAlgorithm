export default (str)=>{
  //  字符串按空格进行分隔 保存数组 数组的元素的先后顺序 就是 单词的顺序
  let arr=str.split(' ');
  console.log('====================================');
  console.log(arr);
  console.log('====================================');
  // 对数组进行遍历 然后每个元素进行反转
  let result=arr.map(item=>{
               字符串  边数组 颠倒  又变成 字符串 item
    return item.split('').reverse().join('')
  })

  return result.join(' ')
}
