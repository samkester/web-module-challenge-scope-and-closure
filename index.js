// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


// 1. Counter1 contains an internal `count` variable that can't be accessed by outside code. Counter2's `count` is exposed for other code to act on.
// 2. Counter1 uses closure, specifically the `count` variable that is declared in `counterMaker` but accessed in `counter`.
// 3. Counter2 is preferable if we need other code to be able to affect the count; Counter1 is preferable if we specifically want to avoid that.
// Counter1 is also preferable where we need a large number of counters running in parallel, each with their own count.


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

const inning = () => Math.floor(Math.random() * 3);

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numInnings){
  const result = {home: 0, away: 0};
  for(let i = 0; i < numInnings; i++)
  {
    result.home += inning();
    result.away += inning();
  }
  return result;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

const ordinals = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];

const getInningScore = (inning, score) => {console.log(`${ordinals[inning]} inning: ${score.away} - ${score.home}`)};

function scoreboard(getInningScore, inning, numInnings) {
  const result = {home: 0, away: 0};
  for(let i = 0; i < numInnings; i++)
  {
    result.home += inning();
    result.away += inning();
    getInningScore(i, result);
  }
  return `Final score: ${result.away} - ${result.home}`;
}

console.log(scoreboard(getInningScore, inning, 9));
