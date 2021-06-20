class Waste{
    constructor(){
        var wasteOption = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5
    
        }

     this.body = Bodies.circle(40,570,20,wasteOption);
	 World.add(world,this.body);

    }

    display(){
        fill('red');
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,20,20);
      
    }
}