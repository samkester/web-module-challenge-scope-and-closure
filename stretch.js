/*
1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

```js
(function(){
  var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```
*/

// Assuming that lines 1-3 are just creating and executing an anonymous function (which seems like a needlessly complex way of doing things) they should both be undefined.
// Both variables are declared in the anonymous function's scope and are not retained afterwards.
// Closure shouldn't apply, because closure flows only from a parent function into a child function, and there is no child function here.
// Var also shouldn't matter, because it's still function scoped, it's just not block scoped.

(function(){
    var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// Strangely, b is defined, and removing var makes a defined as well, suggesting that JS is making those global rather than function-scoped variables. Quite why this would be useful, I couldn't say.
// Actually it seems more likely to be dangerous than useful.

/*
2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```
*/

function createBase(base)
{
    return function(add)
    {
        return base + add;
    }
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27