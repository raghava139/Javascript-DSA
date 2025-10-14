function LoopInLoop() {
    //Normal
    // for(let i=0 ; i < 3 ; i++){  
    //     for(let j=0; j<3 ; j++){
    //         console.log(`i=${i}, j=${j}`)
    //     }
    // }

    // reverse j 
    // for(let i=0 ;i<3; i++){
    //     for(let j=3 ; j>0; j--){
    //         console.log(`i=${i}, j=${j}`)
    //     }
    // }

    // j runs only when j < i
    // for(let i=0 ;i<4; i++){
    //     for(let j=0; j<i; j++){
    //         console.log(`i=${i}, j=${j}`)
    //     }
    // }

    //  i starts from 5 and decreases
    // for(let i=5 ; i>=3 ;i--){
    //     for(let j=0; j<3; j++){
    //         console.log(`i=${i}, j=${j}`)
    //     }
    // }

    //j>i condition;
    // for(let i=0; i<4; i++){
    //     for (let j=i+1 ; j<5; j++){
    //         console.log(`i=${i}, j=${j}`)
    //     }
    // }

    // both i & j Decrement 
    // for(let i=3; i>0 ; i--){
    //     for(let j=2; j>=0; j--){
    //        console.log(`i=${i}, j=${j}`)
    //     }
    // }

    //i jumps by 2  , j jumps by 2
    // for (let i=0; i<6 ; i+=2){
    //     for(let j=1; j<=5; j+=2){
    //         console.log(`i=${i}, j=${j}`)
    //     }
    // }

    // j starts bigger
    // for(let i=0 ; i<=3; i++){
    //     for (let j=5; j>i; j--){
    //          console.log(`i=${i}, j=${j}`)
    //     }
    // }

    //i only loops twice , j loops five times;
    // for(let i=10 ; i<12; i++){
    //     for(let j=0 ; j<5; j++){
    //      console.log(`i=${i}, j=${j}`)
    //     }
    // }

    // j runs backward each time
    // for(let i=0 ;i<3; i++){
    //     for (let j=i; j>=0; j--){
    //         console.log(`i=${i}, j=${j}`)
    //     }
    // }

    // Weird start and end values
    for(let i=-1; i<2; i++){
        for (let j=2; j>-1; j--){
            console.log(`i=${i}, j=${j}`)
        }
    }
}

LoopInLoop();