var ret
var j

ret = iimPlay("Neopets IIM/Login/Check/Check bruce_friend_776.iim")

if(ret > 0){
	j = 1
} else {
	j = 6
}

iimPlay("Neopets IIM/Bank/Bank Home.iim")
ret = iimPlay("Neopets IIM/Bank/Bank Collected.iim")
if (ret < 0) {
	re = iimPlay("Neopets IIM/Bank/Bank Missed.iim")
	if (re < 0) {
		iimPlay("Neopets IIM/Bank/Bank Interest.iim")
		iimPlay("Neopets IIM/Bank/Bank Withdraw.iim")
	}
	if (re > 0) {
		iimPlay("Neopets IIM/Bank/Bank Withdraw.iim")
	} 
} else if (ret > 0) {
	iimPlay("Neopets IIM/Bank/Bank Withdraw.iim")
} 


for(j; j < 11; j++) {
	iimPlay("Neopets IIM/Trading Post/Trading Post List.iim")

	iimSet("ret", j)
	ret = iimPlay("Neopets IIM/Trading Post/Trading Post Make Offer.iim")
	for(var i = 1; i <= 10; i++) {
		//i = 1
		iimSet("ret", i)
		ret = iimPlay("Neopets IIM/Trading Post/Trading Post Select.iim")
		if (ret < 0) {
			i = 11;
			j = 11;
		}
	}
	if(ret < 0) {
		i = 11;
		j = 11;

	}
	iimPlay("Neopets IIM/Trading Post/Trading Post Money.iim")
	iimPlay("Neopets IIM/Trading Post/Trading Post Submit.iim")
}

iimPlay("IIM/Close All Other Tabs.iim")

