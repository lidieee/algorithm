function solution(s){
    var answer = 0;
    let str = s.toUpperCase();
    
    for(let i=0; i<s.length; i++){
        if(str[i] === "P") answer++;
        else if(str[i] === "Y") answer--
    }

    return answer === 0 ? true : false;
}

console.log(solution("pPoooyY"))
console.log(solution("Pyy"))