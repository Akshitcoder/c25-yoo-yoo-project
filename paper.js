class Paper
{
	constructor()
	{
		var options={
        restitution:0.8,
        friction:1.0,
        density:1.0,
		 isStatic:false
		
		}
		this.image = loadImage("paper.png")
			this.body=Bodies.circle(200,300,9,options);
		World.add(world, this.body);
	}
	display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,70,70);
        pop();
      }

}