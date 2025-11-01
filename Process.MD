# DSA Problem-Solving Framework

## 1. Understand the Problem Statement
- Read the problem carefully and understand what is being asked.  
- Identify input and output formats clearly.  
- Note all constraints (they help determine feasible time complexity).  
- Restate the problem in your own words to ensure full understanding.  
- Identify if the problem resembles a known category or pattern (e.g., two pointers, sliding window, recursion, etc.).

---

## 2. Create Example Cases
- Write down at least two to three example test cases:  
  - A normal case  
  - A boundary or edge case  
  - A tricky case that might break simple logic  
- Manually compute outputs for each example before coding.  
- Use these examples later for testing and debugging.

---

## 3. Identify the Pattern or Approach
- Use pen and paper to analyze how the input transforms into output.  
- Identify any recognizable problem-solving pattern (e.g., prefix sums, dynamic programming, sorting-based, etc.).  
- If the problem seems complex, reduce it to a simpler version to gain insights.  
- Think in terms of:  
  - What is fixed?  
  - What is changing?  
  - What needs to be optimized or tracked?

---

## 4. Plan a Brute Force Solution
- Write a clear, step-by-step logic for a brute-force solution on paper.  
- Focus on correctness and clarity, not optimization at this stage.  
- Estimate the time and space complexity for this brute-force approach.  
- Ensure you can explain your reasoning clearly before coding.

---

## 5. Implement the Brute Force Code
- Translate the logic into code exactly as planned.  
- Avoid premature optimization.  
- Use print or log statements to verify intermediate outputs if needed.  
- Make sure it runs correctly for the initial test cases.

---

## 6. Validate with Edge Cases
- Test the brute-force implementation against edge cases, including:  
  - Minimum input sizes (e.g., empty array, single element)  
  - Maximum input sizes (based on constraints)  
  - Special cases (e.g., all elements same, negative numbers, etc.)  
- Confirm that outputs match expected results.  
- Document which edge cases have been handled.

---

## 7. Optimize the Solution
- Identify inefficiencies in your brute-force solution.  
- Ask key questions such as:  
  - Where is repeated work occurring?  
  - Can a data structure improve access or search time?  
  - Can two loops be reduced to one?  
- Apply relevant optimization techniques:  
  - Hash maps, prefix sums, sorting, two pointers, recursion to iteration, etc.  
- Redesign your logic to achieve better time or space complexity.  
- Estimate the new complexity after optimization.

---

## 8. Re-Test the Optimized Code
- Use the same test cases that were used for the brute-force solution.  
- Verify that both versions produce identical outputs.  
- Validate against all edge and tricky cases again.  
- Fix logical issues rather than just syntactic ones.

---

## 9. Analyze and Document Complexity
- Clearly state the time and space complexity of the optimized solution in comments.  
  ```js
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  ```
- Be prepared to explain why the optimization is correct and efficient.

---

## 10. Reflect and Record the Pattern
- After completing the problem, record your findings in a personal log or spreadsheet.  
  Suggested columns:  
  | Problem | Pattern | Time | Space | Key Idea |
  |----------|----------|------|--------|----------|
  | Max Consecutive Ones | Counting / Iteration | O(n) | O(1) | Reset counter when zero appears |
- This builds your personal “DSA knowledge base” for faster recall later.

---

## Additional Professional Tips
1. Verbalize your thought process while coding to improve clarity and communication.  
2. When stuck, step back and ask:  
   - What do I already know?  
   - What part of the problem is fixed or changing?  
3. Focus on understanding the underlying pattern, not just completing the problem.  
4. Practice explaining your solution as if you are in an interview.  
5. Maintain a consistent structure for every problem — understanding, example, brute-force, optimization, and reflection.
