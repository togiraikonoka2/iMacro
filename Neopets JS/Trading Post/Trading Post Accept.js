var ret
var i

iimPlay("Neopets IIM/Misc/Clear Notifications.iim")
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

iimPlay("Neopets IIM/Shop/Shop By Price.iim")

iimPlay("IIM/Close All Other Tabs.iim")
