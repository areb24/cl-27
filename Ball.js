class Ball
{
	constructor(x,y,r)
	{
		var options={
			'restitution':1,
			'friction':1,
			'density':1,
			'frictionAir':0
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		//isStatic: true

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			stroke("white");
			ellipseMode(RADIUS);
			strokeWeight(4);
			fill(100,100,100)
			ellipse(0,0,this.r);
			pop()
			
	}

}