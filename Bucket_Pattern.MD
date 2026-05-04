# 🪣 Bucket Pattern (JavaScript)

## 🔥 Full Breakdown

The bucket pattern is a technique used to group elements based on a computed index (usually value or frequency) and then process them in a specific order.

---

## ✅ Bucket Pattern Includes

1. Mapping (value → bucket index)

```js
EmptyBuckets[obj[key]].push(key)

✔ This is the core bucket logic
✔ We map a value to a bucket index
✔ Then store elements inside that bucket

2. Bucket Structure

Array(max + 1).fill(null).map(() => [])

✔ Creates empty buckets
✔ Each index represents a possible value
✔ Each bucket can store multiple elements



3. Processing Buckets in Order
for (let i = max; i >= 0; i--)

✔ Traverses buckets from high → low
✔ Produces ordered output without sorting


🧠 Key Idea
Instead of sorting directly, we:

Group elements into buckets → then traverse buckets in order


🎯 One-line Definition
Bucket pattern = grouping elements into indexed buckets and processing them in order