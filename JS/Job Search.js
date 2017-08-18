var ret
ret = iimPlay("iim/CEX/Job/Bangor Job.iim")
if (ret < 0) {
	iimPlay("iim/Tab Close.iim")
}	
iimPlay("iim/CEX/Job/Belfast Job.iim")
if (ret < 0) {
	iimPlay("iim/Tab Close.iim")
}	
iimPlay("iim/CEX/Job/Newtownards Job.iim")
if (ret < 0) {
	iimPlay("iim/Tab Close.iim")
}	
