

export function inputTemplate(item) {
	return `
		<label for="${item.id}">${item.icon} ${item.label}</label>
		<input class="input-box" type="${item.type}" id="${item.id}"></input>
	`
};

// export function inputTemplate(item) {
// 	return `
// 	<label for="${item.id}">${item.label}</label>
// 	<input class="input-box" type="${item.type}" id="${item.id}">`
// };





// export function selectTemplate({id, label, options}) {


// var optionTemplates = options.map(function({label, value}) {
// 	return `<option value="${value}">${label}</option>`
// });

// var optionsTemplateString = optionTemplates.join('');

// return
// `
// <label for="${id}">"${label}"</label>
// <select class="input-box" id="${id}">
// ${optionsTemplateString}
// </select>
// `
// };

export function selectTemplate(item){
	var one = item.options.map(function(option){
		return `<option value="${option.value}">${option.label}</option>`

		one = one.join("")
	})
		return `
				<label for="${item.id}">${item.icon} ${item.label}</label>
				<select id="${item.id}"">
					${one}
				</select>
				`
};





// export function textAreaTemplate({id, label}) {
// 	return

// `
// <label for="${id}">${label}</label>
// <textarea class="input-box" id="${id}"></textarea>
// `
// };


export function textAreaTemplate(item) {
	return `
	<label for="${item.id}">${item.icon} ${item.label}</label>
	<textArea class="input-box" id="${item.id}"></textArea>
	`
};