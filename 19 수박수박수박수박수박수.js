// function solution(n) {
//   var answer = '';
//   for (let i = 0; i < n; i++) {
//     i % 2 === 0 ? (answer += "수") : (answer += "박");
//   }
//   return answer;
// }


function solution (n) {
    var answer = '';
    for(let i = 0; i < n; i++) {
      answer += (i % 2 === 0 ? '수' : '박');
    }
    return answer;
  }
  console.log(solution(3))