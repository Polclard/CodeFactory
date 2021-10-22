#include <iostream>

using namespace std;

int main() {
  
  int n;
  int sum = 0;
  int sr = 0;
  cin >> n;

  for(int i=n ; i > 0; i--)
  {
    sum += i;
  }

  sr = sum*sum;

  cout << sr << endl;
  return 0;
}