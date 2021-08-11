for (var i = 0; i < 5; i++) {
    (function(j){
        setTimeout(() => {
            console.log(j)
          })
    })(i)   
  }  


// const var let

  let obj = {
      a(){
          console.log(this, 'adethis')
      },
      b: () => {
        console.log(this, 'bdethis')
      }
  }

  obj.a()
  obj.b()

  let c = obj.a;
  let d = obj.b;
  c();
  d();
  

  var lengthOfLIS = function(nums) {
    if(nums.length < 2) {
        return nums.length
    }
    const cell = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > cell[cell.length - 1]) {
            cell.push(nums[i])
        } else {
            let left = 0,
                right = cell.length - 1,
                dest = 0;
                while(left <= right) {
                    let middle = (left + right) >> 1;
                    if(cell[middle] < nums[i]) {
                        dest = middle + 1;
                        left = middle + 1;
                    } else {
                        right = middle - 1
                    }
                }
                cell[dest] = nums[i]
        }
        console.log(cell, 'cell')
    }
    return cell.length
}

const params = [0,1,0,3,2,3]

lengthOfLIS(params)