# dynamic-hooks
## Overview
Provides a cleaner implementation for "hooking" functions.
### How to install:
```
npm i dynamic-hooks
```
### How to use:
**Code:**
```js
// Import the module after installation.
const dhook = require('dynamic-hooks').DynamicHooks;

// An example object, can be anything.
const myObj = {
  myFunction() {
    console.log('2');
  }
}

// Hooking into the method with dynamic-hooks.
// !! Args: Target object, name of the target function, your hook function.
dhook.hookBefore(myObj, 'myFunction', () => {
  console.log('1');
});

// Call the method
myObj.myFunction();
```
**Log:**
```
1
2
```
