function inherit(p){ 
	if(p==null){
		 return ;
	}
	if(Object.create){
		return Object.create(p);
	}
	var t=typeof p;
	if(t !=="object" && t !== "function"){
		 throw new Error;
	}
	var F=function(){ };
	F.prototype=p;
	return new F();
}



function defineSubClass(superClass,constructor,methods,static){ 
	constructor.prototype=inherit(superClass.prototype);
	constructor.prototype.constructor=constructor;
	if(methods){ 
		extend(constructor.prototype,methods)
	}
	if(static){ 
		extend(constructor,static)
	
	}
	return constructor;
}