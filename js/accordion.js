"use strict";

class Accordion {
	
	//PROPERTIES
	constructor(options) {
		this.fragment = document.createDocumentFragment();						//Instantiating a document fragment
		this.container = document.getElementById(options.container);
		this.main_accordion = document.createElement('section');
		this.accordion_counter = 1;	//Setting it to 1 to skip the main accordion
		
		//Appending text of the main panel
		this.main_accordion_title = document.createElement('p');
		
		this.main_accordion.appendChild(this.main_accordion_title);
		this.main_accordion_title.innerHTML = options.mainTitle;
		this.main_accordion_title.className = 'main_text';
		//Adding the ID for the main panel
		this.main_accordion.setAttribute('id', 'panel_0');
		this.main_accordion.className = 'main_accordion';	
		//Appending the main panel to the container
		this.container.appendChild(this.main_accordion);

		this.panels = options.panels;

		//Initializer
		this.init();
	}
	

	
	//METHODS
	createPanelsBlock() {
		
		for (let option in this.panels) {

			//Generating the main accordion div
			this.accordion_block = document.createElement('div');
			this.accordion_block.className = 'accordion';
			this.accordion_block.setAttribute('data-counter', this.accordion_counter);
			this.accordion_block.className = 'accordion';
			this.accordion_block.setAttribute('data-counter', this.accordion_counter);



			//Generating the left and right columns inside the main accordion block
			this.left_column = document.createElement('div');
			this.right_column = document.createElement('div');
			this.left_column.className = 'column left';
			this.right_column.className = 'column right';
			this.accordion_block.appendChild(this.left_column);
			this.accordion_block.appendChild(this.right_column);


			//Generating the accordion title paragraph
			this.accordion_title = document.createElement('p');
			this.accordion_title.innerHTML = this.panels[option].title;
			this.accordion_title.className = 'accordion_title';
			this.left_column.appendChild(this.accordion_title);


			//Creating the icon Element
			this.accordion_icon = document.createElement('i');


			//Generating the accordion Subtitle Paragraph (Only if not null or empty)
			if(this.panels[option].subtitle !== '' && this.panels[option].subtitle !== null){
				console.log(this.panels[option].title);
				this.accordion_subtitle = document.createElement('p');
				this.accordion_subtitle.innerHTML = this.panels[option].subtitle;
				this.accordion_subtitle.className = 'accordion_subtitle';
				this.accordion_icon.className = 'material-icons md-26 with_subtitle';
				this.left_column.appendChild(this.accordion_subtitle);
			}else{
				console.log("else: " + this.panels[option].title);
				this.accordion_icon.className = 'material-icons md-26 no_subtitle';
			}


			this.content = document.createElement('div');

			
			//Setting the inner HTML for panels
			this.accordion_icon.innerHTML = 'expand_more';
			this.content.innerHTML = this.panels[option].content;
			
			//Adding classes and IDs to the panels elements

			this.content.className = 'content';

			
			
				
			//Appending the created elements and building the actual panel block

			this.right_column.appendChild(this.accordion_icon);
			this.accordion_block.appendChild(this.content);
			//this.container.appendChild(this.accordion_block);

			//Adding Event Listener
			this.accordion_block.addEventListener('click', this.open);

			//Appending to the fragment 
			this.fragment.appendChild(this.accordion_block);
			
			//Adding accordion counter
			this.accordion_counter++
			
		}
	};
	
	
	open(){
		let accordions = this.parentNode.childNodes;
		let len = accordions.length;
		//console.log(accordions);
		
		for(let i = 0; i < len; i++) {	
		//console.log(i, parseInt(this.getAttribute('data-counter')), this);
			if (accordions[i].classList.contains('open') && i !== parseInt(this.getAttribute('data-counter'))){
				console.log("Ci sono", i);
				accordions[i].classList.remove('open');
			}
				
		}

		this.classList.toggle('open');
		
	}
	

	// Initializer
	init() {
		this.createPanelsBlock();
		this.container.appendChild(this.fragment);
	}
	

}