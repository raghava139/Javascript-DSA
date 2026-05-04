/**
 * 🧠 Pattern Name: Bucket Sort (Frequency → Reverse Ranking Pattern)
 * 
/**
 * Goal:
 * Arrange object data from highest value to lowest value
 *
 * Idea:
 * Instead of sorting, we group items by their values
 * Then we collect from highest group to lowest
 *
 * Steps:
 * 1. Find the maximum value (to know bucket size)
 * 2. Create empty buckets (each index = value)
 * 3. Put keys into buckets based on their value
 * 4. Traverse buckets from high to low and build result
 *
 * Time Complexity: O(n + max)
 * Space Complexity: O(n + max)
 *
 * Use Case:
 * Useful when values are small and you need ranking or frequency sorting
 *
 * Memory Trick:
 * "Group first, then pick from highest"
 */

function bucketPattern(obj) {
    
  // 🔹 Step 1: Find maximum value (to define bucket size)
  let max = 0;
  for (let key in obj) {
    max = Math.max(max, obj[key]);
  }

  // 🔹 Step 2: Create empty buckets
  // Index = value, each bucket stores keys
  let buckets = Array(max + 1).fill(null).map(() => []);

  // 🔹 Step 3: Fill buckets (value → keys mapping)
  for (const key in obj) {
    buckets[obj[key]].push(key);
  }

  // 🔹 Step 4: Traverse buckets from high → low
  let result = [];
  for (let i = max; i >= 0; i--) {
    for (let key of buckets[i]) {
      result.push([key, i]); // [key, value]
    }
  }

  return result;
}

// Example
let obj = {1:3, 2:4, 3:1};
console.log(bucketPattern(obj));

/**
 * 🧩 Output:
 * [
 *   ['2', 4],
 *   ['1', 3],
 *   ['3', 1]
 * ]
 */