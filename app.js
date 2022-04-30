const game = () => {
	let pScore = 0;
	let cScore = 0;
	//initialize kie h score ko 0

	// 3 var for  intro button click introscreen change aur match ko le aane k
	// is sab ko ek startgame m daal denge
	const startGame = () => {
		const playbtn = document.querySelector('.play-btn');
		const introscr = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playbtn.addEventListener('click', () => {
			introscr.classList.add('fadeOut');
			//introscr nko fade kie
			match.classList.add('fadeIn');
			// match screen ko add kie
		});
	};
	//update score ka function
	//plescore k p ko bhi access krenge nhi to poora content change ho jaega
	const updateScore = () => {
		let plrScore = document.querySelector('.player-score p');
		let cmpScore = document.querySelector('.comp-score p');
		plrScore.innerText = pScore;
		cmpScore.innerText = cScore;
	};
	// play game function
	const playGame = () => {
		// 3 variable 1 sare btn ko handle krega ek player hand image aur ek comp img change krega
		const options = document.querySelectorAll('.options button');
		const pHand = document.querySelector('.plr-hand');
		const cHand = document.querySelector('.comp-hand');
		const hands = document.querySelectorAll('.hand img');
		//sare image hands ko select kr lie
		//har ek hand k lie ek function chalaenge jo animentionend hone p animation ko '' set krega
		hands.forEach((hand) => {
			hand.addEventListener('animationend', function () {
				this.style.animation = '';
				//this use kie h to arrow nhi use krenge
			});
		});
		// computer option using random no. generator;
		const compOption = ['rock', 'paper', 'scissors'];

		//options k elements ko ek ek krke access krenge forEach s
		options.forEach((option) => {
			option.addEventListener('click', function () {
				// console.log(this)
				//yaha p function use kie h na ki arrow kyonki this nhi use kr paenge refrence krne k lie options ko
				//line 36-40 computer k lie random option generate kr rha h
				const compNum = Math.floor(Math.random() * 3);
				// console.log(compNum);
				const compChoice = compOption[compNum];
				// console.log(compChoice);
				//compChoice computer choice store krega
				// console.log(pHand);
				// console.log(this.innerText);
				//this.innrText player choice store krega

				// //yaha p copare hand function call krenge
				// compareHand(this.innerText, compChoice);
				// // updating image
				// pHand.src = `./asset/${this.innerText}.jpg`;
				// cHand.src = `./asset/${compChoice}.jpg`;
				//upr ke teen content hi 2 sec k baad honge to setTimeout m upr k teen daal denge
				//adding image animations
				setTimeout(() => {
					compareHand(this.innerText, compChoice);
					pHand.src = `./asset/${this.innerText}.png`;
					cHand.src = `./asset/${compChoice}.png`;
				}, 2000);
				pHand.style.animation = 'shakePlayer 2s ease';
				cHand.style.animation = 'shakeComp 2s ease';
			});
		});

		console.log(options);
		console.log(pHand);
		console.log(cHand);
	};
	//compare hand function
	const compareHand = (pChoice, cChoice) => {
		const winner = document.querySelector('.winner');
		//euality k lie check krenge
		if (pChoice === cChoice) {
			winner.innerText = 'Its a tie';
			return;
		}
		//agr rock aaya to
		if (pChoice === 'rock') {
			if (cChoice === 'paper') {
				winner.innerText = 'Computer wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.innerText = 'Player wins';
				pScore++;
				updateScore();
				return;
			}
		}
		//check for paper
		if (pChoice === 'paper') {
			if (cChoice === 'scissors') {
				winner.innerText = 'Computer wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.innerText = 'Player wins';
				pScore++;
				updateScore();
				return;
			}
		}
		//check for scissors
		if (pChoice === 'scissors') {
			if (cChoice === 'rock') {
				winner.innerText = 'Computer wins';
				cScore++;
				updateScore();
				return;
			} else {
				winner.innerText = 'Player wins';
				pScore++;
				updateScore();
				return;
			}
		}
	};
	//call start function
	startGame();
	playGame();
};

game();
