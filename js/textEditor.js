var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");


var file = document.getElementById("yourFile");
var reader = new FileReader();

reader.onload = function(e)
{
	var text = reader.result;
}

reader.readAsText(file);