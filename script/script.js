//Function to get elements

elem = (x) =>{
	return document.querySelector(x);
}

var styleElem = document.head.appendChild(document.createElement("style"));

var info_part = elem(".info_part");

//All the functions for effects changing....It is a bit tricky but did the work VOILA :)
//If someone could simplify for me here using either for loop for this functions I will appreciate Thanks 

nextChange_1 = () =>{
	styleElem.innerHTML = `
			.menu_part{
				flex-basis: 60%;
				background: rgba(0,0,0,0.4) url("images/desktop-image-hero-2.jpg");
				background-repeat: no-repeat;
				background-size: 100% 100%;
				background-blend-mode: lighten;
				padding: 3rem;
				display: flex;
				flex-direction: row;

			}

			@media (max-width: 375px){
					.menu_part{
					flex-basis: 60%;
					background: rgba(0,0,0,0.4) url("images/mobile-image-hero-2.jpg");
					background-repeat: no-repeat;
					background-size: 100% 100%;
					background-blend-mode: lighten;
					padding: 3rem;
					display: flex;
					flex-direction: row-reverse;

				}
			}

				`;
	info_part.innerHTML = `
			<div class="info">
          		<h1>We are available all across the globe</h1>
          		<p> With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.</p>
          		<a href="#">Shop now <img src="images/icon-arrow.svg" alt="shop now button"></a>
        	</div>
        	<div class="buttons">
        		<button class="btn" onclick="prevChange_1()"><img src="images/icon-angle-left.svg" alt="left arrow button"></button>
        		<button class="btn" onclick="nextChange_2()"><img src="images/icon-angle-right.svg" alt="right arrow button"></button>
        	</div>
				`;
}

nextChange_2 = () =>{
	styleElem.innerHTML = `
			.menu_part{
				flex-basis: 60%;
				background: rgba(0,0,0,0.4) url("images/desktop-image-hero-3.jpg");
				background-repeat: no-repeat;
				background-size: 100% 100%;
				background-blend-mode: lighten;
				padding: 3rem;
				display: flex;
				flex-direction: row;

			}
			@media (max-width: 375px){
					.menu_part{
					flex-basis: 60%;
					background: rgba(0,0,0,0.4) url("images/mobile-image-hero-3.jpg");
					background-repeat: no-repeat;
					background-size: 100% 100%;
					background-blend-mode: lighten;
					padding: 3rem;
					display: flex;
					flex-direction: row-reverse;

				}
			}


				`;
	info_part.innerHTML = `
			<div class="info">
          		<h1>Manufactured with the best materials</h1>
          		<p> Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.</p>
          		<a href="#">Shop now <img src="images/icon-arrow.svg" alt="shop now button"></a>
        	</div>
        	<div class="buttons">
        		<button class="btn" onclick="prevChange_2()"><img src="images/icon-angle-left.svg" alt="left arrow button"></button>
        		<button class="btn"><img src="images/icon-angle-right.svg" alt="right arrow button"></button>
        	</div>
				`;
}

prevChange_1 = () =>{
	styleElem.innerHTML = `
			.menu_part{
				flex-basis: 60%;
				background: rgba(0,0,0,0.4) url("images/desktop-image-hero-1.jpg");
				background-repeat: no-repeat;
				background-size: 100% 100%;
				background-blend-mode: lighten;
				padding: 3rem;
				display: flex;
				flex-direction: row;

			}
			@media (max-width: 375px){
					.menu_part{
					flex-basis: 60%;
					background: rgba(0,0,0,0.4) url("images/mobile-image-hero-1.jpg");
					background-repeat: no-repeat;
					background-size: 100% 100%;
					background-blend-mode: lighten;
					padding: 3rem;
					display: flex;
					flex-direction: row-reverse;

				}
			}

				`;
	info_part.innerHTML = `
			<div class="info">
          		<h1>Discover innovative ways to decorate</h1>
          		<p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
          		<a href="#">Shop now <img src="images/icon-arrow.svg" alt="shop now button"></a>
        	</div>
        	<div class="buttons">
        		<button class="btn"><img src="images/icon-angle-left.svg" alt="left arrow button"></button>
        		<button class="btn" onclick="nextChange_1()"><img src="images/icon-angle-right.svg" alt="right arrow button"></button>
        	</div>
				`;
}

prevChange_2 = () =>{
	styleElem.innerHTML = `
			.menu_part{
				flex-basis: 60%;
				background: rgba(0,0,0,0.4) url("images/desktop-image-hero-2.jpg");
				background-repeat: no-repeat;
				background-size: 100% 100%;
				background-blend-mode: lighten;
				padding: 3rem;
				display: flex;
				flex-direction: row;

			}
			@media (max-width: 375px){
					.menu_part{
					flex-basis: 60%;
					background: rgba(0,0,0,0.4) url("images/mobile-image-hero-2.jpg");
					background-repeat: no-repeat;
					background-size: 100% 100%;
					background-blend-mode: lighten;
					padding: 3rem;
					display: flex;
					flex-direction: row-reverse;

				}
			}

				`;
	info_part.innerHTML = `
			<div class="info">
          		<h1>We are available all across the globe</h1>
          		<p> With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.</p>
          		<a href="#">Shop now <img src="images/icon-arrow.svg" alt="shop now button"></a>
        	</div>
        	<div class="buttons">
        		<button class="btn" onclick="prevChange_1()"><img src="images/icon-angle-left.svg" alt="left arrow button"></button>
        		<button class="btn" onclick="nextChange_2()"><img src="images/icon-angle-right.svg" alt="right arrow button"></button>
        	</div>
				`;
}


//For menu btn
var menu_btn = elem(".menu_btn");

openMenu = () =>{
	menu_btn.innerHTML = `<img src="images/icon-close.svg" alt="menu close button" onclick="closeMenu()">`;
	styleElem.innerHTML = `
			@media(max-width: 375px){
				#menu{
					display: block;
					background-color: var(--White);
					color: var(--Black);
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 5rem;
					text-align: center;
					padding-left: 1.8rem;
					box-shadow: 100px 0px 100px 1000px rgb(0,0,0,0.7);
					z-index: 100!important;
				}
			}


				`;
}

closeMenu = () =>{
	menu_btn.innerHTML = `<img src="images/icon-hamburger.svg" alt="menu open button" onclick="openMenu()">`;
	styleElem.innerHTML = `
			@media(max-width: 375px){
				#menu{
					display: none;
					background-color: var(--White);
					color: var(--Black);
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 5rem;
					text-align: center;
					padding-left: 1.8rem;
					box-shadow: 100px 0px 100px 1000px rgb(0,0,0,0.7);
					z-index: 100!important;
				}
			}


				`;
}