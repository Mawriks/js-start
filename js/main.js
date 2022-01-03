/**
 * 
 * С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль,
 * с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
 * 0 – это ноль, 1 – нечетное число, 2 – четное число
 * 
**/

function startFirst(){

    for( let i = 0; i <= 10; i++ ) {

        if ( i == 0 ) {

            console.log( i + ' - это ноль.' );

            continue;

        }

        if ( i % 2 ) {

            console.log( i + ' - это нечетное число.' );

        } else {

            console.log( i + ' - это четное число.' );

        }

    }

    alert('Все готово! Откройте консоль.');

}

/**
 * 
 * Задание 2
 * 
 * Выведите в консоль значения, указанные рядом с комментариями:
 * 
 **/

function startSecond() {

    const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число
                }
            },
            {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
            },
        ]
    };

    console.log('Автор: ' + post.author,'; Количество дизлайков первого комментария: ' + post.comments[0].rating.dislikes,'; Id пользователя, оставившего второй комментарий: ' + post.comments[1].userId,'; Текст второго комментария: ' + post.comments[1].text);

    alert('Все готово! Откройте консоль.');

}

/**
 * 
 * Задание 3
 * 
 * Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
 * товар применить скидку 15%, можете использовать метод forEach
 * 
 **/

function startThird() {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];

    products.forEach(function (product) {
        product.price = product.price - (product.price*0.15);
    })

    console.log(products);
    alert('Все готово! Откройте консоль.');
}

/**
 * 
 * Задание 4
 * 
 * Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
 * 1. Получить все товары, у которых есть фотографии, можете использовать метод filter
 * 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
 * 
 */
  
 function startFourth() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];

    let sortProducts = products.slice();

    let withImgProducts = products.filter(function (product) {
        if (product.photos && product.photos.length > 0){
            return 1;
        }
        return 0;
    });

    sortProducts.sort(function(a, b) {

        if (a.price < b.price){
            return -1;
        }

        if (a.price > b.price){
            return 1;
        }

        return 0;

    });

    console.log(sortProducts);

    console.log(withImgProducts);


    alert('Все готово. Откройте консоль!')
 }

/**
 * 
 * Задание 5
 * 
 * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
 * То есть выглядеть должно примерно так: for(…){здесь пусто}
 * 
 */

 function startFifth() {

    for (let i = 0; i < 10; console.log(i), i++){}

 }

/**
 * 
 * Задание 6
 * 
 * Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
 * только у вашей горки должно быть 20 рядов, а не 5:
 * 
 */

 function startSix() {

    for (let i = 0, str = '*'; i < 20; i++){
        if (i>0){
            str+='*';
        }
        console.log(str);
    }

 }