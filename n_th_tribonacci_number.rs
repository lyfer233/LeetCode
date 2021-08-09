impl Solution {
    pub fn tribonacci(n: i32) -> i32 {
        let mut nums: [i32; 50] = [0; 50];
    nums[1] = 1;
    nums[2] = 1;
    for i in 3..=n {
        nums[i as usize] = nums[(i - 1) as usize] + nums[(i - 2) as usize] + nums[(i - 3) as usize];
    }
    return nums[n as usize];
    }
}
