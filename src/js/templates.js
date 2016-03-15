

export function inputTemplate({id, label, type}) {
	// return "suck it";
	return
	`
		<label for="${id}">${label}</label>
		<input class="input-box" type="${type}" id="${id}"></input>
	`
};





export function selectTemplate({id, label, options}) {


var optionTemplates = options.map(function({label, value}) {
	return `<option value="${value}">${label}</option>`
});

var optionsTemplateString = optionTemplates.join('');

return
`
<label for="${id}">${label}</label>
<select class="input-box" id="${id}">
${optionsTemplateString}
</select>
`
};





export function textAreaTemplate({id, label}) {
	return

`
<label for="${id}">${label}</label>
<textarea class="input-box" id="${id}"></textarea>
`
};