/*
	Природа наделила нас двумя глазами, двумя ушами, но лишь одним языком, дабы мы смотрели и слушали больше, чем говорили.
*/

const PLAY = document.querySelector('#play');
const RESET = document.querySelector('#reset');
const FAQ = document.querySelector('#faq');

const TIME = document.querySelector('#time');

const EYE_LEFT = document.querySelector('#eye-left');
const EYE_RIGHT = document.querySelector('#eye-right');

const SPEED = document.querySelector('#speed');
const DISTANCE = document.querySelector('#distance');

var speed_value = 100 - SPEED.value
var distance_value = 100 - DISTANCE.value

var leftEyeTimeout;
var rightEyeTimeout;

/*
	— Больно глазам.
	— Ты впервые ими смотришь.
*/

function getRangeValue(rangeElement, valueVariable){
	// Обновляем значения скорости и дистанции.
	switch(valueVariable){
		case 'speed':
			speed_value = 100 - rangeElement.value;
		case 'distance':
			distance_value = 100 - rangeElement.value;
	}

	// Если тренировка запущена, перезапускаем её.
	if(leftEyeTimeout && leftEyeTimeout){
		clearInterval(leftEyeTimeout)
		clearInterval(rightEyeTimeout)
		start()
	}
}

SPEED.addEventListener('input', () => {
	getRangeValue(SPEED, 'speed')
})
DISTANCE.addEventListener('input', () => {
	getRangeValue(DISTANCE, 'distance')
})

/*
	Зрение — это не то, что видят твои глаза, — это образ, который создает твой мозг. 
	Наш здравый смысл защищает наше зрение. 
	Обычно люди не могут видеть то, что противоречит логике...
*/

function start(){
	document.body.classList.toggle('working');

	leftEyeTimeout = setInterval(() => {
		EYE_LEFT.style.marginLeft = parseInt(window.getComputedStyle(EYE_LEFT).marginLeft) - 3 + 'px'
		console.log(speed_value)
	}, speed_value * 10)

	rightEyeTimeout = setInterval(() => {
		EYE_RIGHT.style.marginLeft = parseInt(window.getComputedStyle(EYE_RIGHT).marginLeft) + 3 + 'px'
		console.log(speed_value)
	}, speed_value * 10)
}

PLAY.addEventListener('click', () => {
	start()
})

/*
	Когда закрываешь глаза, смотришь в себя — в темноту.
*/


/*
	— Я жду с минуты на минуту гонца. Взгляни на дорогу, кого ты там видишь?
	— Никого.
	— Мне бы такое зрение — увидеть никого, да еще на таком расстоянии.
*/



/*
	Я чувствую запах дождя до того, как упадут первые капли, но я их не вижу. 
	Я чувствую, как солнце ласкает моё лицо, но я не вижу, как оно встает или садится. 
	Я так хочу видеть мир так, как его видят другие: видеть солнце, видеть дождь. 
	И музыку... 
	Музыка, наверное, очень красивая.
*/



/*
	Мир грёз нельзя увидеть глазами, его нужно почувствовать сердцем.
*/




/*
	Что из сотворенного завистливее глаза? Потому он плачет о всем, что видит. 
*/