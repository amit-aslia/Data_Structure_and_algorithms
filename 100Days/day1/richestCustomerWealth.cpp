#include <iostream>
 using namespace std;

 int main() {
    int arr[2][3] = {{1,2,3}, {4,5,6,}};
    int l1 = 2;
    int l2 = 3;
    int max = 0;
    int col = sizeof(arr[0]);
    int row = sizeof(arr) / col;
    cout<< col << endl << row <<endl << sizeof(arr) << endl;
    for(int i=0; i<l1; i++) {
        int sum = 0;
        for(int j=0; j<l2; j++) {
            sum = sum + arr[i][j];
        };
        if(max < sum) {
            max = sum;
        }
    }
    cout<< "Max is" << max << endl;
 };