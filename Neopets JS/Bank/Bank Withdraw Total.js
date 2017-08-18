var ret
var d = new Date();
var t = d.getHours();

ret = iimPlay("Neopets IIM/Bank/Bank Check.iim")
if(ret < 0) {
	iimPlay("Neopets IIM/Bank/Bank Home.iim")
}
iimPlay("Neopets IIM/Bank/Bank Home.iim")
ret = iimPlay("Neopets IIM/Bank/Bank Collected.iim")
if(ret < 0) {
	ret = iimPlay("Neopets IIM/Bank/Bank Missed.iim")
	if(ret < 0) {
		iimPlay("Neopets IIM/Bank/Bank Interest.iim")
	}
}

iimPlay("Neopets IIM/Bank/Bank Withdraw.iim")
