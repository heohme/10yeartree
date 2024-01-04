// 引入 decimal.js
const Decimal = require('decimal.js');

// 设置精度：足够高以包含多于18位的圆周率数字
Decimal.config({ precision: 10000 });

// 计算圆周率
const pi = Decimal.acos(-1).toString();

// 函数：寻找符合特定长度的圆周率片段
function findPiSegment(length) {
    // 正则表达式，匹配任意长度的数字
    let regex = new RegExp(`\\d{${length}}`, 'g');

    // 寻找并返回所有匹配
    let match = pi.match(regex);

    if(match && match.length > 0) {
        // 返回第一个匹配的数字串，即圆周率中第一个找到的符合长度的片段
        return match[0];
    } else {
        return "No segment found";
    }
}

// 找出并打印一个符合18位长度的圆周率片段
console.log("number: ", findPiSegment(18));