var pet={ 
	words:"...",
	speak:function(){ 
		console.log(this.words);
	}
}
var dog={words:"汪汪"};
pet.speak.call(dog);