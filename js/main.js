/**
 * 
 * ЗАДАНИЕ 1.1
 * 
 * Сделайте в стиле es5, а затем в стиле es6 (по аналогии из 
 * дополнительных видео -> 3 примеры наследования -> типы на es5 и es6)
 * ,конструктор Product, который принимает параметры name и price, 
 * сохраните их как свойства объекта. Также объекты типа Product должны 
 * иметь метод make25PercentDiscount, который будет уменьшать цену в 
 * объекте на 25%. Имейте в виду, что метод make25PercentDiscount не 
 * должен быть внутри функции-конструктора, и также не нужно создавать 
 * отдельный объект-прототип (как объект transport в уроке).
 * 
**/

function startFirst(){

    let productItem = new Product('Product', 100);

    productItem.make25PercentDiscount();

    console.log(productItem);

    alert('Все готово! Откройте консоль.');

}

/* //ES5
function Product (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function(){
    let discount = 0.25;
    this.price = this.price - this.price*discount;
};  */

//ES6
class Product {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount(){
        let discount = 0.25;
        this.price = this.price - this.price*discount;
    }
}


/**
 * 
 * ЗАДАНИЕ 1.2
 * 
 * Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования), 
 * а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
 * б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
 * Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
 * 
 **/

function startSecond() {

   let  post = new AttachedPost('Max', 'description', new Date()),
        post2 = new Post('MaxF', 'descriptionF', new Date());
    console.log(post2);
    post.edit('Новый текст');
    post.makeTextHighlighted();
    console.log(post);
    alert('Все готово! Откройте консоль.');

}


/* //ES5
function Post (author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(newText){
    this.text = newText;
};

function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}; */

//ES6
class Post{
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(newText){
        this.text = newText;
    }
}
class AttachedPost extends Post {
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}

/**
 * 
 * ЗАДАНИЕ 1
 * 
 * Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999], мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
 * - единицы (в свойстве units)
 * - десятки (в свойстве tens)
 * - сотни (в свойстве hundereds)
 * Например, для числа 45 мы должны получить следующий объект:
 * units: 5, - это единицы
 * tens: 4, - это десятки
 * hundreds: 0, - это сотни
 * Если число было передано вне [0, 999] диапазона, не целое число или вообще не число, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 * 
 **/

function startThird() {
    let number = +prompt('Введите число в диапазоне [0, 999]');
    let obj = {};
    if(isNaN(number)){
        alert('Вы ввели не число!');
        console.log(obj);
        return obj;
    }
    if(!Number.isInteger(number)){
        alert('Ваше число не является целым!');
        console.log(obj);
        return obj;
    }
    if (number < 0 || number > 999){
        alert('Ваше число не входит в заданный диапазон!');
        console.log(obj);
        return obj;
    }
    
    obj = new Obj(number);

    console.log(obj);
    alert('Все готово! Перейдите в консоль.');
    return obj;
}

class Obj {
    constructor(number){
        this.hundereds = Math.floor(number/100);
        this.tens = Math.floor((number / 10)) % 10;
        this.units = number % 10;
    }
}