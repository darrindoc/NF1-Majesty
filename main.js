const tributeChest = []

const payTribute = (tributeID, tributeDescription, queenID) => {
    const tribute = {
        id: tributeID,
        description: tributeDescription,
        queenID: queenID
    }

    tributeChest.push(tribute)

}

payTribute(1, "large ruby", 1)
payTribute(2, "magic carpet", 3)
payTribute(3, "flaming sword", 4)
payTribute(4, "baby dragon", 2)
payTribute(5, "invisibility cloak", 5)

console.log(tributeChest)







// const athena = hailTheQueen("Athena Perez")
// console.log(athena)

// const charisse = hailTheQueen("Charisse Ford") 
// console.log(charisse)

// const jenna = hailTheQueen("Jenna Solis") 
// console.log(jenna)

// const ramona = hailTheQueen("Ramona")
// console.log(ramona)

// const monica = hailTheQueen("Monica Dinglehopper")
// console.log(monica)


const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
}

const queens = []

const createQueen = (queenId, queenName, queenCountry) => {
    const queenObject = {
        id: queenId,
        name: queenName,
        country: queenCountry
    }

    queens.push(queenObject)
}

createQueen(1, "Trinity Terry", "France")
createQueen(2, "Sydney Noh", "England")
createQueen(3, "Christina Ashworth", "Belgium")
createQueen(4, "Aja Washington", "Spain")
createQueen(5, "Athena Perez", "Germany")


// for (const queenObject of queens) {
//     const hailMessage = hailTheQueen(queenObject.name)
//     console.log(hailMessage)
// }

for (const queenObject of queens) {

    for (const tribute of tributeChest) {

        if (tribute.queenID === queenObject.id) {
            console.log(`${queenObject.name} has taken the ${tribute.description}`)
        }
    }
}