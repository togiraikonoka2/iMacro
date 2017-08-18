var ret
var i = 1
var j = 1

for(j; j <= 5; j++) {
	iimPlay("Neopets IIM/Trading Post/Trading Post List.iim")

	iimSet("ret", j)
	ret = iimPlay("Neopets IIM/Trading Post/Trading Post Make Offer.iim")
		iimSet("ret", i)
		ret = iimPlay("Neopets IIM/Trading Post/Trading Post Select.iim")
		if (ret < 0) {
			j = 11;
		}
	if(ret < 0) {
		j = 11;
	}
	iimPlay("Neopets IIM/Trading Post/Trading Post Money.iim")
	iimPlay("Neopets IIM/Trading Post/Trading Post Submit.iim")
}

iimPlay("IIM/Close All Other Tabs.iim")

