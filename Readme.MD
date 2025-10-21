#1. Programming 10:
-dataTypes:Number, String, Boolean, Arrays, Objects
------------------------------------------------------
#2. Functions, If-else
-Functions, if/else,else if , Loops - For/while
-----------------------------------------------------
#3. Loops1
----------
#4. Loops2
----------
#5. Second Largest
------------------
Problems:
1.Vote Valid for particular age
2.even or odd
3.Loops + Arrays 
  -p1.Search an Element in an array return that particular Index otherwise return -1;
  -p2.Count the Negative Number in an array;
  -p3.Find the Largest Number;
  -p4.Find the Smallest Number;
  -p5.Find the Second Largest Number;
=> steps;
 1.analyze the problem before implementation;
 2.Pseudo Code before Implementation;
 3.Dry run Code;
 4.after Solving the problem; check the corner cases & Refactor the code posbilities
------------------------------------------------------------------------------------
#6.Loop in Loop
-How the Loop works;
-How the loop inside loop works;
----------------------------------------------------------------
#7. Star pattern;
-so, in these star patterns what we have covered means;
-1. the "i" loop is for rows and "j" loop is for columns ( example );
-2. the (j<=i) or (j< i + 1) is both are same;
-3. if left side any empty spaces we need extra loop ( total 3 loops -as per our concern );
-4. resolve the differents patterns - practice and practice.
-5. pyramid pattern (2*i-1) and inverted pyramid pattern (2 * (n-i)-1);
------------------------------------------------------------------
#8. Count Digit
-1. How to know the how digits are there and its corner cases using While Loop;
----------------------------------------------------------------------
#9. Palindrome;
#10. Reverse Integer;
-both are same following but some small differences are there (on Main Logic); //Using While Loop;
-----------------------------------------------------------------------
#11. Time & space Complexity;
-Define: It is used to measure the efficiency of an algorithm in-terms of speed,
 as the input size grows.
-Low Time Complexity !== time taken
  <= Time taken =>
   -Depends on machine;
   -Depends on language; 
   -Depends on Graphics;
   -Depnds on Configure;
   -So many etc......;
-speed efficiency -> when input size grows.
- What is Big O Notation ?
 => Big O
 -Big Picture

 =>  “O” 
 -the "Order of Growth" of an algorithm’s running time (or space) as the input size n increases.

 =>"Notation"
 -It means symbolic representation

-Best Case, Average Case , Worst Case ;
1.Best Case:
   -The element you’re looking for (x) is the first element in the array.
   -Only 1 comparison is needed.
   -✅ Time Complexity: O(1)

2.Average Case:
  -The element could be anywhere in the array.
  -On average, you’ll find it after checking half the elements.
  -✅ Time Complexity: O(n) (technically n/2, but constants are ignored)

3.Worst Case:
  -The element is not in the array, or it’s the last element.
  -You have to check every single element.
  -✅ Time Complexity: O(n)

-----Types of complexities--------
-O(1) -> constant time
-O(log n)-> logarithamic
-O(n) -> linear time
-O(n log n) -> linearithamic / log-linear
-O(n^2) -> Quadratic
-O(n^3) -> Cubic
-O(2^n) -> exponential
-O(n!) -> factorial
-----space Complexites--------
-For Spaces complexities we are counting the variable like let x =10 -> O(1);
-For newArray = [based on size of 'n' Grows] => O(n)
-For Example:
2D Matrix 
[ 
  1 , 3, 2, 8 , 10,
  2, 6, 4, 16, 20,
  4, 12, 8, 32, 40,
  8, 24, 16, 64, 80,
  16, 48, 32, 128, 160 
]  => O(n^2) => extraspace;
---Now The Value is always greater value--
=> 
for examples:

1.forloop(){
  forloop(){

  }
}
n*n = n^2

2.forloop(){}
forloop(){}
forloop(){}
3 independent forloop;
O(3n) -> O(n) => ignore 3 here because:
n=10; x=30 times
n=100; x = 300 times;
n= 1milion ; x = 3milion times 
-simple you can ignore '3'
-we are ignore lower value 
->ex: we have O(n^2 + n)=>O(2n^2)=>O(n^2)=> ignore "2" ;
->ex: suppose we have O((1M)^2 + (1M)) -> 1M + 1M adding here. It doesn't matter.//(M-> million)
->ex: suppose we have O(n^3 +n+n^2) => O(n^3) -greater
->ex: suppose we have O(n^2 + 2n) => O(n^2) -greater
->ex: suppose we have O(n^2 + nlog + 2n + 5) => O(n^2) -greater
It will always be greater Value.//