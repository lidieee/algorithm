function solution(x) {
    let answer = 0;
    let str = String(x)
    let arr = [...str]
    
    for(let i=0; i<arr.length; i++){
        answer += Number(arr[i])
    }
    if(x % answer === 0){
        return true
    }else{
        return false
    }
}