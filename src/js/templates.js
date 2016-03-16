

export function inputTemplate(item) {
	return `
		<input class="input-box" type="${item.type}" id="${item.id}" placeholder="${item.label}"></input>
	`
};
// <label for="${item.id}">${item.icon} ${item.label}</label>

// export function inputTemplate(item) {
// 	return
// `
// 	<label for="${item.id}">${item.label}</label>
// 	<input class="input-box" type="${item.type}" id="${item.id}">
// `
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
				<select class="input-box" id="${item.id}" placeholder="${item.label}">
				<option>${item.label}</option>
					${one}
				}
				</select>
				`
};
// <label for="${item.id}">${item.icon} ${item.label}</label>




// export function textAreaTemplate({id, label}) {
// 	return
// `
// <label for="${id}">${label}</label>
// <textarea class="input-box" id="${id}"></textarea>
// `
// };


export function textAreaTemplate(item) {
	return `
	
	<textArea class="input-box" id="${item.id}" placeholder="${item.label}"></textArea>
	`
};
// <label for="${item.id}">${item.icon} ${item.label}</label>


