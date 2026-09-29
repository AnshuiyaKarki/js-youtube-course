// ============================================================
// 1. CREATING A PROMISE
// ============================================================

const promiseOne = new Promise(function(resolve, reject) {

    // Do an async task
    // Example: DB calls, cryptography, network requests

    setTimeout(function() {
        console.log('Async task 1 is complete');

        resolve()
        // resolve() → Promise becomes FULFILLED
        // Since we didn't pass anything:
        // resolve() returns/passes undefined
    }, 1000)
})


// .then() runs when the Promise is RESOLVED/FULFILLED

promiseOne.then(function() {
    console.log("Promise 1 consumed");
})


// ============================================================
// 2. PROMISE WITHOUT STORING IT IN A VARIABLE
// ============================================================

new Promise(function(resolve, reject) {

    setTimeout(function() {
        console.log("Async task 2");

        resolve()
        // Promise fulfilled
    }, 1000)

}).then(function() {

    // Runs after resolve()
    console.log("Async 2 resolved");
})


// ============================================================
// 3. RESOLVE() CAN PASS DATA
// ============================================================

const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(function() {

        resolve({
            username: "Anshuiya",
            employer: "Google"
        })

        // resolve(data)
        // ↓
        // The data is passed to the .then() callback
    }, 1000)
})


promiseThree.then(function(user) {

    // user receives whatever resolve() passed
    console.log(user);

    // user = {
    //   username: "Anshuiya",
    //   employer: "Google"
    // }
})


// ============================================================
// 4. resolve → then → then → catch → finally
// ============================================================

const promiseFour = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true

        if (!error) {

            resolve({
                username: "Anshuiya",
                employer: "Google"
            })

        } else {

            reject('ERROR: Something went wrong')

            // reject(data)
            // ↓
            // Promise becomes REJECTED
            // ↓
            // .catch() handles it
        }

    }, 1000)
})


promiseFour

.then((user) => {

    // Runs ONLY if promise was resolved

    console.log(user);

    return user.username

    // return creates a NEW Promise internally
    // and passes "Anshuiya" to the next .then()
})

.then((username) => {

    // Receives the value returned by the previous .then()

    console.log(username);

})

.catch(function(error) {

    // Runs if the Promise is rejected
    // or an error occurs in the chain

    console.log(error);

})

.finally(() => {

    // Runs whether Promise is RESOLVED or REJECTED

    console.log("The promise is either resolved or rejected")

})


// ============================================================
// 5. ASYNC + AWAIT
// ============================================================

const promiseFive = new Promise(function(resolve, reject) {

    setTimeout(function() {

        let error = true

        if (!error) {

            resolve({
                username: "javascript",
                password: "123"
            })

        } else {

            reject('ERROR: JS went wrong')
        }

    }, 1000)
})


// async function
// → makes this function return a Promise
//
// await
// → waits for the Promise to settle
// → gets the resolved value
//
// await can only normally be used inside an async function

async function consumePromiseFive() {

    try {

        const response = await promiseFive

        // If promiseFive resolves:
        // response gets the value from resolve()

        console.log(response)

    } catch(error) {

        // If promiseFive rejects:
        // catch receives the rejected value

        console.log(error)
    }
}

consumePromiseFive()


// ============================================================
// 6. FETCH + ASYNC/AWAIT
// ============================================================

async function getAllUsers() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )

        // fetch() returns a Promise
        // await waits for that Promise
        // response = Response object

        const data = await response.json()

        // response.json() also returns a Promise
        // await waits for it
        // data = actual JavaScript data/object/array

        console.log(data)

    } catch(error) {

        console.log("error")
    }
}

getAllUsers()


// ============================================================
// 7. SAME FETCH THING USING YOUR OWN PROMISE + .then()
// ============================================================

const getEveryUser = new Promise((resolve, reject) => {

    fetch("https://jsonplaceholder.typicode.com/users")

    .then((response) => {

        resolve(response)

        // Pass the response to getEveryUser
        // ↓
        // getEveryUser.then() receives it
    })

    .catch((error) => {

        reject(error)

        // Pass rejection to getEveryUser.catch()
    })
})


getEveryUser

.then((response) => {

    // response = value passed by resolve(response)

    return response.json()

    // response.json() returns a Promise
    // return passes that Promise to the next .then()
})

.then((data) => {

    // data = parsed JSON data

    console.log(data)

})

.catch((error) => {

    // Handles rejection/errors

    console.log("error")

})