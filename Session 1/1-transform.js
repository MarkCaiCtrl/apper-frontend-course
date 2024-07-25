function transform(nums) {
    return nums.sort().map(n => n*n)
  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums)// [9,16,25,64,81]
  console.log(transform([5,4,3,2,90])) //[ 4, 9, 16, 25, 8100 ]
  console.log(transform([-5,6,67,-3,Infinity])) //[ 9, 25, 36, 4489, Infinity ]