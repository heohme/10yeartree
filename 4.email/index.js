/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

//  x,y  x信任y，则 inArr[y]++,outArr[x]++
var findJudge = function(n, trust) {
    const inArr = new Array(n+1).fill(0);
    const outArr = new Array(n+1).fill(0);
    trust.forEach(item=>{
        inArr[item[1]]++;
        outArr[item[0]]++;
    })
    console.log("in",inArr);
    console.log("out",outArr);
    let result = -1;
    for(i=1;i<=n;i++){
        if(inArr[i]===n-1 && outArr[i]===0){
            result = i;
        }
    }
    return result;
};