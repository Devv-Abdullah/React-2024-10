// build our first class in js:
// attribute(properties): name, age, isMarred
// methods: eat(), sleep(), speak()
// Inheritance
// encapsulation
// typeof

class Person{    //class => first digit capital letter
    #isUserMarred
    constructor(username, userAge, isUserMarred){
        this.username = username;
        this.userAge = userAge;
        this.#isUserMarred = isUserMarred;

        if(typeof username !== 'string'){
            throw new Error('username must be a string');
        }
        if(!username){
            throw new Error('Username is required');
        }
        if(typeof userAge !== 'number'){
            throw new Error('userAge must be a number');
        }
        else if(userAge >= 40){
            throw new Error('userAge must be 39')
        }
        if(!userAge){
            throw new Error('UserAge is required');
        }
        if(typeof isUserMarred !== 'boolean'){
            throw new Error('isUserMarried must be a boolean');
        }
        if(isUserMarred != true && isUserMarred != false){
            throw new Error('isUserMarred is required');
        }
    }

    // اي اشي تابع للكلاس بشكل مباشر بستخدم معه ذيس سواء كان اتريسوت او ميثود اي اشي ك ارغومنت بدون ذيس زي فود لانه تابع للمثود فقط
    eat(food){
        return `${this.sleep()} after ${this.name} is eating ${food}`; // ~ بطبع فيها القيم
    }

    sleep(){
        return `${this.name} is sleeping`;
    }

    speak(){
        return `${this.name} is speaking`;
    }

    //  getter and setter
    getIsUserMarred(){
        // return this.#isUserMarred;
        return `this info is private for the person`;
    }

}

class Employ extends Person{
    #salary
    constructor(username, userAge, isUserMarred, jopTitle, salary){
        //     super :> ك اني استدعيت الكونستركتر اللي داخل البيرسون
        super(username, userAge, isUserMarred);
        this.jopTitle = jopTitle;
        this.#salary = salary;
    }

    /*static required(param){ // في حال ما وصلني برميتر هون مكان بارام رح يعطيني ايرور <=throw
        throw new Error(`${param} is required`);
    }*/

        getSalary(){
            return this.#salary / 2;
        }
}

// this > pointer to the newly created object
// create an object from this class بتاشر لكل قيمه لاي اوبجكت تابعه عندي في داخل الميموري اللي انحفظ فيها هذا الاوبجكت
var ahmad = new Person('Ahmad', 25, false); //arguments
// console.log(ahmad);
// console.log(ahmad.eat());
var nada = new Person('Nada', 23, true);
// console.log(nada.eat("mansaf")); 

/*var mohammed = new Employ( 'Mohammed', 30, false);
// console.log(mohammed.eat('bread'));
console.log(mohammed);*/

var mohammed = new Employ( 'Mohammed', 30, false, 'Software Engineer');
// console.log(mohammed);

// console.log(mohammed.isUserMarred); //undefined
// console.log(mohammed.getIsUserMarred()); //this info is private for the person

var mohammed = new Employ( 'Mohammed', 30, false, 'Software Engineer', 300);
// console.log(mohammed);
console.log(mohammed.getIsUserMarred()); //this info is private for the person > because inheritance
console.log(mohammed.getSalary()); //150
