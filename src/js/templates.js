export function input(item) {

	`
	<div>
		<input class="input-box" type="text" placeholder="${item.label}">
	</div>
	`
};





export function select(item) {

var option = item.options['value'];

var optionHtml = option.map(function(opt) {
	return `<option value="${opt}"></option>`
})

optionHtml = optionHtml.join('');

	`
	<div>
		<select class="input-box" id="select-box">
			${item.label}
			${optionHtml}
		</select>
	</div>
		`

};





export function textArea(item) {

	`
	<div>
		<textarea class="input-box" id="text-box" placeholder="${item.label}"></textarea>
	</div>
	`
};