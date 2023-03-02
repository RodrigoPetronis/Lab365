

//Regra 1: Defina a posição inicial e a posição final que trocar;



/* function regra1(inicial, final) {

    const array = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitória"]
    const newArray = []

    if (inicial < 0 || final < 0) {
        return console.log("Não pode ser valores menores que 0")
    }

    if (inicial >= array.length || final >= array.length) {
        return console.log("Não pode ser valores maiores que a lista")
    }

    if (typeof (inicial) !== "number" || typeof (final) !== "number") {
        console.log("O tipo de informação não é válida!")
    }


    for (let i = 0; i < array.length; i++) {

        if (i === inicial) {
            newArray.push(array[final])
            continue
        }
        if (i === final) {
            newArray.push(array[inicial])
            continue
        }
        newArray.push(array[i])
    }


     array.map((_, index) => {
        if (index === inicial) return newArray.push(array[final])
        if (index === final) return newArray.push(array[inicial])
        newArray.push(Array[index])
    }) 
    console.log(newArray)

}

regra1(2, 4) */


//Ex2

function find(nome) {
    const array = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitória"]
    const newArray = []

    const novaArray = array.filter((i) => ( i !== nome ))
    console.log(novaArray)
}

find("Luisa")