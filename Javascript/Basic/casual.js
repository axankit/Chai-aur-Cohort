

function charge(batteryLevel) {
    if (batteryLevel>80){
        batteryLevel=100
      } else {
        batteryLevel=batteryLevel+20
      }
      return batteryLevel
}

console.log(charge(85))
// charge(40)