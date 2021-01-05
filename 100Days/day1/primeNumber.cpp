#include <iostream>
using namespace std;

int main() {
    int num;
    cout<<"Enter the value of num";
    cin >> num;
    bool flag = false;
    for(int i=2;i<num;i++) {
        if(num%i == 0) {
            flag = true;
        }
    }
    if(flag) {
        cout<< "Not a Prime Number" << endl;
    }
    else {
        cout<<"Prime Number" << endl;
    }
    return 0;
};