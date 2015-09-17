/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-06-04 13:25:58
 * @version $Id$
 */

function Sandbox(){ 
	var args=Array.prototype.slice.call(arguments),
		callback=args.pop(),
		modules=(args[0]&& typeof args[0]==="string")?args:args[0],
		i;
	if(!this instanceof Sandbox ){　
		return new Sandbox(modules,callback);
	}
	this.a=1;
	this.b=2;

	if(!mudoles||modules==="*"){ 
		mudoles=[];
		for(i in Sandbox.modules){ 
			if(Sandbox.modules.hasOwnProperty(i)){ 
				modules.push(i)
			}
		}
	}
	for(var j=0;j<modules.length;j++){ 
		Sandbox.modules[modules[i]](this);
	}
	callback(this)
}

Sandbox.prototype={ 
	name:"MyApp",
	version:"1.0",
	getName:function(){ 
		return this.name
	}
}