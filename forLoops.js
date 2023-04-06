someNames = [
    'arthur', 'bernard', 
    'colins', 'derrick', 
    'evans'
]

for (const name of someNames) {
    console.log(name);
}

console.log('\n'); //break lines

someNames.forEach(function(name) { // much neater % powerful.
    console.log(name)
});