﻿var d = new Date();
var t = d.getHours();
var ret

iimPlay("Neopets IIM/Dailies/Scratchcards.iim")
if((t == 6) || (t == 14) || (t == 22)) {
	iimPlay("Neopets IIM/Dailies/Snowager.iim")
}
iimPlay("Neopets IIM/Dailies/Wheels.iim")
iimPlay("Neopets IIM/Dailies/Springs.iim")
iimPlay("Neopets IIM/Dailies/Surprise.iim")
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
