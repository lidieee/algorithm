function solution(a, b) {
    const answer = new Date(2016, a-1, b).toDateString().split(' ')[0].toUpperCase();
    return answer;
}
console.log(solution(10,25))