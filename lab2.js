function initFunc()
{
	var canvas = document.getElementById("myCanvas");

	if( canvas.getContext){
		var ctx = canvas.getContext("2d");
        var x=10;
        var y=110;
        
        ctx.font = "50px Arial";
        ctx.fillstyle = "#ff671f";
        ctx.fillText("Jai hind",x+180 , y-50)
        ctx.fill();

        ctx.fillRect(x+175, y-40, 185, 4,);

		ctx.fillRect(x+90, y+180, 10, 400,);

        ctx.fillStyle = "#ff671f"
        ctx.fillRect(x+90 , y ,390 ,60)
        ctx.fillStyle = "#ff671f"
        ctx.strokeRect(x+90 , y ,390 ,60)
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(x+90 , y+60 ,390 ,60)
        ctx.fillStyle = "#ffffff"
        ctx.strokeRect(x+90 , y+60 ,390 ,60)
        ctx.fillStyle = "#046A38"
        ctx.fillRect(x+90 , y+120 ,390 ,60)
        ctx.fillStyle = "#046A38"
        ctx.strokeRect(x+90 , y+120 ,390 ,60)
        
        ctx.beginPath();
        ctx.arc(x+280,y+90,25,0, 2*Math.PI);
        ctx.lineWidth=5;
        ctx.strokeStyle="#06038d";
        ctx.stroke();

        const img = new Image();
        img.src = "istockphoto-1222764397-612x612.jpg";
        img.onload = () => { 
        const pattern = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pattern;
        ctx.fillRect(x+50, y+580, 90, 50);
        
        ctx.fillStyle = pattern;
        ctx.fillRect(x+25, y+630, 140, 50);
	}
}
}