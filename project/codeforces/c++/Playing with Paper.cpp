/*
	Author : Amar Prakash Pandey
	contact : http://amarpandey.me
*/
#include <string.h>
#include <fstream>
#include <iostream>
#include <string>
#include <complex>
#include <math.h>
#include <set>
#include <vector>
#include <map>
#include <queue>
#include <stdio.h>
#include <stack>
#include <algorithm>
#include <list>
#include <ctime>
#include <memory.h>
#include <ctime>
#include <assert.h>
#define pi 3.14159
#define mod 1000000007
#define rep(i,a,n) for (int i=a;i<=n;i++)
#define per(i,n,a) for (int i=n;i>=a;i--)
using namespace std;
long long int a[500000];
int main() {
  unsigned long long int a, b, cnt=0;
  cin >> a >> b;
  while(true) {
    if(a >= b) {
      cnt += a/b;
      a = a%b;
    }
    else {
      cnt += b/a;
      b = b%a;
    }
    if(a <= 0 || b <= 0) break;
  }
  cout << cnt;
	return 0;
}
