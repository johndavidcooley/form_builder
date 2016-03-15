// Javascript Entry Point

import $ from 'jquery';

import items from './data';

import { input, select, textArea } from './templates';

var $fromJS = $('.from-js');

// var itemTypeToTemplate = {
// 	"text" : input,
// 	"email" : input,
// 	"tel" : input,
// 	"select" : select,
// 	"textArea" : textArea
// };

// items.forEach(function(item) {
// 	var template = itemTypeToTemplate[item.type];
// 	var toThePage = template(item);
// 	$fromJS.append(toThePage);
// });


items.forEach(function(item) {
	var template;
	if (item.type === "text" || item.type === "email" || item.type || "tel") {
		template = input;
	} else if (item.type === "select") {
		template = select;
	} else if (item.type === "textArea") {
		template = textArea;
	}
	var toThePage = template(item);
	$fromJS.append(toThePage);
});

