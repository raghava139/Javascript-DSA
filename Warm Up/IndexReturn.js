// write  a function that  searches for an element in an array and returns the index, 
// if the element not present just return -1


function Searchelement(arr,targetElement){

    for(let i=0; i<arr.length; i++){
        if(arr[i] == targetElement){
            console.log(i)
            return i;
        }
    }
    console.log(-1)
    return -1;
}
let arr = [4,2,10,49,55,39,56,35]
Searchelement(arr,56)