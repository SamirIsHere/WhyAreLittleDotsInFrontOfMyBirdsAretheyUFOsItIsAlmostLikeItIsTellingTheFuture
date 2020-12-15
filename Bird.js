class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [];
    this.SmokeyTheBear = loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    }
    for(var s = 0; s<this.trajectory.length; s++){
      image(this.SmokeyTheBear, this.trajectory[s][0], this.trajectory [s][1])
      //Use image to display
    }
  }
}
