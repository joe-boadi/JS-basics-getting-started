// break and continue
for (var i = 0; i < 7; i++) {
    if (i > 3){
       break; // numbers above 3 are not allowed.
    }
    console.log(i);
}

console.log('\n');

for( var i = 0; i < 7; i++ ) {
    if(i < 5){
        continue; // numbers below 5 are not allowed.
    }
    console.log(i);
}