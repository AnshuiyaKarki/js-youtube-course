// # JavaScript Execution Context

// * JavaScript is **single-threaded** → it can execute one piece of JavaScript code at a time.

// ## Types of Execution Context

// 1. **Global Execution Context (GEC)**
// 2. **Function Execution Context**
// 3. **Eval Execution Context** → created when code is executed using `eval()`

// ### Global Execution Context

// * The **Global Execution Context** is created when JavaScript starts executing a script.
// * In a browser, the global object is `window`.
// * In Node.js, the global environment is different.

// // ---

// # How JavaScript Executes Code

// Each execution context has **2 phases**:

// ### 1. Memory Creation Phase

// Memory is allocated for variables and functions.

// Example:


let val1 = 10
let val2 = 5

function addnum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addnum(val1, val2)
let result2 = addnum(5, 2)


// During the memory creation phase:

// ```text
// val1 → uninitialized (TDZ)
// val2 → uninitialized (TDZ)
// addnum → function definition
// result1 → uninitialized (TDZ)
// result2 → uninitialized (TDZ)
// ```

// > `let` and `const` are in the **Temporal Dead Zone (TDZ)** until their declaration is executed.

// ---

// ### 2. Execution Phase

// The code is executed line by line.

// ```text
// val1 → 10
// val2 → 5
// ```

// When this runs:

// ```js
// let result1 = addnum(val1, val2)
// ```

// A **new Function Execution Context** is created for `addnum()`.

// ### Inside `addnum()`

// ```js
// function addnum(num1, num2) {
//     let total = num1 + num2
//     return total
// }
// ```

// #### Memory Creation Phase

// ```text
// num1 → uninitialized
// num2 → uninitialized
// total → uninitialized
// ```

// #### Execution Phase

// ```text
// num1 → 10
// num2 → 5
// total → 15
// ```

// Then:

// ```text
// return 15
// ```

// The function execution context is removed, and execution returns to the **Global Execution Context**.

// ```text
// result1 → 15
// ```

// The same process happens again for:

// ```js
// let result2 = addnum(5, 2)
// ```

// So:

// ```text
// result2 → 7
// ```

// ---

// # Eval Execution Context

// * An **Eval Execution Context** is created when JavaScript code is executed using the `eval()` function.
// * `eval()` takes a string and executes it as JavaScript code.

// Example:

// ```js
// eval("let x = 10; console.log(x)")
// ```

// The code inside `eval()` gets its own execution context while it runs.

// > `eval()` is rarely used in modern JavaScript and is generally avoided because it can create security and performance problems.

// ---

// # Call Stack

// The **Call Stack** keeps track of which functions are currently executing.

// It follows:

// **LIFO → Last In, First Out**

// Think of it like a stack of plates.

// Initially:

// ```text
// | Global Execution Context |
// ```

// When `addnum()` is called:

// ```text
// | addnum()                 |
// | Global Execution Context |
// ```

// When `addnum()` finishes:

// ```text
// | Global Execution Context |
// ```

// The `addnum()` execution context is **popped/removed** from the call stack.

// ### Important

// Every time you call a function, a **new Function Execution Context** is created.

// ```js
// addnum(10, 5)
// addnum(5, 2)
// ```

// These are **two separate function execution contexts**, even though they use the same function definition.
