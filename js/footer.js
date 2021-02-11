class Footer {
	constructor() {
		this.addEvents();
	}

	addEvents() {
		document.addEventListener('DOMContentLoaded', this.createFooterBox.bind(this));
	}

	createFooterBox() {
		let footerBox = document.createElement('footer');
		footerBox.classList.add('footer');

		document.body.appendChild(footerBox);

		this.displayFooter();
	}

	displayFooter() {
		this.footerBox = document.querySelector('.footer');
		const date = new Date;
		const year = date.getUTCFullYear()

		this.footerBox.innerHTML =
			`<div class="footer-content">
				<p>
					<i><img width="12px" src="https://s.w.org/images/core/emoji/13.0.1/svg/270f.svg" alt="✏" /></i>
					Developed with
					<i><img width="12px" src="https://s.w.org/images/core/emoji/13.0.1/svg/2764.svg" alt="❤" /></i>
					by
					<a href="https://gisehaag.com" target="_blank">GisehaaG</a>
					<i><img width="12px" src="https://s.w.org/images/core/emoji/13.0.1/svg/2b50.svg" alt="⭐" /></i>
					|
					<i> ${year} </i>
				</p>
			</div>`

		let footerStyle = document.createElement('link');
		footerStyle.rel = 'stylesheet';
		footerStyle.href = '../css/footer.css';
		document.head.appendChild(footerStyle);
	}
}

const footer = new Footer();