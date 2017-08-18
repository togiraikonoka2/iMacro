var ret;
var i;
var d = new Date();
var t = d.getHours();

ret = iimPlay("Neopets IIM/Login/Check/Check da_best_51.iim")

if(ret < 0){
	ret = iimPlay("Neopets IIM/Login/Check/Check Login.iim")
	if(ret > 0){
		iimPlay("Neopets IIM/Login/Login/Login da_best_51.iim")
	} else if(ret < 0){
		iimPlay("Neopets IIM/Login/Logout.iim")
		iimPlay("Neopets IIM/Login/Login/Login da_best_51.iim")
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
iimPlay("Neopets IIM/Trading Post/Trading Post Main.iim")
for(i = 1; i <= 10; i++) {
	ret = iimPlay("Neopets IIM/Trading Post/Trading Post Accept.iim")
	if (ret < 0) {
		i = 11
	}
}

iimPlay("Neopets IIM/Quickstock/Quickstock.iim")
iimPlay("Neopets IIM/Quickstock/Quickstock Shop.iim")
iimPlay("Neopets IIM/Quickstock/Quickstock Deposit.iim")
iimPlay("Neopets IIM/Shop/Till.iim")
iimPlay("Neopets IIM/Bank/Bank .iim")
ret = iimPlay("Neopets IIM/Bank/Bank Collected.iim")
if(ret < 0) {
	ret = iimPlay("Neopets IIM/Bank/Bank Missed.iim")
	if(ret < 0) {
		iimPlay("Neopets IIM/Bank/Bank Interest.iim")
		if(t >= 22){
			iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		} else if(t < 22){
			iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
		}
	}
	if(ret > 0){
		if(t >= 22) {
		iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		} else if(t < 22){
			iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
		}
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
iimPlay("Neopets IIM/Shop/Shop By Price.iim")

iimPlay("IIM/Close All Other Tabs.iim")
