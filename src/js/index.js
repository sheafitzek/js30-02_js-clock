const app = {
	onloadFunction() {
		const startApp = new Promise(()=> {
			app.setDate();
		});

		startApp
			.then(setInterval(app.setDate, 1000));

		setTimeout(app.setTransitions, 1000);
	},

	hours(time) {
		const hourHand = document.querySelector(`.hourHand`);
		const hours = time.getHours() <= 12
			? time.getHours()
			: time.getHours - 12;
		const hoursDegrees = ((hours / 12) * 360) + 90;

		hoursDegrees === 90
			? hourHand.style.transition = ``
			: hourHand.style.transition = `all 3600s`;

		hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
	},

	minutes(time) {
		const minuteHand = document.querySelector(`.minuteHand`);
		const minutes = time.getMinutes();
		const minutesDegrees = ((minutes / 60) * 360) + 90;

		minutesDegrees === 90
			? minuteHand.style.transition = ``
			: minuteHand.style.transition = `all 60s`;

		minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
	},

	seconds(time) {
		const secondHand = document.querySelector(`.secondHand`);
		const seconds = time.getSeconds();
		const secondsDegrees = ((seconds / 60) * 360) + 90;

		secondsDegrees === 90
			? secondHand.style.transition = ``
			: secondHand.style.transition = `all .1s`;

		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	},

	setDate() {
		const now = new Date();

		app.seconds(now);
		app.minutes(now);
		app.hours(now);
	},

	// setTransitions() {
	// 	const minuteHand = document.querySelector(`.minuteHand`);
	// 	const hourHand = document.querySelector(`.hourHand`);

	// 	minuteHand.style.transition = `all 60s`;
	// 	hourHand.style.transition = `all 3600s`;
	// },
};

window.onload = app.onloadFunction;
