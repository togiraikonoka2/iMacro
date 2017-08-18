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

iimPlay("IIM/Close All Other Tabs.iim")
