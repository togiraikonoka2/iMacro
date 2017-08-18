var ret

for(var i = 1; i < 6; i++) { 
	ret = iimPlay("Neopets IIM/Trading Post/Trading Post Cancel Offer.iim")
	if (ret < 0) {
		i = 6
	}
}