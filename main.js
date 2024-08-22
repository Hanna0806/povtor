// TypeError
//Возникает ошибка рот попытке выполнить операцию на значении неправильного типа
let str = 'str'
// str()
let obj = {}
// obj.map()
let num = 24
// num.toUpperCase()

//ReferenceError
//возникает когда код ссылается на несуществующую или необъявленную переменную
// console.log(age)
// let age
// console.log(age)
// const age1
// console.log(age1)

//SyntaxError
//возникает при синтактической ошибке в коде
// {[}

//RangeError
//ошибка возникает когда значение передается за пределы допустимого диапазона
// let array = new Array(2)
// console.log(array);
// let array1 = new Array(2, 3)
// console.log(array1);
// let array2 = new Array(-1)
// console.log(array2);

//EvalError
//возникает в ф-ях eval

//Error
// let er = new Error('fgfdgjfgj')
// console.log(er);

//синтаксис
try {
    // код
} catch (error) {
    // oбработка ошибки
}

//1)
//  try {
// console.log('try')
//  } catch (error) {
//     console.log('catch')
//  }

//2)
//  try {
//     console.log('try 2)')
//     console.log(notVariable)
//     console.log('этот код не выполнится')
//      } catch (error) {
//         console.log(error)
//         console.log('catch 2)')
//      }
// console.log('дошел до конца')

//3)
// try {
//     console.log('try 3)')
//     let str = 'str'
// } catch (error) {
//     console.log(error)
//     console.log('catch 3)')
// }
// console.log('дошел до конца')

// 4)
// try {
//     console.log('try 4)')
//     const arr = [1, 2, 3, 4]
//     const res = arr.map((i) => {
//         console.log(i);
//         return i()
//     })
// } catch (error) {
//     console.log('catch 4)')
// }
// console.log('дошел до конца')

// 4.1)
// try {
//     console.log('try 4.1)')
//     const arr = [1, 2, 3, 4]
//     const res = arr.map((i) => {
//         try{
//             console.log(i);
//             return i()
//         } catch (error) {
//             console.log('catch 4.1')
//         }
//     })
//     console.log(res);
// } catch (error) {
//     console.log('catch 4.1)')
// }
// console.log('дошел до конца')

//5)
// try работает только с тем кодом который можно возпроизвести

//6) 
//try и catch работают синхронно
// try {
//     console.log('try 6')
//     setTimeout(() => {
//         let str = 'str'
//         str()
//     }, 1000)
// } catch (error) {
//     console.log('catch 6)')
// }
// console.log('дошел до конца')

//6.1
// try {
//     console.log('try 6.1')
//     setTimeout(() => {

//         try {
//             let str = 'str'
//                 str()

//         } catch (error) {
//             console.log('catch 6.1')
//         }


//     }, 1000)
// } catch (error) {
//     console.log('catch 7)')
// }
// console.log('дошел до конца')

//8)
// try{
// fggg
// } catch(error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack)
// }
// console.log('дошел до конца')

//9)
// try{
// fggg
// } catch {
//     console.log('catch 9)')
// }
// console.log('дошел до конца')

// 10)
// try {
//     const json = '{"age": 32}';


//     const parseJson = JSON.parse(json)
//     console.log(parseJson)
//     if (parseJson.name) {
//         // код
//     } else {
//         // дай понять что что-то не так
//         throw new Error('наше собств сообщение об ошибке')
//         // throw er

//         console.log(er)
//         console.log(er.name)
//         console.log(er.message)
//         console.log(er.stack)
//         // throw er
//     }
// } catch (error) {
//     console.log('catch 10')
// } finally {
//     console.log('выполни код  в любом случае')
// }
// console.log('дошел до конца')

//11)

// function foo() {
//     try {
//         if(confirm('Выбросить ошибку?')) {
//             noFoo()
//         } else {
//             return 'TRY - second'
//         }

//         } catch(error) {
//         console.log(error);
//         } finally {
//             console.log('finaly with return - first');  
//         }
// }
// console.log(foo())
// console.log('дошел до конца')

// //12)
// function funcWithCatch() {
//     try {
//         // код
//     } finally {
//         throw new Error('текст для ошибки')
//     }
// }

// window.onerror = function(message, url, line, col, error) {
//     console.log('ошибочка')
//     console.log('message', message)
//     console.log('url', url)
//     console.log('line', line)
//     console.log('col', col)
//     console.log('error', error)

// }
// funcWithCatch()

// console.log('дошел до конца')

//12)
class CustomError extends Error {
    constructor(mes) {
        super(mes)
        // this.name = 'CustomError'
        this.name = this.constructor.name
        this.stack = (new Error()).stack
    }

    somethingDo() {
        console.log('nvknkjkvn')
    }
}

try {
    throw new CustomError('привет как дела ты ошибся')
} catch (error) {
    console.log(error)
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log('дошел до конца')