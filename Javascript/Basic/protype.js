// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name=name;
    this.batteryLevel=batteryLevel;  
}

Robot.prototype.charge=()=>{
  if (this.batteryLevel>80){
    return this.batteryLevel=100
  } else {
    return this.batteryLevel=this.batteryLevel+20
  }
  

}

const robot = new Robot(name, batteryLevel);
robot.charge();