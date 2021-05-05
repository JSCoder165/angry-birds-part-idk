class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.trajectory = []
    Matter.Body.setAngle(this.body, angle);
  }

display(){
super.display();
  if(this.body.velocity.x > 1.5){
    var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeimage, this.trajectory[i][0], this.trajectory[i][1])
    }
  }
}