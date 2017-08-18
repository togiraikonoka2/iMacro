var ret
var dt = new Date();
var t = dt.getHours();
var dy = dt.getDate();
var z = dy % 10;
ret = iimPlay("Neopets IIM/Login/Check/Check bruce_friend_776.iim")
if(ret < 0){
	ret = iimPlay("Neopets IIM/Login/Check/Check Login.iim")
	if(ret > 0){
		iimPlay("Neopets IIM/Login/Login/Login bruce_friend_776.iim")
	} else if(ret < 0){
		iimPlay("Neopets IIM/Login/Logout.iim")
		iimPlay("Neopets IIM/Login/Login/Login bruce_friend_776.iim")
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
if((t == 6) || (t == 14) || (t == 22)) {
	iimPlay("Neopets IIM/Dailies/Snowager.iim")
}
iimPlay("Neopets IIM/Dailies/Tomb.iim")
iimPlay("Neopets IIM/Dailies/Tombola.iim")
iimPlay("Neopets IIM/Dailies/Scratchcards.iim")
iimPlay("Neopets IIM/Dailies/Wheels.iim")
iimPlay("Neopets IIM/Dailies/Springs.iim")
iimPlay("Neopets IIM/Dailies/Surprise.iim")
iimPlay("Neopets IIM/Bank/Bank Home.iim")
if(z == 0) {
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


	for(j = 1; j < 11; j++) {
		iimPlay("Neopets IIM/Trading Post/Trading Post List.iim")

		iimSet("ret", j)
		ret = iimPlay("Neopets IIM/Trading Post/Trading Post Make Offer 2.iim")
		for(var i = 1; i <= 10; i++) {
			iimSet("ret", i)
			ret = iimPlay("Neopets IIM/Trading Post/Trading Post Select 2.iim")
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
}
iimPlay("Neopets IIM/Bank/Bank Home.iim")
ret = iimPlay("Neopets IIM/Bank/Bank Collected.iim")
if(ret < 0) {
	ret = iimPlay("Neopets IIM/Bank/Bank Missed.iim")
	if(ret < 0) {
		iimPlay("Neopets IIM/Bank/Bank Interest.iim")
		if((t > 21) || (t < 6)){
			iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		} else if((t < 22) && (t > 15)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
		} else if((t < 16) && (t > 7)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 3600.iim")
		}
	} else if(ret > 0){
		if((t > 21) || (t < 6)){
			iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		} else if((t < 22) && (t > 15)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
		} else if((t < 16) && (t > 7)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 3600.iim")
		}
	}
} else if(ret > 0) {
	if((t > 21) || (t < 6)){
		iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
	} else if((t < 22) && (t > 15)){
		iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
	} else if((t < 16) && (t > 7)){
		iimPlay("Neopets IIM/Bank/Bank Deposit 3600.iim")
	}
} 
iimPlay("IIM/Close All Other Tabs.iim")
iimPlay("Neopets IIM/Login/Logout.iim")
iimPlay("Neopets IIM/Login/Login/Login dj_otis.iim")
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
if((t == 6) || (t == 14) || (t == 22)) {
	iimPlay("Neopets IIM/Dailies/Snowager.iim")
}
iimPlay("Neopets IIM/Dailies/Tomb.iim")
iimPlay("Neopets IIM/Dailies/Tombola.iim")
iimPlay("Neopets IIM/Dailies/Scratchcards.iim")
iimPlay("Neopets IIM/Dailies/Wheels.iim")
iimPlay("Neopets IIM/Dailies/Springs.iim")
iimPlay("Neopets IIM/Dailies/Surprise.iim")
iimPlay("Neopets IIM/Bank/Bank Home.iim")
if(z == 0) {
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
	for(j = 6; j < 11; j++) {
		iimPlay("Neopets IIM/Trading Post/Trading Post List.iim")

		iimSet("ret", j)
		ret = iimPlay("Neopets IIM/Trading Post/Trading Post Make Offer 2.iim")
		for(var i = 1; i <= 10; i++) {
			iimSet("ret", i)
			ret = iimPlay("Neopets IIM/Trading Post/Trading Post Select 2.iim")
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
}
iimPlay("Neopets IIM/Bank/Bank Home.iim")
ret = iimPlay("Neopets IIM/Bank/Bank Collected.iim")
if(ret < 0) {
	ret = iimPlay("Neopets IIM/Bank/Bank Missed.iim")
	if(ret < 0) {
		iimPlay("Neopets IIM/Bank/Bank Interest.iim")
		if((t > 21) || (t < 6)){
			iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		} else if((t < 22) && (t > 15)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
		} else if((t < 16) && (t > 7)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 3600.iim")
		}
	} else if(ret > 0){
		if((t > 21) || (t < 6)){
			iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		} else if((t < 22) && (t > 15)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
		} else if((t < 16) && (t > 7)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 3600.iim")
		}
	}
} else if(ret > 0) {
	if((t > 21) || (t < 6)){
		iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
	} else if((t < 22) && (t > 15)){
		iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
	} else if((t < 16) && (t > 7)){
		iimPlay("Neopets IIM/Bank/Bank Deposit 3600.iim")
	}
} 
iimPlay("IIM/Close All Other Tabs.iim")
iimPlay("Neopets IIM/Login/Logout.iim")
iimPlay("Neopets IIM/Login/Login/Login da_best_51.iim")
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
if((t == 6) || (t == 14) || (t == 22)) {
	iimPlay("Neopets IIM/Dailies/Snowager.iim")
}
iimPlay("Neopets IIM/Dailies/Tomb.iim")
iimPlay("Neopets IIM/Dailies/Tombola.iim")
iimPlay("Neopets IIM/Dailies/Scratchcards.iim")
iimPlay("Neopets IIM/Dailies/Wheels.iim")
iimPlay("Neopets IIM/Dailies/Springs.iim")
iimPlay("Neopets IIM/Dailies/Surprise.iim")
if(z == 0) {
	iimPlay("Neopets IIM/Trading Post/Trading Post Main.iim")
	for(var i = 1; i <= 15; i++) {
		ret = iimPlay("Neopets IIM/Trading Post/Trading Post Accept.iim")
		if (ret < 0) {
			i = 16;
		}
	}
}
iimPlay("Neopets IIM/Quickstock/Quickstock Shop.iim")
iimPlay("Neopets IIM/Quickstock/Quickstock Deposit.iim")
iimPlay("Neopets IIM/Shop/Till.iim")
iimPlay("Neopets IIM/Bank/Bank Home.iim")
ret = iimPlay("Neopets IIM/Bank/Bank Collected.iim")
if(ret < 0) {
	ret = iimPlay("Neopets IIM/Bank/Bank Missed.iim")
	if(ret < 0) {
		iimPlay("Neopets IIM/Bank/Bank Interest.iim")
		if((t > 21) || (t < 6)){
			iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		} else if((t < 22) && (t > 15)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
		} else if((t < 16) && (t > 7)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 3600.iim")
		}
	} else if(ret > 0){
		if((t > 21) || (t < 6)){
			iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
		} else if((t < 22) && (t > 15)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
		} else if((t < 16) && (t > 7)){
			iimPlay("Neopets IIM/Bank/Bank Deposit 3600.iim")
		}
	}
} else if(ret > 0) {
	if((t > 21) || (t < 6)){
		iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
	} else if((t < 22) && (t > 15)){
		iimPlay("Neopets IIM/Bank/Bank Deposit 2400.iim")
	} else if((t < 16) && (t > 7)){
		iimPlay("Neopets IIM/Bank/Bank Deposit 3600.iim")
	}
} 
iimPlay("IIM/Close All Other Tabs.iim")