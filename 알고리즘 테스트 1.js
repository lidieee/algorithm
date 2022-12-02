function solution(arr1){
	let answer= "";
    let s = 0;
    for (let i = 0; i < arr1.length; i++){
        if(arr1[i] === 0) s += 1
    }

    if(s === 1) answer = '도'
    else if(s === 2) answer = '개'
    else if(s === 3) answer = '걸'
    else if(s === 4) answer = '윷'
    else answer = '모'

	return answer;
}

let arr1=[0,1,0,0];
console.log(solution(arr1))
