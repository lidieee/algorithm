function solution(arr1, arr2){
	let answer=0;

    for(let i=0;i<arr1.length;i++){
        if(arr2[i]>=29){
            answer += 21 - arr1[i]
        }else{
            answer += arr2[i] - arr1[i]
        }
    }

	return answer;
}
// let arr1=[9, 9, 8, 8, 7, 8, 9];
// let arr2=[21, 25, 30, 29, 22, 23, 30];

// let arr1=[9, 7, 8, 9, 7, 9, 8]
// let arr2=[23, 22, 26, 26, 29, 27, 22]

let arr1=[9, 9, 9, 9, 7, 9, 8]
let arr2=[23, 23, 30, 28, 30, 23, 23]

console.log(solution(arr1, arr2))