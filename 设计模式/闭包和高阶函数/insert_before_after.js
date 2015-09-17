Function.prototype.before=function(beforeFn){ 
	var _self=this;
	return function(){ 
		beforeFn.apply(this,arguments);
		_self.apply(this,arguments);
	}
}
Function.prototype.after=function(afterFn){ 
	var _self=this;
	return function(){ 
		_self.apply(this,arguments);
		afterFn.apply(this,arguments);
	}
}