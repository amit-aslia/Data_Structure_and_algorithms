
/* 
    Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle in a fixed direction.
    The task is to choose the safe place in the circle so that when you perform these operations starting from 1st place in the circle, you are the last one remaining and survive

*/
const josephus = (n, k) => {
    if (n == 1) return 0;
    return (josephus(n - 1, k) + k) % n;
};

const output = josephus(5, 3);
console.log(output);