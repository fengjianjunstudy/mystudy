/*var cost=(function(){ 
	var args=[];
	return function(){ 
		if(arguments.length===0){ 
			var sum=0;
			for(var i=0,arg;arg=args[i++];){ 
				sum+=arg;
			}
			return sum;
		}else{
			[].push.apply(args,arguments);
		}
	}
})();*/
/*Function.prototype.currying=function(fn){ 
	var args=[];
	return function(){ 
		if(arguments.length===0){ 
			console.log(args)
			return fn.apply(this,args);
		}else{ 
			[].push.apply(args,arguments);
		}
	}
}
var cost1=function(){ 
	var sum=0;
	console.log(arguments)
	for(var i=0,arg;arg=arguments[i++];){ 
		sum+=arg;
	}
	return sum;
}
var cost=Function.prototype.currying(cost1);*/
var currying=function(fn){ 
	console.dir(arguments)
	var args=[];
	return function(){ 
		if(arguments.length===0){ 
			return fn.apply(this,args);
		}else{
			[].push.apply(args,arguments);
			return arguments.callee;
		}
	}
};

var cost=(function(){ 
	var money=0;
	return function(){
		for(var i=0,arg;arg=arguments[i++];){ 
			money+=arg;
		} 
		return money;
	}
})();
cost=currying(cost);