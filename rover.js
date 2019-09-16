// Rover Object Goes Here
// ======================
 
let rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};
 
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
     
    case 'S':
      rover.direction = 'E';
      break;
   
    case 'W':
      rover.direction = 'S';
      break;
     
    case 'E':
      rover.direction = 'N';
      break;
     
    default:
      rover.direction = 'N';
      break;
  }
  console.log("Rover look at : " + rover.direction);
}
 
function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
     
    case 'S':
      rover.direction = 'W';
      break;
   
    case 'W':
      rover.direction = 'N';
      break;
     
    case 'E':
      rover.direction = 'S';
      break;
     
    default:
      rover.direction = 'N';
      break;
  }
  console.log("Rover look at : " + rover.direction);
}
 
function moveForward(rover){
  rover.travelLog.push({
    x: rover.x,
    y: rover.y,
  });
 
  switch (rover.direction) {
    case 'N':
      rover.y++;
      break;
     
    case 'E':
      rover.x++;
      break;
     
    case 'S':
      rover.y++;
      break;
     
    case 'W':
      rover.x--;
      break;
  }
  console.log('X : ' + rover.x + ' - Y : ' + rover.y);
}
 
function commands(cmds, rover) {
  cmds.split('').forEach(cmd => {
    switch(cmd) {
      case 'l':
        turnLeft(rover);
        break;
       
      case 'r':
        turnRight(rover);
        break;
       
      case 'f':
        moveForeward(rover);
        break;
    }
  });
}
 
let cmds = "rfrffflff";
 
commands(cmds, rover);