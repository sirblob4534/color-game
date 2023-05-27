
let topAmount = 0
for (let r = 1; r <= 6; r++){
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

enter = document.getElementById('enter')
enter.innerHTML = 'ENTER'
enter.style.textAlign = 'center'
enter.style.borderStyle = 'solid'
enter.style.borderWidth = '1px'
enter.style.left = 
document.addEventListener('click', function(e) {
	if (enter == e.target && enter.contains(e.target)){
		if (guessedWord.length == 5){
			enterPressed = true
			if (currentRow == 1){
				func1()
			}else if (currentRow == 2){
				func2()
			}else if (currentRow == 3){
				func3()
			}else if (currentRow == 4){
				func4()
			}else if (currentRow == 5){
				func5()
			}else if (currentRow == 6){
				func6()
			}
			backup = correctWord
			currentRow += 1
			guessedWord = ''
		
		}
	}
})



let rowUnlocked = 1
let guessedWord = ''
let correctWord = wordlist[Math.floor(Math.random() * wordlist.length)].toString()
let keyRowOne = 'qwertyuiop'
let keyRowTwo = 'asdfghjkl'
let keyRowThree = 'zxcvbnm'
let enterPressed = false
let backup = correctWord

let currentRow = 1
letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
greyLetters = []
yellowLetters = []
greenLetters = []


document.addEventListener("keypress", function onEvent(event) {
	if (event.key === 'Enter'){
		if (guessedWord.length == 5){
			enterPressed = true
			if (currentRow == 1){
				func1()
			}else if (currentRow == 2){
				func2()
			}else if (currentRow == 3){
				func3()
			}else if (currentRow == 4){
				func4()
			}else if (currentRow == 5){
				func5()
			}else if (currentRow == 6){
				func6()
			}
			backup = correctWord
			currentRow += 1
			guessedWord = ''
		
		}
	}
	for (let i = 0; i <= letters.length; i++)
		if (event.key === letters[i]) {
			if (guessedWord.length < 5){
				guessedWord += letters[i]
				if (currentRow == 1){
					func1()	
				}else if (currentRow == 2){
					func2()
				}else if (currentRow == 3){
					func3()
				}else if (currentRow == 4){
					func4()
				}else if (currentRow == 5){
					func5()
				}else if (currentRow == 6){
					func6()
				}
			}

		}
})

//greyLetters.push('w')


/*
document.addEventListener('keypress', function(e){
	if (guessedWord.length == 5){
		
		if (e.key == 'Enter'){
			enterPressed = true
			console.log('backup ' + backup)
			console.log('correct ' + correctWord)
			if (currentRow == 1){
				func1()
			}else if (currentRow == 2){
				func2()
			}else if (currentRow == 3){
				func3()
			}else if (currentRow == 4){
				func4()
			}else if (currentRow == 5){
				func5()
			}else if (currentRow == 6){
				func6()
			}
			if (guessedWord == correctWord){
				alert('You guessed correct!')
				
			}
			console.log('before: ' + backup)
			backup = correctWord
			console.log('after: ' + backup)
			currentRow += 1
			guessedWord = ''
		}
	}
})
*/
function colorKeys(){
	for (let i = 1; i <= 10; i++){
		let KS1ID = 'K' + i.toString()
		let KS1 = document.getElementById(KS1ID)
		if (KS1.style.backgroundColor != 'green'){
			if (greyLetters.includes(KS1.innerHTML.toString())){
				KS1.style.backgroundColor = 'grey'
			}else if (yellowLetters.includes(KS1.innerHTML.toString())){
				KS1.style.backgroundColor = 'yellow'
			}else if (greenLetters.includes(KS1.innerHTML.toString())){
				KS1.style.backgroundColor = 'green'
			}
		}
		
	}
	for (let o = 1; o <= 10; o++){
		let KS2ID = '2K' + o.toString()
		let KS2 = document.getElementById(KS2ID)
		if (KS2.style.backgroundColor != 'green'){
			if (greyLetters.includes(KS2.innerHTML.toString())){
				KS2.style.backgroundColor = 'grey'
			}else if (yellowLetters.includes(KS2.innerHTML.toString())){
				KS2.style.backgroundColor = 'yellow'
			}else if (greenLetters.includes(KS2.innerHTML.toString())){
				KS2.style.backgroundColor = 'green'
			}
		}
	}
	for (let p = 1; p <= 10; p++){
		let KS3ID = '3K' + p.toString()
		let KS3 = document.getElementById(KS3ID)
		if (KS3.style.backgroundColor != 'green'){
			if (greyLetters.includes(KS3.innerHTML.toString())){
				KS3.style.backgroundColor = 'grey'
			}else if (yellowLetters.includes(KS3.innerHTML.toString())){
				KS3.style.backgroundColor = 'yellow'
			}else if (greenLetters.includes(KS3.innerHTML.toString())){
				KS3.style.backgroundColor = 'green'
			}
		}
	}
	
	
	 

	
	
}


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
			if (guessedWord.length < 5){
				guessedWord += keySet1.innerHTML.toString()
				if (currentRow == 1){
					func1()	
				}else if (currentRow == 2){
					func2()
				}else if (currentRow == 3){
					func3()
				}else if (currentRow == 4){
					func4()
				}else if (currentRow == 5){
					func5()
				}else if (currentRow == 6){
					func6()
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
			if (guessedWord.length < 5){
				guessedWord += keySet2.innerHTML.toString()
				if (currentRow == 1){
					func1()	
				}else if (currentRow == 2){
					func2()
				}else if (currentRow == 3){
					func3()
				}else if (currentRow == 4){
					func4()
				}else if (currentRow == 5){
					func5()
				}else if (currentRow == 6){
					func6()
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
			if (guessedWord.length < 5){
				guessedWord += keySet3.innerHTML.toString()
				if (currentRow == 1){
					func1()	
				}else if (currentRow == 2){
					func2()
				}else if (currentRow == 3){
					func3()
				}else if (currentRow == 4){
					func4()
				}else if (currentRow == 5){
					func5()
				}else if (currentRow == 6){
					func6()
				}
			}
		}
	});
	
}

let greenLoop = true
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
			if (greenLoop == true){
				if (backup.includes(guessedWord[t1 - 1]) == false){
					tile.style.backgroundColor = 'grey'
				}
				if (guessedWord[t1 - 1] == backup[t1 - 1]){
					backup = backup.replace(guessedWord[t1 - 1], ' ')
					tile.style.backgroundColor = 'green'
					
				}
			}
			
			if (t1 == 5 && greenLoop == true){
				greenLoop = false
				func1()
			}
			
			if (greenLoop == false){
				if (backup.includes(guessedWord[t1 - 1]) == true){
					backup = backup.replace(guessedWord[t1 - 1], ' ')
					console.log(t1 - 1)
					tile.style.backgroundColor = 'yellow'	
				}	
			}
			
			if (t1 == 5 && greenLoop == false){
				enterPressed = false
			}
			for (let l = 1; l <= 26; l++){
				if (tile.style.backgroundColor == 'grey'){
					if (tile.innerHTML == letters[l]){
						greyLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile.style.backgroundColor == 'yellow'){
					if (tile.innerHTML == letters[l]){
						yellowLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile.style.backgroundColor == 'green'){
					if (tile.innerHTML == letters[l]){
						greenLetters.push(letters[l])
						colorKeys()
					}
						
				}
				
				
			}
		}
	}		
}
let greenLoop2 = true
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
			if (greenLoop2 == true){
				if (backup.includes(guessedWord[t2 - 1]) == false){
					tile2.style.backgroundColor = 'grey'
				}
				if (guessedWord[t2 - 1] == backup[t2 - 1]){
					backup = backup.replace(guessedWord[t2 - 1], ' ')
					tile2.style.backgroundColor = 'green'
					
				}
			}
			
			if (t2 == 5 && greenLoop2 == true){
				greenLoop2 = false
				func2()
			}
			
			if (greenLoop2 == false){
				if (backup.includes(guessedWord[t2 - 1]) == true){
					backup = backup.replace(guessedWord[t2 - 1], ' ')
					tile2.style.backgroundColor = 'yellow'	
				}
			}
			
			if (t2 == 5 && greenLoop2 == false){
				enterPressed = false
			}
			for (let l = 1; l <= 26; l++){
				if (tile2.style.backgroundColor == 'grey'){
					if (tile2.innerHTML == letters[l]){
						greyLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile2.style.backgroundColor == 'yellow'){
					if (tile2.innerHTML == letters[l]){
						yellowLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile2.style.backgroundColor == 'green'){
					if (tile2.innerHTML == letters[l]){
						greenLetters.push(letters[l])
						colorKeys()
					}
						
				}
				
				
			}
		}
	}		
}

let greenLoop3 = true
function func3(){
	for (let t3 = 1; t3 <= 5; t3++){
		let tile3Id = 'R3T' + t3.toString()
		let tile3 = document.getElementById(tile3Id)
		tile3.innerHTML = guessedWord[t3 - 1] ?? ''
		tile3.style.display = 'inline-block'
		tile3.style.width = '70px'
		tile3.style.height = '80px'
		tile3.style.top = '160px'
		tile3.style.margin = '0px'
		tile3.style.padding = '0px'
		tile3.style.textAlign = 'center'
		tile3.style.lineHeight = '82px'
		tile3.style.fontSize = '42px'
		tile3.style.borderStyle = 'solid'
		tile3.style.borderWidth = '1px'
		tile3.style.boxSizing = 'border-box'
		tile3.style.float = 'left'
		if (enterPressed == true){
			if (greenLoop3 == true){
				if (backup.includes(guessedWord[t3 - 1]) == false){
					tile3.style.backgroundColor = 'grey'
				}	
				if (guessedWord[t3 - 1] == backup[t3 - 1]){
					backup = backup.replace(guessedWord[t3 - 1], ' ')
					tile3.style.backgroundColor = 'green'
					
				}
			}
			
			if (t3 == 5 && greenLoop3 == true){
				greenLoop3 = false
				func3()
			}
			
			if (greenLoop3 == false){
				if (backup.includes(guessedWord[t3 - 1]) == true){
					backup = backup.replace(guessedWord[t3 - 1], ' ')
					console.log(t3 - 1)
					tile3.style.backgroundColor = 'yellow'	
				}
			}
			
			if (t3 == 5 && greenLoop3 == false){
				enterPressed = false
			}
			for (let l = 1; l <= 26; l++){
				if (tile3.style.backgroundColor == 'grey'){
					if (tile3.innerHTML == letters[l]){
						greyLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile3.style.backgroundColor == 'yellow'){
					if (tile3.innerHTML == letters[l]){
						yellowLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile3.style.backgroundColor == 'green'){
					if (tile3.innerHTML == letters[l]){
						greenLetters.push(letters[l])
						colorKeys()
					}
						
				}
				
				
			}
		}
	}		
}

let greenLoop4 = true
function func4(){
	for (let t4 = 1; t4 <= 5; t4++){
		let tile4Id = 'R4T' + t4.toString()
		let tile4 = document.getElementById(tile4Id)
		tile4.innerHTML = guessedWord[t4 - 1] ?? ''
		tile4.style.display = 'inline-block'
		tile4.style.width = '70px'
		tile4.style.height = '80px'
		tile4.style.top = '240px'
		tile4.style.margin = '0px'
		tile4.style.padding = '0px'
		tile4.style.textAlign = 'center'
		tile4.style.lineHeight = '82px'
		tile4.style.fontSize = '42px'
		tile4.style.borderStyle = 'solid'
		tile4.style.borderWidth = '1px'
		tile4.style.boxSizing = 'border-box'
		tile4.style.float = 'left'
		if (enterPressed == true){
			if (greenLoop4 == true){
				if (backup.includes(guessedWord[t4 - 1]) == false){
					tile4.style.backgroundColor = 'grey'
				}
				if (guessedWord[t4 - 1] == backup[t4 - 1]){
					backup = backup.replace(guessedWord[t4 - 1], ' ')
					tile4.style.backgroundColor = 'green'
					
				}
			}
			
			if (t4 == 5 && greenLoop4 == true){
				greenLoop4 = false
				func4()
			}
			
			if (greenLoop4 == false){
				if (backup.includes(guessedWord[t4 - 1]) == true){
					backup = backup.replace(guessedWord[t4 - 1], ' ')
					console.log(t4 - 1)
					tile4.style.backgroundColor = 'yellow'	
				}	
			}
			
			if (t4 == 5 && greenLoop4 == false){
				enterPressed = false
			}
			for (let l = 1; l <= 26; l++){
				if (tile4.style.backgroundColor == 'grey'){
					if (tile4.innerHTML == letters[l]){
						greyLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile4.style.backgroundColor == 'yellow'){
					if (tile4.innerHTML == letters[l]){
						yellowLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile4.style.backgroundColor == 'green'){
					if (tile4.innerHTML == letters[l]){
						greenLetters.push(letters[l])
						colorKeys()
					}
						
				}
				
				
			}
		}
	}		
}


let greenLoop5 = true

function func5(){
	for (let t5 = 1; t5 <= 5; t5++){
		let tile5Id = 'R5T' + t5.toString()
		let tile5 = document.getElementById(tile5Id)
		tile5.innerHTML = guessedWord[t5 - 1] ?? ''
		tile5.style.display = 'inline-block'
		tile5.style.width = '70px'
		tile5.style.height = '80px'
		tile5.style.top = '320px'
		tile5.style.margin = '0px'
		tile5.style.padding = '0px'
		tile5.style.textAlign = 'center'
		tile5.style.lineHeight = '82px'
		tile5.style.fontSize = '42px'
		tile5.style.borderStyle = 'solid'
		tile5.style.borderWidth = '1px'
		tile5.style.boxSizing = 'border-box'
		tile5.style.float = 'left'
		if (enterPressed == true){
			if (greenLoop5 == true){
				if (backup.includes(guessedWord[t5 - 1]) == false){
					tile5.style.backgroundColor = 'grey'
				}
				
				if (guessedWord[t5 - 1] == backup[t5 - 1]){
					backup = backup.replace(guessedWord[t5 - 1], ' ')
					tile5.style.backgroundColor = 'green'
					
				}
			}
			
			if (t5 == 5 && greenLoop5 == true){
				greenLoop5 = false
				func5()
			}
			
			if (greenLoop5 == false){
				if (backup.includes(guessedWord[t5 - 1]) == true){
					backup = backup.replace(guessedWord[t5 - 1], ' ')
					console.log(t5 - 1)
					tile5.style.backgroundColor = 'yellow'	
				}	
			}
			
			if (t5 == 5 && greenLoop5 == false){
				enterPressed = false
			}
			for (let l = 1; l <= 26; l++){
				if (tile5.style.backgroundColor == 'grey'){
					if (tile5.innerHTML == letters[l]){
						greyLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile5.style.backgroundColor == 'yellow'){
					if (tile5.innerHTML == letters[l]){
						yellowLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile5.style.backgroundColor == 'green'){
					if (tile5.innerHTML == letters[l]){
						greenLetters.push(letters[l])
						colorKeys()
					}
						
				}
				
				
			}
		}
	}		
}

let greenLoop6 = true
function func6(){
	for (let t6 = 1; t6 <= 5; t6++){
		let tile6Id = 'R6T' + t6.toString()
		let tile6 = document.getElementById(tile6Id)
		tile6.style.display = 'inline-block'
		tile6.style.width = '70px'
		tile6.style.height = '80px'
		tile6.style.top = '400px'
		tile6.style.margin = '0px'
		tile6.style.padding = '0px'
		tile6.style.textAlign = 'center'
		tile6.style.lineHeight = '82px'
		tile6.style.fontSize = '42px'
		tile6.style.borderStyle = 'solid'
		tile6.style.borderWidth = '1px'
		tile6.style.boxSizing = 'border-box'
		tile6.style.float = 'left'
		if (enterPressed == true){
			if (backup.includes(guessedWord[t6 - 1]) == false){
					tile6.style.backgroundColor = 'grey'
				}
			if (greenLoop6 == true){
				if (guessedWord[t6 - 1] == backup[t6 - 1]){
					backup = backup.replace(guessedWord[t6 - 1], ' ')
					tile6.style.backgroundColor = 'green'
					
				}
			}
			
			if (t6 == 5 && greenLoop6 == true){
				greenLoop6 = false
				func6()
			}
			
			if (greenLoop6 == false){
				if (backup.includes(guessedWord[t6 - 1]) == true){
					backup = backup.replace(guessedWord[t6 - 1], ' ')
					console.log(t6 - 1)
					tile6.style.backgroundColor = 'yellow'	
				}
			}
			
			if (t6 == 5 && greenLoop6 == false){
				enterPressed = false
			}
			for (let l = 1; l <= 26; l++){
				if (tile6.style.backgroundColor == 'grey'){
					if (tile6.innerHTML == letters[l]){
						greyLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile6.style.backgroundColor == 'yellow'){
					if (tile6.innerHTML == letters[l]){
						yellowLetters.push(letters[l])
						colorKeys()
					}
						
				}else if (tile6.style.backgroundColor == 'green'){
					if (tile6.innerHTML == letters[l]){
						greenLetters.push(letters[l])
						colorKeys()
					}
						
				}
				
				
			}
		}
	}		
}






func1()
func2()
func3()
func4()
func5()
func6()






