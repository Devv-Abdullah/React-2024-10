// build our first class in js:
// attribute(properties): name, age, isMarred
// methods: eat(), sleep(), speak()

class Person{    //class => first digit capital letter
    constructor(name, age, isMarred){
        this.name = name;
        this.age = age;
        this.isMarred = isMarred;
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
}

// this > pointer to the newly created object
// create an object from this class بتاشر لكل قيمه لاي اوبجكت تابعه عندي في داخل الميموري اللي انحفظ فيها هذا الاوبجكت
var ahmad = new Person('Ahmad', 25, false); //arguments
// console.log(ahmad);
// console.log(ahmad.eat());
var nada = new Person('Nada', 23, true);
console.log(nada.eat("mansaf")); 