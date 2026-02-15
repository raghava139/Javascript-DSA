function print1ton(x){
 let n = 5
  if(x > n)return;
  console.log(x);
  return print1ton(++x); // or n=n-1 return (n);
}
print1ton(1)