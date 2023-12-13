// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
    const blocksAway = Math.abs(location - 42); 
    const feetPerBlock = 264; 
    return blocksAway * feetPerBlock;
  }

  function distanceTravelledInFeet(currentBlock, destinationBlock) {
    const blocksTravelled = Math.abs(destinationBlock - currentBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination-start) * 264;
    if (distance >= 2500){
        return "cannot travel that far";

    }else if (distance > 2000){
        return 25;

    }else if (distance > 400) {
        return (distance - 400) * 0.02;
    }else {
        return 0;
    }
}
  
 

  
  
  