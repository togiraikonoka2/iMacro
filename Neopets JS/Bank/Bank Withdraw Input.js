var ret
var d = new Date();
var t = d.getHours();
var withdraw;

ret = iimPlay("Neopets IIM/Bank/Bank Check.iim")
if(ret < 0) {
	iimPlay("Neopets IIM/Bank/Bank Home.iim")
}

ret = iimPlay("Neopets IIM/Bank/Bank Collected.iim")
if(ret < 0) {
	ret = iimPlay("Neopets IIM/Bank/Bank Missed.iim")
	if(ret < 0) {
		iimPlay("Neopets IIM/Bank/Bank Interest.iim")
	}
}

withdraw = prompt("Please enter withdrawal amount");
iimSet("ret", withdraw)
iimPlay("Neopets IIM/Bank/Bank Withdraw Input.iim")
