function Range(from,to){ 
	var props={ 
		from:{value:from,enumerable:true,writable:false,configurable:false},
		to:{value:to,enumerable:true,writable:false,configurable:false}
	};
	if(this instanceof Range){
		Object.defineProperties(this,props) 
	}else{ 
		return Object.create(Range.prototype,props)
	}
}