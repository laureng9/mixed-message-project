console.log("Creating a story");

const storyStarterData = {
    characters: ['Fairy', 'Prince', 'Healer', 'Guard', 'Blacksmith', 'Queen'],
    settings: ['Forest', 'Castle', 'Pond', 'Mountain', 'Cave', 'Town center'],
    situations: ['Looking for treasure', 'Finding a unique medicinal plant', 'Forging a magical sword', 'Traveling through a portal to another world', 'Speaking to a jester', 'Going to battle with the evil king']
};

function getRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

for (let prop in storyStarterData) {
    const randomIndex = getRandomNumber(storyStarterData[prop].length);
    const arrayValue = storyStarterData[prop][randomIndex];

    switch (prop) {
        case 'characters':
            console.log(`Your character is a ${arrayValue}`);
            break;
        case 'settings':
            console.log(`Your setting takes place in the: ${arrayValue}`);
            break;
        case 'situations':
            console.log(`Your situation is ${arrayValue}`);
            break;
        default:
            console.log('There is not engough information to generate a plot for your story. Please try again.');
            break;
    }
}









// console.log(getRandomNumber(6));
// console.log(getRandomNumber(10));
// console.log(getRandomNumber(3));
