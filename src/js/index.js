// Javascript Entry Point

import items from './data';

import { inputTemplate, selectTemplate, textAreaTemplate } from './templates';

import $ from 'jquery';

var $middle = $('.middle');

// var itemTypeToTemplate = {
// 	"text" : input,
// 	"email" : input,
// 	"tel" : input,
// 	"select" : select,
// 	"textarea" : textArea
// };

// items.forEach(function(item) {
// 	var template = itemTypeToTemplate[item.type];
// 	var toThePage = template(item);
// 	$fromJS.append(toThePage);
// });




items.forEach(function(item) {
	var template;
	if (item.type === "text" || item.type === "email" || item.type === "tel") {
		template = inputTemplate;
	} else if (item.type === "select") {
		template = selectTemplate;
	} else if (item.type === "textarea") {
		template = textAreaTemplate;
	}
	console.log(template);
	var toThePage = template(item);
	// $middle.append(toThePage);
});