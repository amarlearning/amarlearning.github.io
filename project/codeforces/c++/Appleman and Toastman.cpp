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
  long int n;
  unsigned long long int sum = 0, seq;
  cin >> n;
  rep(i,1,n) {
    cin >> a[i];
    sum = sum + a[i];
  }
  seq = sum;
  sort(a+1,a+n+1);
  rep(i,1,n-1) {
    sum += a[i];
    seq -= a[i];
    sum += seq;
  }
  cout << sum;
	return 0;
}
