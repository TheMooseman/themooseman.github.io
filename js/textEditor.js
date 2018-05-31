var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

c.font = "30px Comic Sans MS";
c.fillStyle = "red";
c.textAlign = "center";

var file = document.getElementById("yourFile");
var reader = new FileReader();

function onChange(event)
{
	reader.onload = function(e)
	{
		var text = reader.result;
		c.fillText(text, canvas.width/2, canvas.height/2);
	}
	reader.readAsText(file);
}