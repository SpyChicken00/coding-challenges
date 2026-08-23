class Solution {
public:
    int differenceOfSums(int n, int m) {
        int num1 = 0;
        int num2 = 0;
        // loop from 1 to n,
        for (int i = 1; i < (n + 1); i++) {
            // check if number is divisible by m by taking mod
            if ((i % m) == 0) {
                // divisible
                num2 += i;
            } else {
                // not divisible
                num1 += i;
            }
        }

        // after loop finished return num1 - num2
        return num1 - num2;
    }
};