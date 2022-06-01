function Employee(firstName){
    this.firstName = firstName;
    this.sayHello = function(name){
        console.log(`Hi ${name}, my name is ${this.firstName}`);
    }
}

function Manager(firstName, lastName){
    Employee.call(this, firstName); //'call' digunakan untuk copy dari cunstructor lain, kemudian parameternya silakan diisi sesuai constructor asal
    this.lastName = lastName;
}

const anggit = new Manager("Anggit", "Puguh");
console.log(anggit);