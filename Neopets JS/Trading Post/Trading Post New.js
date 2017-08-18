var i
var ret
iimPlay("Neopets IIM/Trading Post/Trading Post Main.iim")
for(i = 1; i <= 15; i++) {
	ret = iimPlay("Neopets IIM/Trading Post/Trading Post New.iim")
	if(ret < 0){
		i = 16
		iimPlay("Neopets IIM/Quickstock/Quickstock.iim")
		var ret 
		ret = iimPlay("Neopets IIM/Quickstock/Quickstock Shop.iim")
		if(ret < 0) {
			ret = iimPlay("Neopets IIM/Quickstock/Quickstock Deposit.iim")
			if(ret < 0) {
				iimPlay("Neopets IIM/Shop/Shop By Price.iim")
			}
		} else {
			ret = iimPlay("Neopets IIM/Quickstock/Quickstock Deposit.iim")
			if(ret < 0) {
				iimPlay("Neopets IIM/Shop/Shop By Price.iim")
			}
		}
	}
}

iimPlay("IIM/Close All Other Tabs.iim")
