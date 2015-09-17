Function.prototype.uncurrying=function(){ 
	var _self=this;
	return function(){
		var obj=Array.prototype.shift.call(arguments);
		return _self.apply(obj,arguments);
	}
}
var push=Array.prototype.push.uncurrying();
var arr=[1,2,3];
console.log(push(arr,5,6,7));