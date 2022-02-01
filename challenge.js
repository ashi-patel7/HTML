//fizzbuzz challenge
//Write a program that will console log integers 1 to 100 but print “Fizz” if an integer is divisible by 3
//“Buzz” if an integer is divisible by 5 and “FizzBuzz” if an integer is divisible by both 3 and 5


for(let i = 1; i<=100; i++){ //iterate to 100
    if(i%15==0) { //LCM
        console.log('Fizzbuzz')
    }
    else if(i%3==0){
        console.log('Fizz')
    }
    else if(i%5==0){
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}

//Write a program that will print the song "99 bottles of beer on the wall", based on the lyrics
// x bottles of beer on the wall, x bottles of beer. take one down and pass it around x-1 bottles on the wall

let bottles = 99;
while (bottles){
    switch(bottles){
      case 1:
        console.log(`1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, ${bottles--} bottles of beer on the wall.`);
        console.log(`No more bottles of beer on the wall, No more bottle of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`);
        break;
      default:
        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take one down and pass it around, ${bottles--} bottles of beer on the wall.`);
    }
  }