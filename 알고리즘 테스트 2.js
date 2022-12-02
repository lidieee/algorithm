function solution(star){
    let answer = ''
    
    for(let i = 1; i <= star; i++){
    	for(let j = star; j > i; j--){
        	answer += ' '
        }
        for(let k = 0; k < 2 * i - 1; k++){
        	answer += '*'
        }
        answer += '\n'
    }
    return answer
}
    let star= 9;
    console.log(solution(star))