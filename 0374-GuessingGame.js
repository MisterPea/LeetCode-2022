class Guess {
  constructor() {
    this.pick = Math.floor(Math.random() * ((2 ** 31) - 1));
  }

  guess(num) {
    if (num < this.pick) {
      return 1;
    } else if (num > this.pick) {
      return -1;
    } else {
      return 0;
    }
  }
}

const _ = new Guess();
/**
 * @return {number} Returns the number picked by the Guess class
 */
var guessNumber = function (n) {
  let min = 0;
  let max = (2 ** 31) - 1;
  let mid = Math.ceil((min + max) / 2);
  while (true) {
    const myGuess = _.guess(mid);
    if(myGuess === 0) {
      return mid
    }
    if(myGuess === -1) {
      max = mid;
      mid = Math.ceil((min + max) / 2);
    }
    if(myGuess === 1) {
      min = mid
      mid = Math.ceil((min + max) / 2);
    }
  }
};

