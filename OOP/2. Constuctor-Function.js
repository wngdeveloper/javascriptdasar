//CONSTRUCTOR FUNCTION
//Penamaannya diawali huruf besar

function Person(){

}

function PremiumMember(){

}

//MEMBUAT OBJECT DARI CONSTRUCTOR FUNCTION
const eko = new Person();
const budi = new Person();

//PROPERTY DI CONSTRUCTOR FUNCTION
{
    function Orang(){
        this.namaDepan = "";  //cara menambahkan property di constructor function
        this.namaBelakang = "";
    }
    
    const andi = new Orang();
    andi.namaDepan = "Andi";
    
    const beta = new Orang();
    
    console.log(andi);
    console.log(beta);
}

//METHOD DI CUNSTRUCTOR FUNCTION
{
    function Person2(){
        this.firstName = "";
        this.lastName = "";
        this.sayHello = function (name){
            console.log(`Hello ${name}, my name is ${this.firstName}`)
        }
    }

    const anggit = new Person2();
    anggit.firstName = "Anggit";
    anggit.lastName = "Setyawan";
    anggit.sayHello("Ang");

    // console.log(anggit);
}

//PARAMETER DI CONSTRUCTION FUNCTION
{
    function Person3(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.sayHello = function (name){
            console.log(`Hello ${name}, my name is ${this.firstName}`);
        }
    }

    const anggit = new Person3("Anggit", "Puguh");
    console.log(`Nama depan saya adalah ${anggit.firstName} dan nama belakang saya adalah ${anggit.lastName}`);
    // anggit.sayHello("Puguh");
}