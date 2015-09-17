/* 
	* isType 存储各种数据类型的处理程序
*/
var isType={};
for(var i=0,type=["String","Array","Number"],typeName;typeName=type[i++];){ 
	(function(type){ 
		isType["is"+type]=function(obj){ 
			return Object.prototype.toString.apply(obj)==="[object "+type+"]";
		}
	})(typeName)
}
console.log(isType.isString([]))