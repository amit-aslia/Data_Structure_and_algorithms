#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    vector<int> v;
    for(int i=0; i<5; i++) {
        v.push_back(i);
    }
    // begin return an interator pointing to first element
    // end() return an iterator pointing to the last element
    for(auto i = v.begin(); i < v.end(); i++) {
        cout << *i << ", ";
    }
    cout << endl;
    for(auto i = v.cbegin(); i< v.cend(); i++) {
        cout << *i << ", ";
    }

    cout << endl;

    for(auto i = v.rbegin(); i < v.rend(); i++) {
        cout << *i << ", ";
    }
    cout << endl;

    vector <int> v1{1};
    vector <int> v2{1,2,3,0};

    cout << v1.empty() << "  " << v2.empty() << endl;


    vector <int> :: iterator i;
    i = v2.begin();
    cout << *(i) << endl;
    v2.insert(i + 2, 10);
    cout << v2[2] << endl; 
 
    vector <int> v3({1,2,3,4});
    reverse(v3.begin(), v3.end());

    for(auto i = v3.begin(); i< v3.end(); i++) {
        cout << *i << endl;
    }
    
    // int arr[5] = {1,2,3,4,5};

    // int *begin = &arr[0];
    // int *end = &arr[4];
    // for(; begin !=end; begin++) {
    //     cout << "Hello" <<  *begin << endl ;
    // }
};