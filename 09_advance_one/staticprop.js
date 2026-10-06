//Static = something that belongs to the class itself, not to the objects created from the class.

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Anshuiya = new User("Anshuiya")

Anshuiya.logMe()
console.log(User.createId())// static method ->method belongs to the class itself not the objects
// Anshiya.createId() wont work cause the method is of the object not the class 



class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId()); wont work for inherited objects also