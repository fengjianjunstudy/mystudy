//将以前的计算结果记录下来
function price(){ 
	var price_obj={};
	return function(singlePrice,num){
		if(price_obj["total_"+singlePrice+"_"+num]){ 
			return price_obj["total_"+singlePrice+"_"+num];
		} 
		price_obj["total_"+singlePrice+"_"+num]=singlePrice*num;
		return price_obj["total_"+singlePrice+"_"+num];
	}
}
var totalPrice=price();
console.log(totalPrice(10,10));
console.log(totalPrice(10,5));
console.log(totalPrice(10,10));