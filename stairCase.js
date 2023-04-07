// stair_xase analogy

function countWays(N){

    if(N <= 1 ){

        return 1;
    }

    let countN1 = 1;
    let countN2 = 1;
    let currenCount;

    for(let i=0; i<N; i++){
        currenCount = countN1 + countN2;
        countN2 = countN1;
        countN1 = currenCount;;
    }

    return countN1;
}

console.log(countWays(2)) //output 3