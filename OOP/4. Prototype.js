//Mengenal Object Instance
function Person(firstName, lastName){ //constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name){
        console.log(`Hello ${name}, my name is ${this.firstName}`);
    }
}


Person.prototype.sayBye = function(){  //cara menambahkan property ke prototype
    console.log("Good Bye");
}

Person.prototype.run = function(){
    console.log(`${this.firstName} is running`);
}

const anggit = new Person("Anggit", "Setyawan"); //object instance
anggit.sayHello("Joko");

const budi = new Person("Budi", "Nugraha");
budi.sayHello("Joni");

console.log(anggit);
console.log(budi);

anggit.sayBye();
anggit.run();