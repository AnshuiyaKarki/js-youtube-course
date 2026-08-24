//Immediate;y Invoked Function Expressions(IIFE)

// used to:
// To run code immediately
// To create a private scope and avoid polluting global variables

(function chai(){ //named IIFE
    console.log("DB CONNECTED")
})();
(()=>{ //unnamed IIFE
    console.log("DB2 CONNECTED")
})()

