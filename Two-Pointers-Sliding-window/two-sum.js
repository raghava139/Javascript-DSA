/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}   
 */
var twoSum = function (arr, target) {

    //1st approach
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i])
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] + arr[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    // TC:O(n2);
    // SC:O(1)

    //second approach
    // let map = {}

    // for (let i = 0; i < arr.length; i++) {
    //     map[arr[i]] = i
    // }

    // for (let j = 0; j < arr.length; j++) {
    //     let Substitute = target - arr[j];
    //     console.log(map[Substitute])
    //     if (map[Substitute] && map[Substitute] !== j) {
    //         return [map[Substitute], j]
    //     }
    // }
    // TC:O(n) + O(n)=> O(n)
    // SC:O(1)

    //third approach
    // let map = {};
    // for (let i = 0; i < arr.length; i++) {
    //     let sumOfFind = target - arr[i]
    //     if (map[sumOfFind] !== undefined) {
    //         return [map[sumOfFind], i];
    //     }
    //     map[arr[i]] = i;
    // }

    // day 2 ======revision==========
    //1st brute force approach
    // for (let i = 0; i < arr.length-1; i++) {
    //     for(let j = i+1 ; j < arr.length; j++){
    //         if(arr[i] + arr[j] === target){
    //             return [i,j]
    //         }
    //     }
    // }   
    // TC: O(n) x O(n) = O(n2);
    // SC: O(1);

    //2nd approach
    // using two loops + hashmap
    // let map = {};
    // for (let i = 0; i < arr.length; i++) {
    //     map[arr[i]] = i;
    // }

    // for(let j=0; j<arr.length; j++){
    //     let sum = target - arr[j];
    //     if(map[sum] && (j !== map[sum])){
    //         return [j,map[sum]]
    //     }
    // }

    // TC:O(n) + O(n) => O(2n) => O(n)
    // SC:O(1)

    // //third approach using one loop + hashmap
    // let map = {};
    // for (let i = 0; i < arr.length; i++) {
    //     let sum = target - arr[i];
    //     if (map[sum] !== undefined){
    //         return [map[sum], i]
    //     }
    //     map[arr[i]] = i;
    // }
    // TC: O(n)
    // SC: O(1)

    // ====day 10 revision ====
    // 1st approach
    // let map = {};

    // for(let i=0;i<arr.length;i++){
    //     map[arr[i]] = i;
    // }

    // for(let j=0;j<arr.length;j++){
    //     let sum = target - arr[j];
    //     if(map[sum] && map[sum] !== j){
    //         return [j,map[sum]]
    //     }
    // }

    // TC: O(n) + O(n) => O(2n) => O(n)
    // SC: O(n)

    // ===day 10 revision=====
    // 2nd approach
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let sum = target - arr[i];
        if (map[sum]!==undefined) {
            return [i,map[sum]]
        }
        map[arr[i]] = i;
    }

    // TC: O(n)
    // SC: O(n)
};