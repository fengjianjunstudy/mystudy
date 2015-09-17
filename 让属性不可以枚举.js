Object.defineProperty(Object.prototype,"objectId",{ 
	get:idGetter,
	enumerable:false,
	configurable:false
});
function idGetter(){ 
	console.log("进入")
	if(!(idProp in this)){ 

		if(!Object.isExtensible(this)){ 

		}
		Object.defineProperty(this,idProp,{ 
			value:nextId++,
			writable:false,
			enumerable:false,
			configurable:false
		});
	}
	return this[idProp];
}
var idProp="|**objectId**|",nextId=1;
console.dir(Object.prototype);
console.log(Object.prototype["objectId"])
