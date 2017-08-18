var ret
ret = iimPlay("Neopets IIM/dj_otis.iim")

if(ret < 0){
	ret = iimPlay("Neopets IIM/Login/Login Options.iim")
	if(ret > 0){
		iimPlay("Neopets IIM/Login/dj_otis.iim")
	} else if(ret < 0){
		iimPlay("Neopets IIM/Login/Logout.iim")
		iimPlay("Neopets IIM/Login/dj_otis.iim")
	}
}

iimPlay("Neopets IIM/Neolodge/Neolodge.iim")
iimPlay("Neopets IIM/Neolodge/max_rookie.iim")
