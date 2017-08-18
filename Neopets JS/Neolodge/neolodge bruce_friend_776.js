var ret
ret = iimPlay("Neopets IIM/bruce_friend_776.iim")

if(ret < 0){
	ret = iimPlay("Neopets IIM/Login/Login Options.iim")
	if(ret > 0){
		iimPlay("Neopets IIM/Login/bruce_friend_776.iim")
	} else if(ret < 0){
		iimPlay("Neopets IIM/Login/Logout.iim")
		iimPlay("Neopets IIM/Login/bruce_friend_776.iim")
	}
}

iimPlay("Neopets IIM/Neolodge/Neolodge.iim")
iimPlay("Neopets IIM/Neolodge/acara_keeper_2051.iim")
iimPlay("Neopets IIM/Neolodge/Cmxds.iim")
iimPlay("Neopets IIM/Neolodge/gagaruki.iim")
iimPlay("Neopets IIM/Neolodge/leny_30.iim")
