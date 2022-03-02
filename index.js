let topAmount = 0
for (let r = 1; r <= 5; r++){
	let rowId = 'row' + r.toString()
	let row = document.getElementById(rowId)
	row.style.padding = '0px'
	row.style.margin = '0px'
	row.style.position = 'absolute'
	row.style.left = '50%'
	row.style.transform = 'translate(-50%, 0%)'
	row.style.width = '350px'
	row.style.height = '84px'
	row.style.background = 'rgb(192,192,192)'
	
	if (r >= 2){
		topAmount += 84
		row.style.top = topAmount + 'px'	
	}
}	

let rowUnlocked = 1
let guessedWord = ''
let correctWord = 'hello'
let keyRowOne = 'qwertyuiop'	

func()

for (let L1 = 1; L1 <= 10; L1++){
	let keySet1Id = 'L' + L1.toString()
	let keySet1 = document.getElementById(keySet1Id)
	keySet1.innerHTML = keyRowOne[L1 - 1]
	keySet1.style.margin = '0px'
	keySet1.style.padding = '0px'
	keySet1.style.display = 'inline-block'
	keySet1.style.width = '48px'
	keySet1.style.height = '54px'
	keySet1.style.bottom = '180px'
	keySet1.style.textAlign = 'center'
	keySet1.style.borderStyle = 'solid'
	keySet1.style.borderWidth = '1px'
	keySet1.style.boxSizing = 'border-box'
	keySet1.style.lineHeight = '54px'
	keySet1.style.fontSize = '21px'
	keySet1.style.float = 'left'
	document.addEventListener('click', function(e) {
		if (keySet1 == e.target && keySet1.contains(e.target)) {    
			guessedWord += keySet1.innerHTML.toString()
			if (guessedWord.length <= 5){
				func()
			}
		}
	});
	
}

function func(){
	for (let t1 = 1; t1 <= 5; t1++){
		let tileId = 'R1T' + t1.toString()
		let tile = document.getElementById(tileId)
		tile.innerHTML = guessedWord[t1 - 1] ?? ''
		tile.style.display = 'inline-block'
		tile.style.width = '70px'
		tile.style.height = '80px'
		tile.style.margin = '0px'
		tile.style.padding = '0px'
		tile.style.textAlign = 'center'
		tile.style.lineHeight = '82px'
		tile.style.fontSize = '42px'
		tile.style.borderStyle = 'solid'
		tile.style.borderWidth = '1px'
		tile.style.boxSizing = 'border-box'
		tile.style.float = 'left'
		if (guessedWord[t1 - 1] == correctWord[t1 - 1]){
			tile.style.backgroundColor = 'green'	
		}else if (correctWord.includes(guessedWord[t1 - 1]) == true){
			tile.style.backgroundColor = 'yellow'	
		}else{
			tile.style.backgroundColor = 'grey'
		}
	}		
}

	



















