var ret;
var i;
var j;
var k;
var l = 11;

ret = iimPlay("Neopets IIM/Login/Check/Check bruce_friend_776.iim")

if(ret > 0){
	j = 1;
	k = 6;
} else {
	j = 6;
	k = 11;
}

for(j; j < k; j++) {
	iimPlay("Neopets IIM/Trading Post/Trading Post List.iim");

	iimSet("ret", j);
	ret = iimPlay("Neopets IIM/Trading Post/Trading Post Make Offer.iim");
	for(i = 1; i < l; i++) {
		iimSet("ret", i)
		ret = iimPlay("Neopets IIM/Trading Post/Trading Post Select.iim")
		if (ret < 0) {
			i = l;
			j = k;
		}
	}
	if(ret < 0) {
		i = l;
		j = l;

	}
	iimPlay("Neopets IIM/Trading Post/Trading Post Submit.iim");
}

iimPlay("IIM/Close All Other Tabs.iim");

