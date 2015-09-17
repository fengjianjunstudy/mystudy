//高阶函数：操作函数的函数，接受一个或者多个函数，并返回一个新的函数
function  not(f){ 
	return function (){ 
		return !f.apply(this,arguments)
	}
}
function even(x){ 
	return x%2 === 0;
}

var odd=not(even);
console.log(odd(3))