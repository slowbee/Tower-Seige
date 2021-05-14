class Slingshot{
	constructor(body,pointB)
	{
		
		var options={ 
            bodyA:body,			 
			pointB:pointB, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.pointB=pointB
		this.slingShot=Constraint.create(options)
		World.add(world,this.slingShot)
	}


	display()
	{
		if(this.slingShot.bodyA)
		{
			var bodyA=this.slingShot.bodyA.position;
			var pointB=this.pointB

			strokeWeight(5);	
			stroke(4)	
			line(bodyA.x,bodyA.y,pointB.x,pointB.y);
		
		}
	}
  fly() {
    this.slingShot.bodyA = null;
}

attach(body) {

    this.slingShot.bodyA = body;

}
}
