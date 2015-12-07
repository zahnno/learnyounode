var nums = process.argv.slice(2);

var total = 0;

nums.forEach(function (x) {	

total += Number(x);

});

console.log(total);