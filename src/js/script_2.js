
var modalMainForm = document.getElementById('modal_form');
var modalNameInput = document.getElementById('modal_form_name');
var modalMailInput = document.getElementById('modal_form_mail');
var modalTelInput = document.getElementById('modal_form_tel');
var modalTextInput = document.getElementById('text_of_client');


modalNameInput.addEventListener('invalid', function (evt) {
	if (modalNameInput.validity.tooShort) {
		modalNameInput.setCustomValidity('Фамилия должна состоять минимум из 2-х символов');
		modalNameInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else if (modalNameInput.validity.tooLong) {
		modalNameInput.setCustomValidity('Фамилия не должна превышать 25-ть символов');
	} else if (modalNameInput.validity.valueMissing) {
		modalNameInput.setCustomValidity('Обязательное поле');
		modalNameInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else {
		modalNameInput.setAttribute('style', 'border-bottom: 3px solid #737373;');
		modalNameInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});

modalMailInput.addEventListener('invalid', function (evt) {
	if (modalMailInput.validity.tooShort) {
		modalMailInput.setCustomValidity('Email должен состоять минимум из 2-х символов');
		modalMailInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else if (modalMailInput.validity.tooLong) {
		modalMailInput.setCustomValidity('Email не должен превышать 25-ть символов');
	} else if (modalMailInput.validity.valueMissing) {
		modalMailInput.setCustomValidity('Обязательное поле');
		modalMailInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else {
		modalMailInput.setAttribute('style', 'border-bottom: 3px solid #737373;');
		modalMailInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});

modalTelInput.addEventListener('invalid', function (evt) {
	if (modalTelInput.validity.patternMismatch) {
		modalTelInput.setCustomValidity('Телефон должен состоять минимум из 5-14 цифр');
		modalTelInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else if (modalTelInput.validity.valueMissing) {
		modalTelInput.setCustomValidity('Обязательное поле');
		modalTelInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else {
		modalTelInput.setAttribute('style', 'border-bottom: 3px solid #737373;');
		modalTelInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});

modalTextInput.addEventListener('invalid', function (evt) {
	if (modalTextInput.validity.tooShort) {
		modalTextInput.setCustomValidity('Текст должен состоять минимум 10 символов');
		modalTextInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else if (modalTextInput.validity.valueMissing) {
		modalTextInput.setCustomValidity('Напишите мне свой план');
		modalTextInput.setAttribute('style', 'border-bottom: 3px solid red;');
	} else {
		modalTextInput.setAttribute('style', 'border-bottom: 3px solid #737373;');
		modalTextInput.setCustomValidity(''); //не забыть сбросить значение поля, если это значение стало корректно
	}
});