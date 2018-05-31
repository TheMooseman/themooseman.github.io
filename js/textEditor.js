var canvas = document.getElementById("Canvas");
var c = canvas.getContext("2d");

c.font = "30px Comic Sans MS";
c.fillStyle = "red";
c.textAlign = "center";

var file = document.getElementById("yourFile");
var reader = new FileReader();
var txt = "";


function checkAndRenderText()
{
	if ('files' in file)
	{
		console.log("there is a file");
		if(file.files.length == 0)
		{
			txt = "select file";
		}
		else
		{
			textInFile = reader.readAsText(file);
			txt = textInFile;
		}
	}
}

if(file != null)
{
	console.log("file added");
	textInFile = reader.readAsText(file);
	txt = textInFile;
}