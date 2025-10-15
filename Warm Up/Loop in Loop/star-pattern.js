function StarPattern() {

    //Problem-1
    // let n = 4;
    // //rows
    // for(let i=0; i<n; i++){
    //     let row = "";
    //     //columns
    //     for(let j=0; j<n; j++){
    //         row= row + "*";
    //     }
    //     console.log(row)

    // }

    // Problem-2

    // for(let i=0; i<4; i++){
    //     let row = "";
    //     //j<=i or j<i+1 is same
    //     for (let j=0; j<i+1; j++){
    //         row = row + "*"
    //     }
    //     console.log(row)
    // }

    // problem 3
    // for(let i=0 ; i<5; i++){
    //     let row = '';
    //     for (let j=0; j<=i; j++){
    //         row=row + (j+1);
    //     }
    //     console.log(row)
    // }

    //problem 4
    // for(let i=0; i<5 ; i++){
    //     let row = '';
    //     for(let j=0; j<=i; j++){
    //         row= row + (i+1);
    //     }
    //     console.log(row)
    // }
    // Repeat Problem 4 (different Solution)
    // for(let i=1; i<=5; i++){
    //     let row='';
    //     for(let j=1; j<=i;j++){
    //         row=row+(i);
    //     }
    //     document.writeln(row)
    //     console.log(row)
    // }

    //problem 5
    // for(let i=5 ; i>0; i--){
    //     let row="";
    //     for(let j=1; j<=i; j++){
    //         row=row+j;
    //     }
    //     console.log(row)
    // }

    // problem 5 has another solution;

    // for(let i=0 ; i<n; i++){
    //     let row="";
    //     for(let j=0 ; j<n-i; j++){
    //         row=row+(j+1);
    //     }
    //     console.log(row)
    // }

    // problem 6
    // for(let i=0; i<n; i++){
    //     let row="";
    //     //this j loop is adding fpr empty spaces;
    //    for(let j=0; j< n-(i+1) ; j++){
    //     row = row + " _ ";
    //    }
    //    //this k loop is adding for * stars
    //    for(let k=0; k<i+1; k++){
    //     row = row + " * ";
    //    }
    //    console.log(row)
    // }

    // problem 7
    let n = 5
   
    for (let i = 0; i < n; i++) {
        let row = "";
         let Switch = 1;
        for (let j = 0; j <= i; j++) {
            row = row + Switch;
            if (Switch == 1) {
                Switch = 0;
            } else {
                Switch = 1
            }
        }
        console.log(row)
    }

    // problem 8
    // Same as problem 7 but this the variable of Switch is moved to top. Because it will switch inside  1010, 
    // but for problem 7 has every starting inner loop the switch starts with '1';
    let Switch = 1;
     for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + Switch;
            if (Switch == 1) {
                Switch = 0;
            } else {
                Switch = 1
            }
        }
        console.log(row)
    }
}
StarPattern();