var ret 
var i
for(i = 1; i < 31; i++){
	iimSet("ret", i);
	ret = iimPlay("Neopets IIM/Shop/Shop Price 0 js.iim")
	if(ret < 0) {
		i = 31
		iimPlay("Neopets IIM/Shop/Shop Update.iim")
	}
	if(i == 30){
		iimPlay("Neopets IIM/Shop/Shop Update.iim")
	}
}
