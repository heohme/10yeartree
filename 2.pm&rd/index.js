/**
 * @param {number[][]} grid
 * @return {number}
 */

 // 12:17 开始
 // 12.47 结束 老了 30min
 var orangesRotting = function(grid) {
    const lengthX = grid.length;
    const lengthY = grid[0].length;
    const nextX = [0,0,1,-1];
    const nextY = [1,-1,0,0];
    let nextArrX = [];
    let nextArrY = [];
    let nowArrX = [];
    let nowArrY = [];
    // 初始化标识
    const map = [...grid];
    
    // 初始化第一轮的起始点；
    grid.forEach((list,x)=>
        list.forEach((value,y)=>{
            if(value===2){
                nowArrX.push(x);
                nowArrY.push(y);
            }
        })
    )

    // 每层广度搜索
    function next(nowArrX,nowArrY){
        const nextArrX = [];
        const nextArrY = [];
        nowArrX.forEach((item,i)=>{
            for(step=0;step<4;step++){
                let tempX = nowArrX[i]+nextX[step];
                let tempY = nowArrY[i]+nextY[step];
                if(map[tempX]&& map[tempX][tempY]==1){
                    nextArrX.push(tempX);
                    nextArrY.push(tempY);
                    // 腐烂操作
                    map[tempX][tempY] = 2;
                }
            }
        })
        return [nextArrX, nextArrY];
    }
 
    let flag = true;
    let result = 0;
    while(flag){
        const [nextArrX,nextArrY] = next(nowArrX, nowArrY);
        if(nextArrX.length>0){
            result++;
            nowArrX = nextArrX;
            nowArrY = nextArrY;
        }else {
            flag = false;
        }
    }

    // 隔离检测
    map.forEach(list=>list.forEach(item=>{
        if(item === 1){
            result = -1;
        }
    }))
    return result;
};