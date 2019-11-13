function resetBars() {
	$(".progress-bar").css("width", "0");
	$(".progress-bar").html("0%");


}

function buttonPress(btn) {
	let val = parseInt( $(`div#${btn.target.id}`).html() );
	let addPct = 0;
	switch(btn.target.id) {
		case "group1": addPct = 1; break;
		case "group2": addPct = 3; break;
		case "group3": addPct = 7; break;
		default: addPct = 0;
	}
	val = addPct + val <= 100 ? addPct + val : 100 ;

	
	$(`div#${btn.target.id}`).css("width", val+"%");

	$(`div#${btn.target.id}`).html(val+"%");
}

function main() {
	$(".btn").click(buttonPress);	
	$("#reset").click(resetBars);
	resetBars();
}

$(document).ready(main);
