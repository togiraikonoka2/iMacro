var ret 
var i = prompt("Enter Starting Position")
var j = prompt("Enter Finishing Position")
var per = prompt("Enter Percentage")

if(!(per)) {
	per = 88.75;
} 

if(j > 30) {
	j = 30;
}

if(!(i) && !(j)) {
	i = 1
	j = 30
	for(i; i <= j; i ++){
		iimSet("ret", i)
		iimSet("percent", per)
		ret = iimPlay("Neopets IIM/Shop/pricing under 30 js.iim")
		if((ret < 0)) {
			i = 31
			iimPlay("iim/Tab Close.iim")
			iimPlay("Neopets IIM/Shop/Shop Update.iim")
		}
		if(i == 30){
			iimPlay("Neopets IIM/Shop/Shop Update.iim")
		}
	}
} else if(!(i) && (j)) {
	i = 1
	for(i; i <= j; i ++){
		iimSet("ret", i)
		iimSet("percent", per)
		ret = iimPlay("Neopets IIM/Shop/pricing under 30 js.iim")
		if((ret < 0)) {
			i = 31
			iimPlay("iim/Tab Close.iim")
			iimPlay("Neopets IIM/Shop/Shop Update.iim")
		}
		if(i == 30 || i == j){
			iimPlay("Neopets IIM/Shop/Shop Update.iim")
		}
	}
} else if((i) && !(j)) {
	j = 30
	for(i; i <= j; i ++){
		iimSet("ret", i)
		iimSet("percent", per)
		ret = iimPlay("Neopets IIM/Shop/pricing under 30 js.iim")
		if((ret < 0)) {
			i = 31
			iimPlay("iim/Tab Close.iim")
			iimPlay("Neopets IIM/Shop/Shop Update.iim")
		}
		if(i == 30){
			iimPlay("Neopets IIM/Shop/Shop Update.iim")
		}
	}
} else if((i) && (j)) {
	for(i; i <= j; i ++){
		iimSet("ret", i)
		iimSet("percent", per)
		ret = iimPlay("Neopets IIM/Shop/pricing under 30 js.iim")
		if((ret < 0)) {
			i = 31
			iimPlay("iim/Tab Close.iim")
			iimPlay("Neopets IIM/Shop/Shop Update.iim")
		}
		if(i == 30 || i == j){
			iimPlay("Neopets IIM/Shop/Shop Update.iim")
		}
	}
}
