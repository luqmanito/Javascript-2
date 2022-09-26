
*TASK 1*

let words = [`kata 1`, `kata 2`, `kata 3`]

// 1. pop()
// definisinya dia berfungsi menghilangkan elemen mulai dari paling belakang pada array, dan menampilkan kembali sisanya dalam bentuk array, tidak ada parameter.

//  words.pop()
//  console.log(words)


// 2. shift()
// definisinya dia berfungsi menghilangkan elemen mulai dari paling depan pada array, dan menampilkan kembali sisanya dalam bentuk array, tidak ada parameter.

//  words.shift()
//  console.log(words)


// 3. unshift()
// definisinya dia berfungsi menambah elemen mulai dari paling depan pada array dan menampilkan kembali sisanya dalam bentuk array, tidak ada parameter.

//  words.unshift(`kata pengganti`)
//  console.log(words)


// 4. slice()
// definisinya dia berfungsi mengembalikan sebagian data array, terdapat opsional parameter berisikan index start, dan index end yang dipilih, sifatnya imutable.

//  console.log (words.slice(1, 3))
//  console.log(words) // bila di console log data array, dia tdk akan mengubah data array aslinya


// 5. indexOf()
// definisinya menghitung di index ke berapa si suatu elemen pada array, bila tidak ditemukan akan menghasilkan value -1,
// berisikan parameter value elemen yang dicari, dan opsional parameter fromindex, mulai dari index keberapa yang mau dicari.

// const berapaJumlahnya = words.indexOf(`kata 3`,)
// console.log(berapaJumlahnya) // outputnya ==> 2





*TASK 2*

const nama = [
    `Abigail`, `Alexandra`, `Alison`,
    `Amanda`, `Angela`, `Bella`,
    `Carol`, `Caroline`, `Carolyn`,
    `Deirdre`, `Diana`, `Elizabeth`,
    `Ella`, `Faith`, `Olivia`, `Penelope`
]


function searchName(input, inputNum, callback) {

    let inputUper = input[0].toUpperCase() + input[1]

    let output = []
    for (let i = 0; i < nama.length; i++) {
        if (nama[i].indexOf(input) !== -1 || nama[i].indexOf(inputUper) !== -1) {
            output.push(nama[i])
        }
    }
    callback(output, inputNum)
}

function callback(output, inputNum) {
    let result = output.slice(0, inputNum)
    console.log(result)
}

searchName('an', 3, callback)




*TASK 3*

function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {

    if (nilaiAwal < nilaiAkhir && dataArray.length <= 5) {
        console.log(`Jumlah angka dalam dataArray harus lebih dari 5`);
    } else if (nilaiAwal > nilaiAkhir && dataArray.length > 5) {
        console.log(`Nilai akhir harus lebih besar dari nilai awal`);
    } else {
        let result = []
        const output = dataArray.map((el) => {
            if (el > nilaiAwal && el < nilaiAkhir) {
                result.push(el)
            }
        })
        result.sort((a, b) => a - b)
        console.log(result)
    }
}

SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
