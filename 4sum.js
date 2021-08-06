/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function(nums, target) {
    var ans = [];
    var now = nums.sort(
        function (x, y) {
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        }
    );
    for (let i = 0; i < now.length; i++) {
        for (let j = i + 1; j < now.length; j++) {
            for (let k = j + 1; k < now.length; k++) {
                let d = target - now[i] - now[j] - now[k];
                let L = k + 1;
                let R = now.length - 1;
                let flag = false;
                //console.log(L, R, d);
                while (L <= R) {
                    let mid = Math.floor((L + R) / 2);
                    if (d === now[mid]) {
                        flag = true;
                        break;
                    }
                    if (now[mid] < d) L = mid + 1;
                    else R = mid - 1;
                }
                if (flag === true) ans.push([now[i], now[j], now[k], d]);
                //console.log(now[i], now[j], now[k], d, flag);
            }
        }
    }
    return ans;
};

let now = new Set();
now.add([2, 2, 2, 2]);
console.log(now.has([2, 2, 2, 2]));
