// 1. Buatlah function dalam JavaScript yang menerima input berupa string, kemudian
// menampilkan string tersebut ke terminal.
// Contoh:
// Input -> “hello world!”
// Maka tampilan pada terminal “hello world!”
console.input = (inputname) => inputname;
console.log("hello world")

// 2. Buatlah function dalam JavaScript untuk menghitung nilai kuadrat dari sebuah angka!
// Contoh:
// Input -> 2
// Output -> 4
var hasil = Math.pow(2, 2)
console.log(hasil)

// 3. Celcius & Fahrenheit adalah satuan suhu, buatlah function dalam javascript untuk
// mengkonversi satuan suhu Celcius ke Fahrenheit! (inputnya berupa derajat celcius yang akan
// diubah menjadi Fahrenheit)
// Contoh:
// Input -> 20
// Output -> 68
function temperature(valNum) {
    let temperature = valNum * 1.8 + 32
    return temperature
}

console.log(temperature(20))

// 4. Buatlah sebuah function dalam javascript yang menerima input berupa string, kemudian
// mengeluarkan output berupa string input yang sudah dikonversi menjadi lowercase.
// Berikut 3 Contohnya:
// a. Input -> “Makan Nasi”
// Output -> “makan nasi”
// b. Input -> “KE RUMAH NENEK”
// Output -> “ke rumah nenek”
// c. Input -> “bErmAin BoLa”
// Output -> “bermain bola”
const to_LowerCase = (input) => input.toLowerCase()
console.log("Convert to LowerCase: " + to_LowerCase("Makan Nasi"))

// 5. Buatlah function untuk menghitung jumlah huruf tertentu dalam sebuah string; Jumlah
// parameter ada 2, pertama adalah string, kedua adalah huruf/karakter yang ingin dihitung
// Contoh:
// Input -> “sepak bola”, “a”
// Output -> 2
// Output 2 dikarenakan huruf “a” dalam “sepak bola” ada 2
// Berikut contoh functionnya, text adalah string input dan char adalah karakter/huruf yang
// akan dihitung:
// function count_char(text, char) {
// // tulis kode kamu disini
// }
const count_length = (text, char) => {
    let text_array = [];
    let char_array = [];

    for (let i = 0; i < text.length; i++) {
        text_array.push(text[i]);
    }

    text_array.forEach((element) => {
        if (element === char) {
            char_array.push(element);
        }
    });

    return char_array.length;
};

console.log(count_length("Sepak Bola", "a"));


// 6. Buatlah function dalam javascript yang menerima input berupa array of string kemudian
// mengeluarkan output berupa string yang jumlah huruf terbanyak dalam array tersebut
// Contoh:
// Input -> [‘javascript’, ‘java’, ‘python’, ‘php’]
// Output -> ‘javascript’
const hitungChar = (Array) => {
    let t = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i].length > t) {
            t = Array[i];
        }
    }
    return t;
}
console.log(hitungChar(['javascript', 'java', 'python', 'php']))

// 7. Buatlah function dalam javascript yang menerima input berupa array of integer kemudian
// mengeluarkan output berupa nilai terbesar ke dua dari array tersebut, jika jumlah element
// dalam array kurang dari 2, maka nilai yang dikembalikan adalah 0
// Berikut 3 Contoh: 
// a. Input -> [3,4,1,6]
// Ouput -> 4
// b. Input -> [6]
// Ouput -> 0
// c. Input -> [7,1]
// Output -> 1
const secondArrayMax = (array) => {
    let secondMax = 0;
    if (array.length !== 1) {
        let max = Math.max.apply(null, array), // get the max of the array
            maxi = array.indexOf(max);
        array[maxi] = -Infinity; // replace max in the array with -infinity
        secondMax = Math.max.apply(null, array); // get the new max
        array[maxi] = max;
    }

    return secondMax;
};

console.log(secondArrayMax([6, 1]));

// 8. Buatlah function dalam javascript yang menerima input berupa string kemudian
// mengeluarkan output berupa jumlah huruf vocal dari string tersebut.
// Contoh:
// Input -> “manado”
// Output -> 3
// Output 3 dikarenakan ada 3 huruf vokal di “manado” yaitu 2 huruf “a” dan 1 huruf “o”

const hurufVokal = (input) => {
    let text_array = [];
    let vokal_array = [];
    for (let i = 0; i < input.length; i++) {
        text_array.push(input[i]);
    }

    text_array.forEach((item) => {
        if (
            item === "a" ||
            item === "i" ||
            item === "u" ||
            item === "e" ||
            item === "o"
        ) {
            vokal_array.push(item);
        }
    });

    return vokal_array.length;
};

console.log(hurufVokal("Manado"));

// 9. Buatlah function dalam javascript untuk mengitung factorial, function tersebut menerima
// input berupa integer (harus lebih dari 0), untuk referensi berikut adalah rumus factorial:

// Contoh:
// Input -> 4
// Output -> 6
function factorial(num) {
    if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}

console.log(factorial(4))

// 10. Buatlah function untuk menghitung nilai rata-rata (mean) dari input berupa array
// Contoh:
// Input -> [3,5,7,3]
// Output -> 4.5
function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let avg = sum / arr.length;
    return avg;
}

console.log(getAverage([3, 5, 7, 3]))