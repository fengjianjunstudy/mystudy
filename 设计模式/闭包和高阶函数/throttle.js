var throttle=function(fn,interval){ 
	var _self=fn,
		time=interval||500,
		timer,
		firstTimer=true;//是否为第一次执行，第一次执行立马执行不做延时
	return function(){ 
		var _me=this,
			args=arguments;
		if(firstTimer){
			_self.apply(_me,args);
			firstTimer=false;
		}
		if(timer){//如果定时器在就不执行任何操作
			return false; 
		}
		timer=setTimeout(function(){ 
			clearTimeout(timer);
			timer=null;
			_self.apply(_me,args);
		},time)
	}

}