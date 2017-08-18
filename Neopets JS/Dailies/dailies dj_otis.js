var ret;
var i;
var j;
var d = new Date();
var n = d.getDate();
var t = d.getHours();
var z = n % 10;

ret = iimPlay("Neopets IIM/Login/Check/Check dj_otis.iim")

if(ret < 0){
	ret = iimPlay("Neopets IIM/Login/Check/Check Login.iim")
	if(ret > 0){
		iimPlay("Neopets IIM/Login/Login/Login dj_otis.iim")
	} else if(ret < 0){
		iimPlay("Neopets IIM/Login/Logout.iim")
		iimPlay("Neopets IIM/Login/Login/Login dj_otis.iim")
	}
}

iimPlay("Neopets IIM/Misc/Clear Notifications.iim")
iimPlay("Neopets IIM/Dailies/Advent.iim")
iimPlay("Neopets IIM/Dailies/Anchor.iim")
iimPlay("Neopets IIM/Dailies/Apple Bobbing.iim")
iimPlay("Neopets IIM/Dailies/Fishing.iim")
iimPlay("Neopets IIM/Dailies/Freebies.iim")
iimPlay("Neopets IIM/Dailies/Fruit.iim")
iimPlay("Neopets IIM/Dailies/Omelette.iim")
iimPlay("Neopets IIM/Dailies/Plushie.iim")
iimPlay("Neopets IIM/Dailies/Shrine.iim")
iimPlay("Neopets IIM/Dailies/Scratchcards.iim")
if(t == 6 || t == 14 || t == 22) {
	iimPlay("Neopets IIM/Dailies/Snowager.iim")
}
iimPlay("Neopets IIM/Dailies/Tomb.iim")
iimPlay("Neopets IIM/Dailies/Tombola.iim")
iimPlay("Neopets IIM/Dailies/Scratchcards.iim")
iimPlay("Neopets IIM/Dailies/Wheels.iim")
iimPlay("Neopets IIM/Dailies/Springs.iim")
iimPlay("Neopets IIM/Dailies/Surprise.iim")

if(z == 0) {
	iimPlay("Neopets IIM/Bank/Bank Withdraw.iim")
	for(j = 5; j < 10; j++) {
		iimPlay("Neopets IIM/Trading Post/Trading Post List.iim")
	
		iimSet("ret", j)
		ret = iimPlay("Neopets IIM/Trading Post/Trading Post Make Offer 2.iim")
		
		for(i = 1; i <= 10; i++) {
			iimSet("ret", i)
			ret = iimPlay("Neopets IIM/Trading Post/Trading Post Select 2.iim")
			if (ret < 0) {
				i = 11;
				j = 9;
			}
		}
		if(ret < 0) {
			i = 11;
			j = 9;
		}
		
			iimPlay("Neopets IIM/Trading Post/Trading Post Money.iim")
		iimPlay("Neopets IIM/Trading Post/Trading Post Submit.iim")
		iimPlay("Neopets IIM/Quickstock/Quickstock Deposit.iim")
	}
} else if(t >= 22) {
	iimPlay("Neopets IIM/Bank/Bank .iim")
	ret = iimPlay("Neopets IIM/Bank/Bank Collected.iim")
	if (ret < 0) {
		rets = iimPlay("Neopets IIM/Bank/Bank Missed.iim")
		if (rets < 0) {
			iimPlay("Neopets IIM/Bank/Bank Interest.iim")
			iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		}
		if (rets > 0) {
			iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		} 
	} else if (ret > 0) {
		iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
	} 
}

iimPlay("IIM/Close All Other Tabs.iim")
