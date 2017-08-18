var i = prompt("Please enter lowest card number on Home Pile");

//var i = 4;

for(i; i < 14; i++) {
	iimSet("ret", i)
	iimPlay("Neopets IIM/Solitaire/Cards/Spades")
	iimSet("ret", i)
	iimPlay("Neopets IIM/Solitaire/Cards/Hearts")
	iimSet("ret", i)
	iimPlay("Neopets IIM/Solitaire/Cards/Clubs")
	iimSet("ret", i)
	iimPlay("Neopets IIM/Solitaire/Cards/Diamonds")
//	if(i == 13) {
//		iimPlay("Neopets IIM/Solitaire/Solitaire Winnings.iim")
//	}
}
