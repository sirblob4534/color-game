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
let keyRowTwo = 'asdfghjkl'
let keyRowThree = 'zxcvbnm'
let enterPressed = false
let backup = correctWord

let currentRow = 1

document.addEventListener('keypress', function(e){
	if (guessedWord.length == 5){
		
		if (e.key == 'Enter'){
			enterPressed = true
			correctWord = backup
			if (currentRow == 1){
				func1()	
			}
			currentRow += 1
			guessedWord = ''
		}
	}
})


func1()
func2()

//qwertyuiop
for (let L1 = 1; L1 <= 10; L1++){
	let keySet1Id = 'K' + L1.toString()
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
				if (currentRow == 1){
					func1()	
				}
			}
		}
	});
	
}

//asdfghjkl
for (let L2 = 1; L2 <= 9; L2++){
	let keySet2Id = '2K' + L2.toString()
	let keySet2 = document.getElementById(keySet2Id)
	keySet2.innerHTML = keyRowTwo[L2 - 1]
	keySet2.style.margin = '0px'
	keySet2.style.padding = '0px'
	keySet2.style.display = 'inline-block'
	keySet2.style.width = '48px'
	keySet2.style.height = '54px'
	keySet2.style.bottom = '126px'
	keySet2.style.textAlign = 'center'
	keySet2.style.borderStyle = 'solid'
	keySet2.style.borderWidth = '1px'
	keySet2.style.boxSizing = 'border-box'
	keySet2.style.lineHeight = '54px'
	keySet2.style.fontSize = '21px'
	keySet2.style.float = 'left'
	document.addEventListener('click', function(e) {
		if (keySet2 == e.target && keySet2.contains(e.target)) {    
			guessedWord += keySet2.innerHTML.toString()
			if (guessedWord.length <= 5){
				if (currentRow == 1){
					func1()	
				}
				
			}
		}
	});
	
}

//zxcvbnm
for (let L3 = 1; L3 <= 7; L3++){
	let keySet3Id = '3K' + L3.toString()
	let keySet3 = document.getElementById(keySet3Id)
	keySet3.innerHTML = keyRowThree[L3 - 1]
	keySet3.style.margin = '0px'
	keySet3.style.padding = '0px'
	keySet3.style.display = 'inline-block'
	keySet3.style.width = '48px'
	keySet3.style.height = '54px'
	keySet3.style.bottom = '126px'
	keySet3.style.textAlign = 'center'
	keySet3.style.borderStyle = 'solid'
	keySet3.style.borderWidth = '1px'
	keySet3.style.boxSizing = 'border-box'
	keySet3.style.lineHeight = '54px'
	keySet3.style.fontSize = '21px'
	keySet3.style.float = 'left'
	document.addEventListener('click', function(e) {
		if (keySet3 == e.target && keySet3.contains(e.target)) {    
			guessedWord += keySet3.innerHTML.toString()
			if (guessedWord.length <= 5){
				if (currentRow == 1){
					func1()	
				}
			}
		}
	});
	
}


function func1(){
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
		if (enterPressed == true){
			if (guessedWord[t1 - 1] == correctWord[t1 - 1]){
				tile.style.backgroundColor = 'green'	
			}else if (correctWord.includes(guessedWord[t1 - 1]) == true){
				correctWord = correctWord.replace(guessedWord[t1 - 1], '')
				console.log(correctWord)
				tile.style.backgroundColor = 'yellow'	
			}else{
				tile.style.backgroundColor = 'grey'
			}
			if (t1 == 5){
				enterPressed = false
			}
		}
	}		
}

function func2(){
	for (let t2 = 1; t2 <= 5; t2++){
		let tile2Id = 'R2T' + t2.toString()
		let tile2 = document.getElementById(tile2Id)
		tile2.innerHTML = guessedWord[t2 - 1] ?? ''
		tile2.style.display = 'inline-block'
		tile2.style.width = '70px'
		tile2.style.height = '80px'
		tile2.style.top = '80px'
		tile2.style.margin = '0px'
		tile2.style.padding = '0px'
		tile2.style.textAlign = 'center'
		tile2.style.lineHeight = '82px'
		tile2.style.fontSize = '42px'
		tile2.style.borderStyle = 'solid'
		tile2.style.borderWidth = '1px'
		tile2.style.boxSizing = 'border-box'
		tile2.style.float = 'left'
		if (enterPressed == true){
			if (guessedWord[t2 - 1] == correctWord[t2 - 1]){
				tile2.style.backgroundColor = 'green'	
			}else if (correctWord.includes(guessedWord[t2 - 1]) == true){
				correctWord = correctWord.replace(guessedWord[t2 - 1], '')
				console.log(correctWord)
				tile2.style.backgroundColor = 'yellow'	
			}else{
				tile2.style.backgroundColor = 'grey'
			}
			if (t2 == 5){
				enterPressed = false
			}
		}
	}		
}



















