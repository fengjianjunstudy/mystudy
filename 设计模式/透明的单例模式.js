/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-06-19 15:39:00
 * @version $Id$
 */

var createDiv=(function(){ 
	var instance;
	createDiv=function(html){ 
		if(!instance){ 
			this.html=html;
			this.init();
			return instance=this;
		}else{ 
			return instance;
		}
	}
	createDiv.prototype.init=function(){ 
		var oDiv=document.createElement("div");
		oDiv.innerHTML=this.html;
		document.body.appendChild(oDiv);
	}
	return createDiv;
}());
var a=new createDiv("helloOne");
var b=new createDiv("helloTwo");
console.log(a===b)



var mySpace={};
mySpace.name="xiaoming";
mySpace.sayName=function(){  
    console.log(this.name)
}
mySpace.nameSpace=function(obj){ 
	for(var key in obj){ 
		if(!this[key]){ 
			this[key]=obj[this]
		}
	}
}


var user=(function(){ 
	var _name="xiaohua";
	var _age=18;
	return { 
		getUserInfo:function(){ 
			console.log(this._age);
			console.log(this._name);
		}
	}
})();



function Single(fn){ 
	var instance;
	return function(){ 
		return instance||(instance=fn.apply(this,arguments))	
	}
	
	
}
function CreateDiv(){ 
	var oDiv =document.createElement("div");
	oDiv.innerHTML="我是唯一的"
	document.body.appendChild(oDiv);
	return oDiv;
}
var CreateSingleDiv=Single(CreateDiv);
CreateSingleDiv()



var strategies={ 
	"S":function(salary){
		return salary*4 
	},
	"A":function(salary){ 
		return salary*3
	},
	"B":function(salary){ 
		salary*2
	},
	"C":function(salary){ 
		return salary*1
	}
};
function calculateBouns(level,salary){ 

	return strategies[level](salary);
} 

