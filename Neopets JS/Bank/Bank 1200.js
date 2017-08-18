var ret

ret = iimPlay("Neopets IIM/Bank/Bank Check.iim")
if(ret < 0) {
	iimPlay("Neopets IIM/Bank/Bank Home.iim")
}

ret = iimPlay("Neopets IIM/Bank/Bank Collected.iim")
if(ret < 0) {
	ret = iimPlay("Neopets IIM/Bank/Bank Missed.iim")
	if(ret < 0) {
		iimPlay("Neopets IIM/Bank/Bank Interest.iim")
		iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
	} else if(ret > 0){
		iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
	}
} else if(ret > 0) {
		iimPlay("Neopets IIM/Bank/Bank Deposit.iim")
} 

iimPlay("IIM/Close All Other Tabs.iim")
