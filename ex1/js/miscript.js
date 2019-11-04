//VARIABLE 1

function lista()
{
	var moto=["kawasaki","yamaha","honda","ducati","ktm","harley","MVaugusta"];
	var i;
	
	document.write("<ul>");
	for(i=0;i<moto.length;i++){
		
		document.write("<li>"+moto[i]+"</li>");
	}
	document.write("</ul>");
}

//VARIABLE 2

function lista2()
{
	var moto2=["morini","piaggio","malagutti","califfo","guzzi"];
	var i;
	var pippo;
	
	pippo="<ul>";
	
	for (i=0;i<moto2.length;i++)
	{
		pippo+="<li>"+moto2[i]+"</li>";
	}
	pippo+="</ul>";
	document.write(pippo);
}