var brower=(function(){
	var s=window.navigator.userAgent.toLowerCase();
	console.log(s);
	var match=/(webkit)[\/]([\w.]+)/.exec(s) ||
		/(oper)(?:.*version)?[\/]([\w.]+)/.exec(s) ||
		/(mise) ([\w.]+)/.exec(s) ||
		!/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) || [];
		return {name:match[1] ||"",version:match[2] || "0"};
}());
console.dir(brower);