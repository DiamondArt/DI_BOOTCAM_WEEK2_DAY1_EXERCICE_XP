/* 
|Exercise 1: Your Favorite Food 
|------------------------------
| Store your favorite food into a variable.
| Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
| Console.log I eat <favorite food> at every <favorite meal>
*/

let favoriteFood = "Alloco and fish";
let favoriteMeal = "Dinner";

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

/* 
|Exercise 2 : Series
|------------------------------
| Part I
|------------------------------
|Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
|Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
|Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
|For example : black mirror, money heist, and the big bang theory
|Console.log a sentence using both of the variables created above
*/

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.toString();

console.log(`I watched ${myWatchedSeriesLength}: ${myWatchedSeriesSentence}`);

/* 
|Exercise 2 : Series
|------------------------------
| Part II
|------------------------------
|Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
|Add, at the end of the array, the name of another series you watched.
|Add, at the beginning of the array, the name of your favorite series.
|Delete the series “black mirror”.
|Console.log the third letter of the series “money heist”.
|Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
*/

myWatchedSeries[myWatchedSeriesLength -1] = "friends" ;
myWatchedSeries.push("Supernatural");
myWatchedSeries.unshift("Swallville");
myWatchedSeries.pop("black mirror");

console.log(myWatchedSeries[2].charAt(3));  //log the third letter of the series “money heist”
console.log(myWatchedSeries);

/* 
|Exercise 3: The Temperature Converter
|-------------------------------------
|Store a celsius temperature into a variable.
|Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
|Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
|Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
*/

let tempCelsius = 31
let tempFahrenheit = (tempCelsius/5)* 9 + 32;

console.log(`${tempCelsius}°C is ${tempFahrenheit.toFixed(0)}°F`);

/* 
|Exercise 4: Guess The Answers
|-----------------------------
|For each expression, predict what you think the output will be in a comment
|(//) without first running the command.
*/

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because a and b are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction:It will output 23, because a and b are numbers
// Actual: 23

console.log(c) //third expression
// Prediction: the value of c is undefined, because is not value
// Actual: undefined

console.log(3 + 4 + '5') //four expression
// Prediction: It will output 75, because 3 and 4 are numbers and latest value is a string
// Actual: 75

/* 
|Exercise 5: Guess The Answers
|-----------------------------
|For each expression, predict what you think the output will be in a comment
|(//) without first running the command.
*/

typeof(15)
// Prediction: It will output number
// Actual: number

typeof(5.5)
// Prediction: It will output number
// Actual: number

typeof(NaN)
// Prediction: It will output number
// Actual: number

typeof("hello")
// Prediction: It will output string
// Actual: string

typeof(true)
// Prediction: It will output boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: It will output boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: It will output hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: It will output NaN because hamburgers and s aren't numbers
// Actual: NaN

"1" + "3"
// Prediction: It will output string 13
// Actual: 13

"1" - "3"
// Prediction: It will output -2
// Actual: -2

"johnny" + 5
// Prediction: It will output johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: It will output NaN because johnny isn't number
// Actual: NaN

99 * "hello"
// Prediction: It will output NaN because hello isn't number
// Actual: NaN

1 != 1
// Prediction: It will output boolean false
// Actual: false

1 == "1"
// Prediction: It will output boolean true
// Actual: true

1 === "1"
// Prediction: It will output boolean false
// Actual: false

/* 
|Exercise 6: Guess The Answers
|-----------------------------
|For each expression, predict what you think the output will be in a comment
|(//) without first running the command.
*/

5 + "34"
// Prediction: It will output string 534
// Actual:534

5 - "4"
// Prediction: It will output 1
// Actual: 1

10 % 5
// Prediction: It will output 0
// Actual: 0

5 % 10
// Prediction: It will output 5
// Actual: 5

"Java" + "Script"
// Prediction: It will output JavaScript
// Actual:JavaScript

" " + " "
// Prediction: It will output two space
// Actual: '  '

" " + 0
// Prediction:  It will output two ' 0'
// Actual: ' 0'

true + true
// Prediction: It will output 2
// Actual: 2

true + false
// Prediction: It will output two 1
// Actual: 1

false + true
// Prediction: It will output 1
// Actual:1

false - true
// Prediction: It will output -1
// Actual: -1

!true
// Prediction: It will output false
// Actual: false

3 - 4
// Prediction: It will output -1
// Actual: -1

"Bob" - "bill"
// Prediction: It will output NaN because bob and bill aren't numbers
// Actual:NaN
