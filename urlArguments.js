function urlArgument(str){ 
	var query="";
	var objUrl={};
	if(str){ 
		query=str.split("?")[1];
	}else{ 
		query=window.location.search.substring[1]; 
	}
	console.log("query"+query)
	var urlArg=query.split("&");
	for(var i=0;i<urlArg.length;i++){
		var pos=urlArg[i].indexOf("=");
		if(!pos){
			continue; 
		}
		var key=urlArg[i].substring(0,pos);
		var value=urlArg[i].substring(pos+1);
		objUrl[key]=value;
	}
	return objUrl;


}
var url="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=java&rsv_pq=8a0b115400000998&rsv_t=a6c6Co6avMHxnRH%2BzK5zfOP0hKlHbCN9aVSHXwcO70Sw4SloyOlxNXcE7l4&rsv_enter=1&rsv_sug3=4&rsv_sug1=4&rsv_sug2=0&inputT=3097&rsv_sug4=3097";
console.dir(urlArgument(url));