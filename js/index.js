const app = {
	hours(time) {
		const hourHand = document.querySelector(`.hourHand`);
		let hours = time.getHours() <= 12
			? time.getHours()
			: time.getHours() - 12;
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();

		hours += (minutes / 60) + (seconds / 3600);

		const hoursDegrees = ((hours / 12) * 360) + 90;

		hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

		hoursDegrees === 90
			? hourHand.style.transition = ``
			: hourHand.style.transition = `all 1s linear`;
	},

	minutes(time) {
		const minuteHand = document.querySelector(`.minuteHand`);
		let minutes = time.getMinutes();
		const seconds = time.getSeconds();

		minutes += seconds / 60;

		const minutesDegrees = ((minutes / 60) * 360) + 90;

		minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

		minutesDegrees === 90
			? minuteHand.style.transition = ``
			: minuteHand.style.transition = `all 1s linear`;
	},

	onloadFunction() {
		setInterval(app.setDate, 1000);
	},

	seconds(time) {
		const secondHand = document.querySelector(`.secondHand`);
		const seconds = time.getSeconds();
		const secondsDegrees = ((seconds / 60) * 360) + 90;

		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

		secondsDegrees === 90
			? secondHand.style.transition = ``
			: secondHand.style.transition = `all .1s cubic-bezier(0.26, 2.06, 1, 1)`;
	},

	setDate() {
		const now = new Date();

		app.seconds(now);
		app.minutes(now);
		app.hours(now);
	},
};

window.onload = app.onloadFunction;
