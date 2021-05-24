class Paper
{
	constructor(x,y,r)
	{   
       
		var options={
			isStatic:false,
            restitution:2,
            friction:0,
            density:1.2

			}
      
		this.x=x;
		this.y=y;
		this.r=r
       this.image=loadImage("paper.png");
		this.body=Bodies.rectangle(x, y, r, options);
 		World.add(world, this.body);
	 
	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
		
			rect(0,0,this.w, this.h);
			pop()
			
	}

}