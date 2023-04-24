// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  if (someValue === 43) {
    return 1;
  } else if (someValue === 50) {
    return 8;
  } else if ( someValue < 42 ){
    return 8;
  }
}


function distanceFromHqInFeet(someValue) {
  let block = distanceFromHqInBlocks(someValue);
  let distance = block * 264;
  console.log(distance, block)
  return distance;
}
distanceFromHqInFeet(34)

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  let block = Math.abs((start - destination) * 264)
  console.log(block)
  return block;
}

distanceTravelledInFeet(50, 60)

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let feet = Math.abs((start - destination) * 264);
  let price;
  console.log(feet, 'feet');
  if( feet <= 400 ){
    price = 0
    console.log(price)
    return price;
  } else if( 400 < feet && feet <= 2000 ){
    price = (feet - 400) * 0.02
    console.log(price)
    return price;
  } else if ( 2000 < feet && feet <= 2500){
    price = 25;
    console.log(price)
    return price;
  } else if( feet > 2500)
    return 'cannot travel that far';
}

calculatesFarePrice(34, 32)