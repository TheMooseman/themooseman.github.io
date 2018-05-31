var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

c.font = "30px Comic Sans MS";
c.fillStyle = "red";
c.textAlign = "center";

var text = 0;

var file = document.getElementById("yourFile");
var reader = new FileReader();

reader.onload = function(e)
{
	var text = reader.result;
}

reader.readAsText(file);

c.fillText(text, canvas.width/2, canvas.height/2);