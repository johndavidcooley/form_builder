// Javascript Entry Point

import $ from 'jquery';

import items from './data';

import { inputTemplate, selectTemplate, textAreaTemplate } from './templates';

var $middle = $('.middle');

// var itemTypeToTemplate = {
// 	"text" : inputTemplate,
// 	"email" : inputTemplate,
// 	"tel" : inputTemplate,
// 	"select" : selectTemplate,
// 	"textarea" : textAreaTemplate
// };

// items.forEach(function(item) {
// 	var template = itemTypeToTemplate[item.type];
// 	var toThePage = template(item);
// 	$fromJS.append(toThePage);
// });

console.log(inputTemplate(items[0]))


items.forEach(function(item) {
	var template;
	if (item.type === "text" || item.type === "email" || item.type === "tel") {
		template = inputTemplate;
	} else if (item.type === "select") {
		template = selectTemplate;
	} else if (item.type === "textarea") {
		template = textAreaTemplate;
	}
	// console.log(template);
	var toThePage = template(item);
	$middle.append(toThePage);
});