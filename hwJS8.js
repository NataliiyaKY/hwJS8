// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)----------------------------------------------------


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let newUser1 = new User(11, 'Ola', 'Ola1', '1@gmail.com', 111111)
let newUser2 = new User(2, 'Bla', 'Bla1', '2@gmail.com', 111222)
let newUser3 = new User(3, 'Cla', 'Cla1', '3@gmail.com', 111333)
let newUser4 = new User(14, 'Dla', 'Dla1', '4@gmail.com', 111444)
let newUser5 = new User(5, 'Ela', 'Ela1', '5@gmail.com', 111555)
let newUser6 = new User(6, 'Fla', 'Fla1', '6@gmail.com', 111666)
let newUser7 = new User(17, 'Gla', 'Gla1', '7@gmail.com', 111777)
let newUser8 = new User(8, 'Hla', 'Hla1', '8@gmail.com', 111888)
let newUser9 = new User(9, 'Ila', 'Ila1', '9@gmail.com', 111999)
let newUser10 = new User(10, 'Gla', 'Gla1', '10@gmail.com', 111100)

let newArray = [newUser1, newUser2, newUser3, newUser4, newUser5, newUser6, newUser7, newUser8, newUser9, newUser10]


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)--

let idParn = newArray.filter((el) => !(el.id % 2))


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let idGrowth = newArray.sort((a, b) => a.id - b.id)


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = new Client(5, 'Ally', 'Ally1', '11@gmail.com', 222111, ['apple', 'Cherry', 'Kiwi', 'Grapefruit', 'Avocado'])
let client2 = new Client(3, 'Blly', 'Blly1', '12@gmail.com', 222222, ['Kiwi', 'Grapefruit', 'Avocado'])
let client3 = new Client(4, 'Clly', 'Clly1', '13@gmail.com', 222333, ['apple', 'Cherry', 'Grapefruit', 'Avocado'])
let client4 = new Client(7, 'Dlly', 'Dlly1', '14@gmail.com', 222444, ['apple', 'Cherry', 'Kiwi', 'Avocado', 'Banana', 'Cherry', 'Pear'])
let client5 = new Client(4, 'Elly', 'Illy1', '15@gmail.com', 222555, ['apple', 'Cherry', 'Kiwi', 'Grapefruit'])
let client6 = new Client(8, 'Flly', 'Flly1', '16@gmail.com', 222666, ['apple', 'Cherry', 'Grapefruit', 'Avocado', 'apple', 'Cherry', 'Grapefruit', 'Avocado'])
let client7 = new Client(4, 'Glly', 'Glly1', '17@gmail.com', 222777, ['apple', 'Cherry', 'Kiwi', 'Avocado'])
let client8 = new Client(3, 'Hlly', 'Hlly1', '18@gmail.com', 222888, ['Cherry', 'Kiwi', 'Avocado'])
let client9 = new Client(2, 'Illy', 'Illy1', '19@gmail.com', 222999, ['Kiwi', 'Grapefruit'])
let client10 = new Client(1, 'Jlly', 'Jlly1', '20@gmail.com', 222100, ['apple'])

let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10]


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let orderGrow = clients.sort((a, b) => a.order.length - b.order.length)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Cars(model, virobnik, yearMade, maxSpeed, volumeDvig) {
    this.model = model;
    this.virobnik = virobnik;
    this.yearMade = yearMade;
    this.maxSpeed = maxSpeed;
    this.volumeDvig = volumeDvig;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`модель - ${this.model}, виробник - ${this.virobnik}, рік випуску - ${this.yearMade}, максимальна швидкість - ${this.maxSpeed}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed
    }
    this.changeYear = function (newValue) {
        this.yearMade = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let tesla = new Cars('Tesla', 'Tesla1', 1910, 500, 10)
tesla.increaseMaxSpeed(700)
console.log(tesla)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Cars1 {
    constructor(model, virobnik, yearMade, maxSpeed, volumeDvig) {
        this.model = model;
        this.virobnik = virobnik;
        this.yearMade = yearMade;
        this.maxSpeed = maxSpeed;
        this.volumeDvig = volumeDvig;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log(`модель - ${this.model}, виробник - ${this.virobnik}, рік випуску - ${this.yearMade}, максимальна швидкість - ${this.maxSpeed}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.yearMade = newValue
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let cars1 = new Cars1('Tesla2', 'Tesla22', 1920, 400, 20)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

function Cinderella(name, year, footSize) {
    this.name = name;
    this.year = year;
    this.footSize = footSize;
}

let cind1 = new Cinderella('Cindera', 10, 31)
let cind2 = new Cinderella('Dindera', 11, 32)
let cind3 = new Cinderella('Eindera', 12, 33)
let cind4 = new Cinderella('Findera', 13, 34)
let cind5 = new Cinderella('Gindera', 14, 35)
let cind6 = new Cinderella('Hindera', 15, 36)
let cind7 = new Cinderella('Iindera', 16, 37)
let cind8 = new Cinderella('Jindera', 17, 38)
let cind9 = new Cinderella('Kindera', 18, 39)
let cind10 = new Cinderella('Lindera', 19, 40)

let arrCinder = [cind1, cind2, cind3, cind4, cind5, cind6, cind7, cind8, cind9, cind10]

class Prints {
    constructor(name, year, footSize) {
        this.name = name;
        this.year = year;
        this.footSize = footSize;
    }
}

let prints1 = new Prints('Tsar', 20, 32)

console.log(prints1)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (let el of arrCinder) {
    if (el.footSize === prints1.footSize) {
        console.log(el.name)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let cindMatch = arrCinder.find((el) => el.footSize === prints1.footSize)
