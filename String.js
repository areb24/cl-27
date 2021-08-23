class String{
    constructor(body1,pointB,length,stiffness){
        var options = {
            bodyA:body1,
            pointB:pointB,
            stiffness:stiffness,
            length:length
        }
this.string = Constraint.create(options);
this.pointB = pointB;
World.add(world,this.string);
    }
    display(){
    var pointA = this.string.bodyA.position;
    var pointB = this.string.bodyB.position;
    strokeWeight(4);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}