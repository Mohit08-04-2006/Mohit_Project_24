class HorizontalWall{
     constructor(){
        var wallOptions = {
            isStatic:true
          }

        this.body = Bodies.rectangle(650,580,150,20,wallOptions);
         World.add(world,this.body);
    }

    display(){
     fill('white');
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,150,20);
    }
}