
class JS_Notificator {
	constructor() {
		this.init();
	}


	init(params={}) {
		this.area = document.createElement('div');
		this.area.setAttribute('class', 'js_notification_area');
		document.body.appendChild(this.area);
	}


	add(message, params={}) {
		let notif_container = this.crElement('js_notification_container');
		this.area.appendChild(notif_container);
		
		let notif_item = this.crElement('js_notification_item');
		notif_container.appendChild(notif_item);
		
		let notif_text = this.crElement('js_notification_text');
		notif_text.innerHTML = message;

		let notif_buttons = this.crElement('js_notification_buttons');
		notif_item.appendChild(notif_text);
		notif_item.appendChild(notif_buttons);
		
		notif_container.querySelector('.js_notification_item').style.transition = 'all 0s';
		notif_container.style.transition = 'all 0s';
		notif_container.style.height = 'fit-content';
		notif_container.setAttribute('js_notification_view', 'show');
		notif_container.setAttribute('js_notification_height', notif_container.clientHeight+10);
		notif_container.setAttribute('js_notification_view', '');
		notif_container.style.height = '0px';
		notif_container.querySelector('.js_notification_item').style.transition = '.5s';
		notif_container.style.transition = '.5s';
		
		let that = this;
		if(params.buttons === undefined) {
			let notif_button_close = this.crButton('ok', that, notif_container)
			notif_buttons.appendChild(notif_button_close);
		}
		else {
			for(let i = 0; i < params.buttons.length; i++) {
				let notif_button = this.crButton(params.buttons[i].value, that, notif_container)
				notif_buttons.appendChild(notif_button);
				notif_button.addEventListener('click', params.buttons[i].action);
			}
		}
		if(params.autohide !== undefined) {
			let that = this;
			window.setTimeout(function() {that.hide(notif_container)}, params.autohide);
		}
		this.show(notif_container);
	}


	crElement(class_name) {
		let new_element = document.createElement('div');
		new_element.setAttribute('class', class_name);
		return new_element;
	}


	crButton(button_name, that, notif_container) {
		let new_button = document.createElement('div');
		new_button.setAttribute('class', 'js_notification_button');
		new_button.innerHTML = button_name;
		new_button.addEventListener('click', function() {that.hide(notif_container)});
		return new_button;
	}


	show(container) {
		window.setTimeout(function() {
			container.setAttribute('js_notification_view', 'show');
			container.style.height = container.getAttribute('js_notification_height') + 'px';
		}, 0);
	}


	hide(container) {
		container.setAttribute('js_notification_view', '');
		container.style.transition = '.5s';
		container.style.height = 0;
		window.setTimeout(function() {container.remove()}, 500)
	}


}
