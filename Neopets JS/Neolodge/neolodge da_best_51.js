var ret
var ret
ret = iimPlay("Neopets IIM/da_best_51.iim")

if(ret < 0){
	ret = iimPlay("Neopets IIM/Login/Login Options.iim")
	if(ret > 0){
		iimPlay("Neopets IIM/Login/da_best_51.iim")
	} else if(ret < 0){
		iimPlay("Neopets IIM/Login/Logout.iim")
		iimPlay("Neopets IIM/Login/da_best_51.iim")
	}
}

iimPlay("Neopets IIM/Neolodge/Neolodge.iim")
iimPlay("Neopets IIM/Neolodge/adelaide125.iim")
iimPlay("Neopets IIM/Neolodge/ffbvcbvcbcvb.iim")
iimPlay("Neopets IIM/Neolodge/hoog_Ksv_10.iim")
iimPlay("Neopets IIM/Neolodge/jesheele612.iim")
