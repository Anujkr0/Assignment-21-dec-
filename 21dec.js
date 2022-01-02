function fun(num1 , num2)
{
    let intersection = []
    const setnum1 = new set(num1)
    const setnum2 =  new set(num2)

    if(setnum1.length < setnum2.length){
        [setnum1, setnum2] = [setnum2 ,setnum1]
    }
    setnum1.forEach(num => {
        if(setnum2.has (num)){
            intersection.push(num)
        }
        
    })
    return intersection
}
let answer = fun([1,2,2,1] ,[2,2]);
console.log(answer)