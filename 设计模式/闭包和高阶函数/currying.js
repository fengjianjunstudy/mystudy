var cost=(function(){ 
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
})();