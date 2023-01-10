const hailstone = (number) => {
    let sequence = [];
    sequence.push(number);

    while (true) {
        if (number == 1) {
            break;
        }
        if (number % 2 === 0) {
            number = number / 2;
            sequence.push(number);
            if (number == 1) {
                break;
            }
        }
        if (number % 2 !== 0) {
            number = number * 3 + 1;
            sequence.push(number);
            if (number == 1) {
                break;
            }
        }
    }
    console.log(sequence)
    return sequence;
}

const enterNumber = () => {
    let number = Number(prompt('Enter a integer number: '));

    hailstone(number)
}

enterNumber();