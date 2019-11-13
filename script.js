function resetBars() {
	$(".progress-bar").css("width", "0");
	$(".progress-bar").html("0%");


}

function buttonPress(btn) {
	let val = parseInt( $(".progress-bar").html() );
	let addPct = 0;
	switch(btn.target.id) {
		case "button1": addPct = 1; break;
		case "button2": addPct = 3; break;
		case "button3": addPct = 7; break;
		default: addPct = 0;
	}
	val = addPct + val <= 100 ? addPct + val : 100 ;

	
	$(".progress-bar").css("width", val+"%");

	$(".progress-bar").html(val+"%");
}

function main() {
	$(".btn").click(buttonPress);	
	$("#reset").click(resetBars);
	resetBars();
}

$(document).ready(main);
