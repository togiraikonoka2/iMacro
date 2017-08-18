var ret

ret = iimPlay("Neopets IIM/Login/Check/Check bruce_friend_776.iim")

if(ret < 0){
	ret = iimPlay("Neopets IIM/Login/Check/Check Login.iim")
	if(ret > 0){
		iimPlay("Neopets IIM/Login/Login/Login bruce_friend_776.iim")
	} else if(ret < 0){
		iimPlay("Neopets IIM/Login/Logout.iim")
		iimPlay("Neopets IIM/Login/Login/Login bruce_friend_776.iim")
	}
}

iimPlay("Neopets IIM/Dailies/Wheels.iim")
iimPlay("Neopets IIM/Dailies/Springs.iim")
iimPlay("IIM/Close All Other Tabs.iim")

iimPlay("Neopets IIM/Login/Logout.iim")
iimPlay("Neopets IIM/Login/Login/Login dj_otis.iim")

iimPlay("Neopets IIM/Dailies/Wheels.iim")
iimPlay("Neopets IIM/Dailies/Springs.iim")
iimPlay("IIM/Close All Other Tabs.iim")

iimPlay("Neopets IIM/Login/Logout.iim")
iimPlay("Neopets IIM/Login/Login/Login da_best_51.iim")

iimPlay("Neopets IIM/Dailies/Wheels.iim")
iimPlay("Neopets IIM/Dailies/Springs.iim")
iimPlay("IIM/Close All Other Tabs.iim")
