'use strict;'

Date.prototype.getMonthText = function() {
	var months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
	return months[this.getMonth()];
};

function nowDate() {
	var spanDate = document.querySelector('.phone-header__title-middle span');
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonthText();
	var yyyy = today.getFullYear();

	if (dd < 10) { dd = '0'+ dd };
	today = dd + ' ' + mm + ', ' + yyyy;
	spanDate.innerHTML = today;
};

function nowTime() {
	var spanTime = document.querySelector('.phone-header__middle span');
	var today = new Date();
	var hours = today.getHours();
	var mins = today.getMinutes();
	var mid = 'AM';

	if (mins <= 10) { mins = '0' + mins };
	if (hours >= 12) { mid = "PM" } else { mid = "AM" };
	if (hours <= 10) { hours = '0' + hours };
	today = hours + ':' + mins + ' ' + mid;
	spanTime.innerHTML = today;
};

var gamburger = document.querySelector('#gamburger');
gamburger.addEventListener("click", function() {
	this.classList.toggle('phone-header__title-left--active');
});

var addgoalInput = document.querySelector('#phone-todo__input');
var addgoalInputBtn = document.querySelector('#phone-todo__input-add');
var addgoalLabelBtn = document.querySelector('#phone-todo__btn');
addgoalLabelBtn.addEventListener("click", function() {
	addgoalInput.focus();
	addgoalInput.style.zIndex = '1';
	addgoalInputBtn.style.zIndex = '1';
});

var i = 0;
addgoalInputBtn.addEventListener("click", function() {
	addgoalInput.focus();
	var containerTodoItems = document.querySelector('.phone-todo__list');
	var addgoalInputText = addgoalInput.value
	var newTodoItem = document.createElement('li');
	var todoItem = '<input id="todo-item-'+ i +'" type="checkbox"><label for="todo-item-'+ i +'">'+ addgoalInputText +'</label><button class="todo-item-del-'+ i +'"></button>';
	newTodoItem.innerHTML = todoItem;
	containerTodoItems.insertBefore(newTodoItem, containerTodoItems.firstChild);
	i++;
});

var deleteGoalItem = document.querySelector('.phone-todo__list');
deleteGoalItem.addEventListener("click", function() {
	var target = event.target;
	var allItems = document.querySelectorAll('.phone-todo__list li');
	var btnsDel = document.querySelectorAll('.phone-todo__list li button'); 
	for (var i = 0; i <= allItems.length-1; i++) {
		if (target == btnsDel[i]) {
			allItems[i].style.transition = 'all 0.3s';
			allItems[i].style.transform = 'scale(0)';
			setTimeout(function() {
				target.parentNode.remove();
			}, 200);
		};
	};
});

nowTime();
nowDate();