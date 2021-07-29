/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    answer = -1;
    for (let i = 0; i < haystack.length; i++) {
        flag = true;
        if (i + needle.length > haystack.length) break;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            answer = i;
            break;
        }
    }
    return answer;
};