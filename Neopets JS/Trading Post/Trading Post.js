iimPlay("Neopets IIM/Trading Post/Trading Post List.iim")

var d = new Date();
var n = d.getDate();

if(n == 28) {
var ret
var rets
iimPlay("Neopets IIM/Bank/Bank.iim")
ret = iimPlay("Neopets IIM/Bank/BankCollected.iim")
if (ret < 0) {
	rets = iimPlay("Neopets IIM/Bank/BankMissed.iim")
	if (rets < 0) {
		iimPlay("Neopets IIM/Bank/BankInterest.iim")
		iimPlay("Neopets IIM/Bank/BankWithdraw.iim")
	}
	if (rets > 0) {
		iimPlay("Neopets IIM/Bank/BankWithdraw.iim")
	} 
	}
} else if (ret > 0) {
	iimPlay("Neopets IIM/Bank/BankWithdraw.iim")
} 
var ret
var rets
iimPlay("Neopets IIM/Bank/Bank.iim")
ret = iimPlay("Neopets IIM/Bank/BankCollected.iim")
if (ret < 0) {
	rets = iimPlay("Neopets IIM/Bank/BankMissed.iim")
	if (rets < 0) {
		iimPlay("Neopets IIM/Bank/BankInterest.iim")
		iimPlay("Neopets IIM/Bank/BankDeposit.iim")
	}
	if (rets > 0) {
		iimPlay("Neopets IIM/Bank/BankDeposit.iim")
	} 
} else if (ret > 0) {
	iimPlay("Neopets IIM/Bank/BankDeposit.iim")
}


for(var j = 1; j < 5; j++) {
	var d = new Date();
	var n = d.getDate();
	if(n == 28) {
		iimPlay("Neopets IIM/Trading Post/Trading Post List.iim")
	
		iimSet("ret", j)
		rets = iimPlay("Neopets IIM/Trading Post/Trading Post Make Offer.iim")
		for(var i = 1; i < 11; i++) {
			iimSet("ret", i)
			ret = iimPlay("Neopets IIM/Trading Post/Trading Post Select.iim")
			if (ret < 0) {
				i = 11;
				j = 6;
			}
		}
		if(rets < 0) {
			i = 11;
			j = 6;
	
		}
		iimPlay("Neopets IIM/Trading Post/Trading Post Money.iim")
		iimPlay("Neopets IIM/Trading Post/Trading Post Submit.iim")
		//iimPlay("Neopets IIM/Quickstock/Quickstock Deposit.iim")

	} else {
		iimPlay("Neopets IIM/Bank/Bank.iim")
		iimPlay("Neopets IIM/Bank/BankDeposit.iim")
		iimPlay("Neopets IIM/Bank/BankDeposit.iim")
		j = 5
	}
}

iimPlay("IIM/Close All Other Tabs.iim")
