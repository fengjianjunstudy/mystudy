//把函数绑定到一个对象且传入部分参数
Function.prototype.bind=function(){ 
	var self=this;
	var args=arguments;
	return function(){ 
		var arg=[].slice.call(args);
		arg=arg.concat([].slice.call(arguments));
		self.apply(this,arg);
	}
}

function f(x,y,z){
	console.log(x*(y-z));
}
var newF=f.bind(1);
newF(10,5);