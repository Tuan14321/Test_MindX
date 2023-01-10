const freeShipping = (order) => {
    let isFreeShip = false;
    let total = 0;

    for (let i = 0; i < Object.values(order).length; i++) {
        total += Object.values(order)[i];
    }

    if (total > 50) {
        isFreeShip = true;
    } else {
        isFreeShip = false;
    }

    console.log(isFreeShip)
    return isFreeShip;
}

freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 });
freeShipping({ "Flatscreen TV": 399.99 })
freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 })
freeShipping({ "1": 2.3, "2": 35.4, "3": 42.2 })

