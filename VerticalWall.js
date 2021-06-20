class VerticalWall{
    constructor(x,y){
        var wallOptions = {
            isStatic:true
          }

         this.body = Bodies.rectangle(x,y,20,100,wallOptions);
         World.add(world,this.body);
    }

    display(){
        fill('white');
       rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,20,100);

    }
}