impl Solution {
    pub fn triangle_number(mut nums: Vec<i32>) -> i32 {
        nums.sort();
        let mut ans:i32 = 0;
        for i in 0..nums.len() {
            for j in (i+1)..nums.len() {
                let mut l = j + 1;
                let mut r = nums.len() - 1;
                while l <= r {
                    let mid = (l + r) / 2;
                    if nums[mid] < (nums[i] + nums[j]) as i32 {
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
                ans += (r - j) as i32;
            }
        }
        return ans;
    }
}
