function twosum(number , target){
    let start  = 0;
    let end = number.legth -1;
    while(start < end){
        const total = number[start] + number[end];
        if(total > target){
            end--;
        }
        else if(total < target){
            start++;
        }else{
            return[start +1 , end + 1];
        }
    }
}let answer = twosum([2,7,11,15] , 9)
console.log(answer);